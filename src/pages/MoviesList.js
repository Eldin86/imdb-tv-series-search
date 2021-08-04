import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Col, Row, Container, Spinner } from 'react-bootstrap'
import CardListItem from '../components/CardListItem'
import Header from '../components/Header'
import ErrorModal from '../components/ErrorModal'

const MoviesList = () => {
    const [loading, setLoading] = useState(false)
    const [keyword, setKeyword] = useState('')
    const [movies, setMovies] = useState([])
    //k_rw9yiwb1
    useEffect(() => {
        setLoading(true)
        let timeout
        if (keyword) {
            setTimeout(() => {
                axios.get(`${process.env.REACT_APP_API_URL}/SearchSeries/${process.env.REACT_APP_API_KEY}/${keyword}`)
                    .then(res => {
                        setLoading(false)
                        setMovies(res.data)
                    })
            }, 800)
        } else {
            setLoading(false)
            setMovies([])
        }

        return () => clearTimeout(timeout)
    }, [keyword])

    const addToFavoritesHandler = (movie) => {
        let existingMovies = JSON.parse(localStorage.getItem('movie'))
        if(existingMovies === null) existingMovies = []
        existingMovies.push(movie)
        localStorage.setItem('movie', JSON.stringify(existingMovies))
    }

    return (
        <>
            {
                !loading && movies.errorMessage && <ErrorModal isError={true} errorMsg={movies.errorMessage} />
            }
            <Header keyword={keyword} setKeyword={setKeyword} />
            <Container className="py-4">
                <Row>
                    {
                        !loading && movies.length===0 && (
                            <Col>
                                <h4 className="text-center">No searched terms</h4>
                            </Col>
                        )
                    }
                    {
                        loading && <Col className="text-center">
                            <Spinner animation="border" />
                        </Col>
                    }
                    {
                        !loading && movies.results && movies.results.map(movie => {
                            return (
                                <Col key={movie.id} sm={4} md={6} lg={4}>
                                    <CardListItem movie={movie} />
                                    <button onClick={() => addToFavoritesHandler(movie)}>Add to Favorites</button>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default MoviesList
