import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PopupImage from './PopupImage'

class App extends Component {
	constructor () {
		super()
		this.state = {
            selectedData: "",
            visiblePopup: false 
        }
    }

    render () {
        const {data} = this.props
        const {visiblePopup, selectedData} = this.state

        return (
            <div className="card box-shadow bg-white">
                <div className="width width-full">
                    <div style={{ width: '100%', marginBottom: 10 }}>
                        <div className="image image-padding bg-grey" style={{cursor: 'pointer'}} onClick={() => this.setState({selectedData: data.cover ? data.cover : '', visiblePopup: true})}>
                            {data.cover ? <img src={data.cover} alt={data.title} /> : <i className="post-middle-absolute icn fa fa-2x fa-vr-cardboard" />}
                        </div>
                    </div>
                    <div style={{ width: '100%', marginBottom: 15 }}>
                        <h2 className="fonts fonts-12 semibold black" style={{marginBottom: 5}}>{ data.title }</h2>
                        <div className="display-flex wrap fonts fonts-10 grey word-break">
                            <div style={{width: 70}}>Type</div>
                            <div style={{width: 'calc(100% - 70px)'}}>: { data.type }</div>
                        </div>
                        <div className="display-flex wrap fonts fonts-10 grey word-break">
                            <div style={{width: 70}}>Year</div>
                            <div style={{width: 'calc(100% - 70px)'}}>: { data.year }</div>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: 40 }}>
                        <NavLink to={ '/detail/' + data.id }>
                            <button className="btn btn-sekunder btn-full">
                                Detail <i className="icn icn-right fa fa-lw fa-arrow-right" />
                            </button>
                        </NavLink>
                    </div>
                </div>

                {visiblePopup && <PopupImage cover={selectedData} onClickClose={() => this.setState({visiblePopup: false})} /> }
            </div>
        )
    }
}

export default App 