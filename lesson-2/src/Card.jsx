import profilePic from './assets/somepic.jpg'
 function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture" />
            <h2 className="card-title">Sk Ahmad</h2>
            <p className="card-text">I am learning react</p>
        </div>
    )
}

export default Card;
