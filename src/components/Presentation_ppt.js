import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player/lazy'
import items from '../data/data_presentation';
import '../css/presentation_ppt.css'




function Presentation_ppt() {

const [teams] = useState(items);
const [value, setValue] = useState(0);
const {vsr1,vsr2,th, members,major,image} = teams[value]
    return (
        <section className='section'>
      <div className="title">
         <h4 className='subtitle'>PRESENTATION COMPETITION</h4>
         <div className="underline"></div>
         <p>The first ever SCUT presentation competition among international students. Listen to the wonderful voices of SCUT students while they express their exeperience during the COVID19 pandemic</p>
    
         
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
}

export default Presentation_ppt
