import React, { useState, useEffect} from 'react'
import ReactPlayer from 'react-player/lazy'
import items from './data';
import logo from './images/scut-logo.png';
// import Teams from './Teams';

// const logo = "https://i.ibb.co/pJdL0K6/scut-logo.png" 

function App(){
  const [teams, setTeams] = useState(items);
  const [value, setValue] = useState(0);

 
  
  

  const {video,vsr1,vsr2,th, members,major,image} = teams[value]
  return(
    <section className='section'>
      <div className="title">
        <h1>SCUT EXTRATIME<img src={logo}/></h1>
         <h4 className='subtitle'>PRESENTATION COMPETITION</h4>
    
         {/* <div className="underline"></div> */}
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
          url={[vsr2]}
          controls = 'true'
          light = {th}
         />
         <a href={vsr1}>USE THIS LINK TO WATCH THE PRESENTATION IF YOU ARE IN CHINA</a>
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
