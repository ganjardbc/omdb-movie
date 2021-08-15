import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Loader from '../modules/Loader'
import Card from '../modules/Card'
import { addMovie, offsetMovie, searchMovie } from '../../store/actions/movieActions'

class App extends Component {
	constructor (props) {
		super(props)
        const {search} = props
		this.state = {
            visibleLoader: false,
            visibleLoaderMore: false,
            search: search ? search : ""
        }
	}

    componentDidUpdate (prevProps) {
        const {movies} = this.props
        if (movies !== prevProps.movies) {
            console.log('movies', this.props)
        }
    }

    componentDidMount () {
        // const {offset, search} = this.props
        // this.getData(search, offset)

        const {movies} = this.props

        if (movies.length > 0) {
            this.setState({visibleLoaderMore: true})
        }
    }

    getData (search, offset) {
        this.setState({ visibleLoader: true, visibleLoaderMore: false })

        let data = []
        if (offset > 1) {
            data = Object.assign([], this.props.movies)
        } else {
            data = []
        }

        axios.get(`https://www.omdbapi.com/?apikey=5bbce687&s=${search}&page=${offset}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then(res => res.data)
        .then((res) => {
            let currentData = res.Search

            currentData && currentData.map((dt) => {
                return data.push({
                    id: dt.imdbID,
                    cover: dt.Poster,
                    title: dt.Title,
                    type: dt.Type,
                    year: dt.Year
                })
            })

            if (data.length > 0) {
                let currentOffset = offset + 1

                console.log('data', data)

                this.props.addMovie(data)
                this.props.offsetMovie(currentOffset)

                this.setState({ 
                    visibleLoader: false,
                    visibleLoaderMore: true
                })
            } else {
                this.setState({ visibleLoaderMore: false, visibleLoader: false })
            }
        })
        .catch(() => {
            this.setState({ visibleLoader: false, visibleLoaderMore: true })
        })
    }

    loadMore () {
        const {offset, search} = this.props
        this.getData(search, offset)
    }

    onSearch (search) {
        this.props.searchMovie(search)
        this.setState({datas: []}, this.getData(search, 1))
    }

    onReset () {
        this.props.addMovie([])
        this.props.offsetMovie(1)
        this.props.searchMovie("")
        this.setState({datas: [], search: "", visibleLoader: false, visibleLoaderMore: false})
    }

	render () {
        const {visibleLoader, visibleLoaderMore} = this.state 
        const {movies, search} = this.props
        const datas = movies

		return (
			<div style={{ paddingTop: 15, paddingBottom: 15 }}>

                <div id="header" className="box-shadow">
					<div id="header-container">
						<div style={{ paddingTop: 3, width: '100%' }}>
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                this.onSearch(search)
                            }} className="display-flex space-between align-center">
                                <div style={{width: 'calc(100% - 102px)'}}>
                                    <input 
                                        type="text" 
                                        className="field field-sekunder" 
                                        placeholder="Search move by title .."
                                        required
                                        onChange={(data) => this.props.searchMovie(data.target.value)}
                                        value={search} />
                                </div>
                                <button type="submit" className="btn btn-icon btn-main">
                                    <i className="fa fa-lw fa-search" />
                                </button>
                                <button type="reset" className="btn btn-icon btn-grey" onClick={() => this.onReset()}>
                                    <i className="fa fa-lw fa-times" />
                                </button>
                            </form>
						</div>
					</div>
				</div>

                <div className="display-flex wrap">
                    {datas && datas.map((dt, i) => {
                        return (
                            <div key={i} className="width width-row-3">
                                <div style={{margin: 10}}>
                                    <Card data={dt} />
                                </div>
                            </div>
                        )
                    })}
                </div>

				{datas && datas.length === 0 && (
                    <div className="content-center" style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <div className="fonts fonts-22 grey" style={{ paddingBottom: 20, paddingTop: 20 }}>
                            <i className="fa fa-2x fa-video-slash" />
                        </div>
                        <div className="fonts fonts-13 black semibold">No Movie's Found</div>
                        <div className="fonts fonts-11 grey">Try to search movie by their titles</div>
                    </div>
                )}

                {visibleLoader && (
                    <Loader />
                )}

                {visibleLoaderMore && (
                    <div className="display-flex center" style={{ paddingTop: 10 }}>
                        <button className="btn btn-sekunder" onClick={() => this.loadMore()}>
                            Load More
                        </button>
                    </div>
                )}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
    movies: state.movie.datas,
    offset: state.movie.offset,
    search: state.movie.search 
})

const mapDispatchToProps = {
    addMovie,
    offsetMovie,
    searchMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
