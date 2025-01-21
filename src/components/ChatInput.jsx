import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export default function ChatInput({ chatMessages, setChatMessages }) {
    const [ inputText, setInputText ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    async function sendMessage() {
        if (isLoading || inputText === '') {
            return;
        }

        setIsLoading(true);

        setInputText('');

        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            },
        ];

        setChatMessages([
                            ...newChatMessages,
                            {
                                message: 'Typing...',
                                sender: 'robot',
                                id: crypto.randomUUID()
                            }
                        ]);

        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
                            ...newChatMessages,
                            {
                                message: response,
                                sender: 'robot',
                                id: crypto.randomUUID()
                            },
                        ]);

        setIsLoading(false);

    }

    function handleKeyDownEvent(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
        else if (event.key === 'Escape') {
            setInputText('');
        }
    }


    return (
        <div
            className="chat-input-container"
        >
            {/*Fragments helps us to group elements together*/}
            <input
                placeholder="Send a message to chatbot"
                size="30"
                onChange={saveInputText}
                value={inputText} //Controlled Input
                onKeyDown={handleKeyDownEvent}
                className="chat-input"
            />
            {/*Self-closing tags are used where there is no content*/}
            <button
                className="send-button"
                onClick={sendMessage}
            >
                Send
            </button>
        </div>
    );
}