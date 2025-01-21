import { useEffect, useRef } from "react";
import ChatMessageItem from "./ChatMessageItem.jsx";
import "./ChatMessage.css";

export default function ChatMessage ({ chatMessages }) {
    const chatMessagesRef = useRef(null);

    /*
     useRef automatically saves the HTML elements
     */

    useEffect(() => {
        const containerElem = chatMessagesRef.current;
        containerElem.scrollTop = containerElem.scrollHeight;
    }, [chatMessages]);

    /*
     useEffect runs after the component is updated or created
     Also [] is a dependency array which runs the function only when the dependency changes except once after the component is created.
     */
    /*
     useState makes it easier to update the state of an component basically to update the HTML
     Also, state is the data connected to the HTML
     */
    //const [ chatMessages, setChatMessages ] = array; //JS Shortcut (Array Destructuring)

    //const chatMessages = array[0]; //Original or Initial value or data
    //const setChatMessages = array[1]; //Updater function

    /*const chatMessages = [
     {
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
     ];
     */

    return (
        <div
            className="chat-message-container"
            ref={chatMessagesRef}
        >
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessageItem
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                    />
                );
            })
            }
        </div>
    );
}