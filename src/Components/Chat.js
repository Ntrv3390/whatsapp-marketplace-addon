import React from 'react'
import '../CSS/Style.css'

function Chat(props) {
  return (
    <div className="chat">
        <div className="chat-flex">
            <img src="https://static.thenounproject.com/png/1743560-200.png" alt="user-icon"/>
            <div className="chat-text">
                <h5>{props.title}</h5>
            </div>
        </div>
    </div>
  )
}

export default Chat