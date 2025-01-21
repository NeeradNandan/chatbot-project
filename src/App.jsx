import { useState } from 'react'
import ChatInput from './components/ChatInput';
import ChatMessage from './components/ChatMessage';
import './App.css'


{/*Props makes our components reusable*/}




function App() {
const [ chatMessages, setChatMessages ] = useState([
                                                             /*{
                                                                 message: 'hello chatbot',
                                                                 sender: 'user',
                                                                 id: 'id1'
                                                             },
                                                             {
                                                                 message: 'Hello! how can I help you?',
                                                                 sender: 'robot',
                                                                 id: 'id2'
                                                             },
                                                             {
                                                                 message: 'can you get me today\'s date?',
                                                                 sender: 'user',
                                                                 id: 'id3'
                                                             },
                                                             {
                                                                 message: 'Today is January 20',
                                                                 sender: 'robot',
                                                                 id: 'id4'
                                                             },

                                                              */



                                                         ]); //Lifting the state up

return (
    <div
        className="app-container"
    >
        {/*ChatInput()*/}
        {/*Does the same thing as above except it looks like a HTML element*/}
        <ChatMessage
            chatMessages={chatMessages}
        />
        <ChatInput
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
        />
    </div>
);
}

export default App
