import React, { useState, useEffect} from 'react'
import ReactPlayer from 'react-player/lazy'
import items from './data';
// import Teams from './Teams';

function App(){
  const [teams, setTeams] = useState(items);
  const [value, setValue] = useState(0);

 
  
  

  const {video,th, members,major,image} = teams[value]
  return(
    <section className='section'>
      <div className="title">
         <h3>SCUT PRESENTATION COMPETITION</h3>
         <div className="underline"></div>
      </div>
     
  

    {/* side tab */}
    <div className="tab-container">
      {teams.map((item,index)=>{
        return(
          <button key = {item.id}
          onClick={()=>setValue(index)}
          className= {`team-btn ${index===value && 'active-btn'}`}
          >
            {item.team}
          </button>
        )
      })}
      
      </div>  
    {/* contentent container */}
    <div className="video-container">
      <ReactPlayer
          url={video}
          controls = 'true'
          light = {th}/>
    </div>
  
    <div className="img-container">
       {image.map((photo,index)=>{
    return(
        <img src={photo}/>
    )
  })}
    </div>
    
     
    <div className="name-container">
      {members.map((member,index)=>{
    return(
        <h5 className ='names'>{member}</h5>
    )
  })}
    </div>
    
      
    <div className="major-container">
      {major.map((course,index)=>{
        return(
     
       <h6 className = 'majors'>{course}</h6>
      )
        })}
    </div>
    
  
  
    </section>
  )

};

export default App
