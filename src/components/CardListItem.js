import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import './CardListItem.css'

const CardListItem = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.id}`}>
            <Card className="mb-4">
                <Card.Img className="cover" variant="top" src={movie.image} />
                <Card.Body className="px-2">
                    <Card.Title className="pb-4 pt-3"><span>TITLE: </span>{movie.title}</Card.Title>
                    <div className="d-flex justify-content-between">
                        <Card.Subtitle><span>ID: </span>{movie.id}</Card.Subtitle>
                        <Card.Subtitle><span>YEAR: </span>{movie.description.replace(/[()]/g, '').split(' ')[0]}</Card.Subtitle>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default CardListItem
