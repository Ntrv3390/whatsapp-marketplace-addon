import React from 'react'
import '../CSS/Style.css'
import Chat from './Chat'

function Home() {
  return (
    <div className="home">
        <div className="left">
            <Chat title="Group 1"/>
            <Chat title="Group 2"/>
            <Chat title="Group 3"/>
            <Chat title="Group 4"/>
            <Chat title="Group 5"/>
            <Chat title="Group 6"/>
            <Chat title="Group 7"/>
            <Chat title="Group 8"/>
            <Chat title="Group 9"/>
            <Chat title="Group 10"/>
            <Chat title="Group 11"/>
            <Chat title="Group 12"/>
            <Chat title="Group 13"/>
            <Chat title="Group 14"/>
        </div>
        <div className="right">
            <input className="input" placeholder="Enter your message."/>
        </div>
    </div>
  )
}

export default Home