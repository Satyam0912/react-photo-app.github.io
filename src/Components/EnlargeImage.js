import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';

const EnlargeImage = () => {
    const { id } = useParams();
    const [singlePhoto, setSinglePhoto] = useState({})

    useEffect(() => {
        const getSinglePhotoDetails = async () => {
            try {
                const res = await axios.get(`https://picsum.photos/id/${id}/info`)
                setSinglePhoto(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getSinglePhotoDetails()
    }, [id])

    return (
        <>
            {Object.keys(singlePhoto).length ? (
                < div style={{ height: '100vh', width: '100%' }}>
                    <img
                        src={singlePhoto.download_url}
                        alt='enlarge'
                        style={{ height: '85vh', margin: '20px auto' }}
                    ></img>
                </div >
            ) : (
                <div className="spinner-wrapper">
                    <Spinner animation="border" role="status"></Spinner>
                </div>
            )}
        </>
    )
}

export default EnlargeImage