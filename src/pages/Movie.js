import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Image, Row, Col, Spinner } from 'react-bootstrap'

import ErrorModal from '../components/ErrorModal'

import axios from 'axios'
import './Movie.css'

const Movie = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [actors, setActors] = useState([])
    const [loadActors, setLoadActors] = useState(10)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.REACT_APP_API_URL}/Title/${process.env.REACT_APP_API_KEY}/${id}/FullActor,Ratings`)
            .then(res => {
                setLoading(false)
                setActors(res.data.actorList)
                setData(res.data)
                console.log(res.data)
            })
    }, [id])

    const loadMore = () => {
        setLoadActors(prevState => prevState + 10)
    }

    return (
        <Container className="mt-4">
            {
                !loading && data.errorMessage && <ErrorModal isError={true} errorMsg={data.errorMessage} />
            }
            <Row className="py-4 my-4">
                <Col sm={12}>
                    <Link className="back-btn px-4 py-3" to="/">
                        <i className="fas fa-arrow-left mr-2"></i>Go Back
                    </Link>
                </Col>
            </Row>

            <Row>
                {
                    loading && <Col className="text-center">
                        <Spinner animation="border" />
                    </Col>
                }
                {
                    !loading && data && <>
                        <Col md={6}>
                            <Image src={data.image} fluid />
                        </Col>
                        <Col md={6}>
                            <h2 className="mb-4">Title: {data.title}</h2>
                            <div className="d-flex">
                                <div>
                                    <h5 className="mr-4">Ratings :</h5>
                                </div>
                                <div>
                                    {
                                        !loading && data.ratings && <>
                                            <p>IMDB: <strong>{data.ratings.imDb}</strong></p>
                                            <p>FilmAffinity: <strong>{data.ratings.filmAffinity}</strong></p>
                                            <p>Metacritic: <strong>{data.ratings.metacritic}</strong></p>
                                            <p>RottenTomatoes: <strong>{data.ratings.rottenTomatoes}</strong></p>
                                            <p>Tv_com: <strong>{data.ratings.tV_com}</strong></p>
                                            <p>TheMovieDb: <strong>{data.ratings.theMovieDb}</strong></p>
                                        </>
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <hr />
                            <h5>Full Cast &amp; Crew</h5>
                            <div className="cast">
                                <hr />
                                {
                                    !loading && data.actorList && data.actorList.slice(0, loadActors).map(a => {
                                        return (
                                            <div className="my-3">
                                                <Image src={a.image} className="pr-3" /> <span>{a.name}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>


                            {
                                !loading && data.actorList && loadActors < data.actorList.length && (
                                    <div>
                                        <button className="my-2 py-2 px-4 load-actors-btn btn" onClick={loadMore}>Load More</button>
                                    </div>
                                )
                            }
                        </Col>
                    </>
                }
            </Row>
        </Container>
    )
}

export default Movie
