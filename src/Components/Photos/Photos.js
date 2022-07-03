import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import './Photos.css';

const Photos = () => {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        const getPhotos = async () => {
            try {
                const res = await axios.get('https://picsum.photos/v2/list')
                setPhotos(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getPhotos()
    }, [])

    return (
        <Container style={{ minHeight: '100vh' }}>
            <Row>
                {photos.length ? photos.map(singlePhoto =>
                    <Col key={singlePhoto.id} md={3} className="singlePhoto">
                        <Card className="singlePhoto-card">
                            <Card.Header
                                className="singlePhoto-header"
                                style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                            >
                                {singlePhoto.author}
                            </Card.Header>
                            <Card.Img variant="top" src={singlePhoto.download_url} className="photo-img" />
                            <Card.Body
                                className="singlePhoto-body"
                                style={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}
                            >
                                <a
                                    className="btn btn-dark singlePhoto-btn"
                                    target='_blank'
                                    rel="noreferrer"
                                    href={singlePhoto.url}
                                >
                                    view source
                                </a>
                                <Link
                                    className="btn btn-dark singlePhoto-btn"
                                    rel="noreferrer"
                                    to={`/photo/${singlePhoto.id}`}
                                >
                                    view large
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ) : (<div className="spinner-wrapper">
                    <Spinner animation="border" role="status"></Spinner>
                </div>)}
            </Row>
        </Container >
    )
}

export default Photos

/* -------------------------------------------------- */

// axios.get('https://picsum.photos/v2/list')
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))