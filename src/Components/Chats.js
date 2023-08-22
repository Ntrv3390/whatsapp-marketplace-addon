import React, { useState } from 'react'
import '../CSS/Style.css'

function Chats(props) {
  const [chatInfo, setChatInfo] = useState(props);
  
  const handleBuyNowClick = () => {
    setChatInfo({ ...chatInfo, hidden: true });
  };
  return (
    <div className={`chats ${chatInfo.hidden ? 'hidden' : ''}`} key={props.key}>
        <img src={props.src} alt="marketplace"/>
        <h4>{props.title}</h4>
        <button onClick={handleBuyNowClick}>Buy Now</button>
    </div>
  )
}

export default Chats