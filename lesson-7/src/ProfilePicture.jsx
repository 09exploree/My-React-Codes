
function ProfilePicture(){
  const imageurl='./src/assets/profile.jpg'
  const handleClick=(e)=> e.target.style.display="none";
  return(
    <img onClick={(e)=>handleClick(e)} src={imageurl} alt="Profile Picture" />
  )
}
export default ProfilePicture;