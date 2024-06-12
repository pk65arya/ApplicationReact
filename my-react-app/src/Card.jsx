import profilepic from './assets/pk.jpg'

function Card(){
return(
  <div className="card">
<img className='card-image' src={profilepic} alt="profile picture" />
<h2 className='card-title'>Pradeep Kumar Upadhyay</h2>
<p className='card-text'>I am trying Hard to Get Job</p>
  </div>
);
}
export default Card