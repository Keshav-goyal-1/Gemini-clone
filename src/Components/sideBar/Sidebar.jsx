import React, { useContext, useState } from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/context'
const Sidebar = () => {

    const [extended,setExtended] = useState(false)
    const {onSent,previousPrompts,setRecentPrompt,newChat} = useContext(Context)

    const loadPrompt= async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <div className='Sidebar' >
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
            <div onClick={()=>newChat()} className="new_chat">
                <img src={assets.plus_icon} alt="" />
               {extended?<p>New Chat</p>:null} 
            </div>
            {extended?<div className="recent">
                <div className="recent_title">Recent</div>
                {previousPrompts.map((item,index)=>{
                    return(
                <div onClick={()=>loadPrompt(item)} className="recent_entry">
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0,18)}..</p>
                </div>

                    )
                }
                )}
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