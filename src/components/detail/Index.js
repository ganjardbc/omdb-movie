import React, { Component } from 'react'
import Loader from '../modules/Loader'
import PopupImage from '../modules/PopupImage'
import axios from 'axios'

class App extends Component {
	constructor () {
		super()
		this.state = {
            data: null,
            visibleLoader: false,
            selectedData: "",
            visiblePopup: false 
        }
    }

    componentDidMount () {
        let { url } = this.props.match.params
        this.getData(url)
    }

    getData (url) {
        this.setState({ visibleLoader: true  })

        axios.get(`https://www.omdbapi.com/?apikey=5bbce687&i=${url}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then(res => res.data)
        .then((res) => {
            console.log('res', res)

            this.setState({ 
                visibleLoader: false,
                data: res  
            })
        })
        .finally(() => {
            this.setState({ visibleLoader: false })
        })
    }

    render () {
        const { visibleLoader, visiblePopup, selectedData, data } = this.state 
        let { url } = this.props.match.params
        return (
            <div style={{ paddingTop: 20, paddingBottom: 15 }}>
                <div id="navbar" className="box-shadow">
					<div id="navbar-container" className="display-flex left align-center">
						<div>
                            <button className="btn btn-icon btn-white" onClick={() => this.props.history.goBack()}>
                                <i className="fa fa-lg fa-arrow-left" />
                            </button>
                        </div>
                        <div className="fonts fonts-12 semibold black" style={{ marginLeft: 10 }}>{ data && data.Title ? data.Title : url }</div>
					</div>
				</div>

                {visibleLoader ? (
                    <Loader />
                ) : (
                    <div className="main-detail" style={{ paddingTop: 15, paddingBottom: 15 }}>
                        <div className="left">
                            <div className="image image-230px" style={{height: '290px', cursor: 'pointer'}} onClick={() => this.setState({selectedData: data && data.Poster ? data.Poster : '', visiblePopup: true})}>
                                {data && data.Poster ? <img src={data.Poster} alt={data.Title} /> : <i className="post-center icn fa fa-lw fa-vr-cardboard" />}
                            </div>
                        </div>
                        <div className="right">
                            <div className="card box-shadow" style={{ marginBottom: 15 }}>
                                <div style={{ marginBottom: 10 }} className="display-flex">
                                    <div className="fonts fonts-12 semibold black">{ data && data.Title }</div>
                                </div>
                                <div style={{ marginBottom: 10 }} className="display-flex wrap">
                                    <div className="card-value main" style={{margin: '2px 2px'}}>{ data && data.Runtime }</div>
                                    <div className="card-value main" style={{margin: '2px 2px'}}>Imdb Ratings ({ data && data.imdbRating })</div>
                                    <div className="card-value main" style={{margin: '2px 2px'}}>Imdb Votes ({ data && data.imdbVotes })</div>
                                </div>
                                <div style={{ marginBottom: 10 }}>
                                    <div className="fonts fonts-11 black">{ data && data.Plot }</div>
                                </div>
                                <div className="main-info" style={{ marginBottom: 5 }}>
                                    <div className="mi-left fonts fonts-11 grey">Rated</div>
                                    <div className="mi-right fonts fonts-11 black">{ data && data.Rated }</div>
                                </div>
                                <div className="main-info" style={{ marginBottom: 5 }}>
                                    <div className="mi-left fonts fonts-11 grey">Released</div>
                                    <div className="mi-right fonts fonts-11 black">{ data && data.Released }</div>
                                </div>
                                <div className="main-info" style={{ marginBottom: 5 }}>
                                    <div className="mi-left fonts fonts-11 grey">Awards</div>
                                    <div className="mi-right fonts fonts-11 black">{ data && data.Awards }</div>
                                </div>
                                <div className="main-info" style={{ marginBottom: 5 }}>
                                    <div className="mi-left fonts fonts-11 grey">BoxOffice</div>
                                    <div className="mi-right fonts fonts-11 black">{ data && data.BoxOffice }</div>
                                </div>
                                <div className="main-info" style={{ marginBottom: 5 }}>
                                    <div className="mi-left fonts fonts-11 grey">Director</div>
                                    <div className="mi-right fonts fonts-11 black">{ data && data.Director }</div>
                                </div>
                                <div className="main-info" style={{ marginBottom: 5 }}>
                                    <div className="mi-left fonts fonts-11 grey">Language</div>
                                    <div className="mi-right fonts fonts-11 black">{ data && data.Language }</div>
                                </div>
                                <div className="main-info" style={{ marginBottom: 5 }}>
                                    <div className="mi-left fonts fonts-11 grey">Type</div>
                                    <div className="mi-right fonts fonts-11 black">{ data && data.Type }</div>
                                </div>
                                <div className="main-info" style={{ marginBottom: 5 }}>
                                    <div className="mi-left fonts fonts-11 grey">Year</div>
                                    <div className="mi-right fonts fonts-11 black">{ data && data.Year }</div>
                                </div>
                                <div className="main-info" style={{ marginBottom: 5 }}>
                                    <div className="mi-left fonts fonts-11 grey">Country</div>
                                    <div className="mi-right fonts fonts-11 black">{ data && data.Country }</div>
                                </div>
                            </div>

                            {data && data.Genre && (
                                <div className="card box-shadow" style={{ marginBottom: 15 }}>
                                    <div style={{ marginBottom: 10 }}>
                                        <div className="fonts fonts-12 semibold black">Genres</div>
                                    </div>
                                    <div className="display-flex wrap">
                                        {data && data.Genre.split(",").map((dt, i) => {
                                            return (
                                                <div key={i} className="display-flex" style={{ margin: '2px 2px' }}>
                                                    <div className="card-value main">
                                                        { dt }
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}

                            {data && data.Actors && (
                                <div className="card box-shadow" style={{ marginBottom: 15 }}>
                                    <div style={{ marginBottom: 10 }}>
                                        <div className="fonts fonts-12 semibold black">Actors</div>
                                    </div>
                                    <div className="display-flex wrap">
                                        {data && data.Actors.split(",").map((dt, i) => {
                                            return (
                                                <div key={i} className="display-flex" style={{ margin: '2px 2px' }}>
                                                    <div className="card-value main">
                                                        { dt }
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}

                            {data && data.Writer && (
                                <div className="card box-shadow" style={{ marginBottom: 15 }}>
                                    <div style={{ marginBottom: 10 }}>
                                        <div className="fonts fonts-12 semibold black">Writers</div>
                                    </div>
                                    <div className="display-flex wrap">
                                        {data && data.Writer.split(",").map((dt, i) => {
                                            return (
                                                <div key={i} className="display-flex" style={{ margin: '2px 2px' }}>
                                                    <div className="card-value main">
                                                        { dt }
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}

                            {data && data.Production && (
                                <div className="card box-shadow" style={{ marginBottom: 15 }}>
                                    <div style={{ marginBottom: 10 }}>
                                        <div className="fonts fonts-12 semibold black">Production</div>
                                    </div>
                                    <div className="display-flex wrap">
                                        {data && data.Production.split(",").map((dt, i) => {
                                            return (
                                                <div key={i} className="display-flex" style={{ margin: '2px 2px' }}>
                                                    <div className="card-value main">
                                                        { dt }
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}

                            <div className="card box-shadow" style={{ marginBottom: 15 }}>
                                <div style={{ marginBottom: 10 }}>
                                    <div className="fonts fonts-12 semibold black">Ratings</div>
                                </div>
                                <div className="display-flex wrap">
                                    {data && data.Ratings.map((dt, i) => {
                                        return (
                                            <div key={i} className="display-flex" style={{ margin: '2px 2px' }}>
                                                <div className="card-value main">
                                                    { dt.Source } ({ dt.Value })
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {visiblePopup && <PopupImage cover={selectedData} onClickClose={() => this.setState({visiblePopup: false})} /> }

            </div>
        )
    }
}

export default App 