import React from 'react';
import Sidebar from "../components/chat/Sidebar";
import Chatbar from "../components/chat/Chatbar";

const Chat = () => {
    return (
        <div className='chat'>
            <div className='container'>
                <Sidebar />
                <Chatbar />
            </div>
        </div>
    )
}

export default Chat;