import React from 'react'
import '../CSS/Style.css'

function Chat({ title, chatData, onClick }) {
  return (
    <div className="chat" onClick={ () => onClick(chatData) }>
        <div className="chat-flex">
            <img src="https://static.thenounproject.com/png/1743560-200.png" alt="user-icon"/>
            <div className="chat-text">
                <h5>{title}</h5>
            </div>
        </div>
    </div>
  )
}

export default Chat