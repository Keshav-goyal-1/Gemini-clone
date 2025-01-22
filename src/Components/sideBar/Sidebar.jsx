import React, { useState } from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'
const Sidebar = () => {

    const [extended,setExtended] = useState(false)

  return (
    <div className='Sidebar' >
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
            <div className="new_chat">
                <img src={assets.plus_icon} alt="" />
               {extended?<p>New Chat</p>:null} 
            </div>
            {extended?<div className="recent">
                <div className="recent_title">Recent</div>
                <div className="recent_entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is react..</p>
                </div>
            </div> :null}
                 
        </div>
        <div className="bottom">
            <div className="bottom_item recent_entry">
                <img src={assets.question_icon} alt="" />
               {extended?<p>Help</p>:null} 
            </div>
            <div className="bottom_item recent_entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom_item recent_entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Setting</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar