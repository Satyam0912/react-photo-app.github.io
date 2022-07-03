import notfoundimg from '../assests/notfound-image3.gif';

const Notfound = () => {
    return (
        <div style={{ height: '100vh', color: 'bisque' }}>
            <img src={notfoundimg} alt="notfound"></img>
            <h1>404 Page Not found</h1>
        </div>
    )
}

export default Notfound