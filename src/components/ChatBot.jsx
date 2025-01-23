import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "../config/chatbotConfig";
import MessageParser from "../config/MessageParser";
import ActionProvider from "../config/ActionProvider";
import "react-chatbot-kit/build/main.css";
import { useState } from "react";
const ChatBot = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleChatbot = () => {
  //   setIsOpen(!isOpen);
  // };

  // return (
  //   <div className="fixed bottom-4 right-4 z-50">
  //     {isOpen && (
  //       <div className="relative w-80 h-120 bg-white shadow-lg rounded-lg overflow-hidden">
  //         {/* Close Button */}
  //         <button
  //           onClick={toggleChatbot}
  //           className="absolute top-2 right-2 w-8 h-8 bg-dark hover:bg-dark-light text-white rounded-full shadow-md flex items-center justify-center transition duration-300"
  //         >
  //           ✖
  //         </button>
  //         {/* Chatbot */}
  //         <Chatbot
  //           config={config}
  //           messageParser={MessageParser}
  //           actionProvider={ActionProvider}
  //         />
  //       </div>
  //     )}
  //     {!isOpen && (
  //       <button
  //         onClick={toggleChatbot}
  //         className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg text-white bg-primary hover:bg-dark-light transition duration-300"
  //       >
  //         💬
  //       </button>
  //     )}
  //   </div>
  // );
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      {!showChatbot ? (
        <button
          className="bg-blue-500 w-10 h-10 text-white px-2 py-2 rounded-full shadow-lg hover:bg-blue-600"
          onClick={() => setShowChatbot(true)}
        >
          💬
        </button>
      ) : (
        <div className="relative w-67 bg-white border border-gray-300 rounded-lg shadow-lg">
          {/* Chatbot Header with Close Button */}
          <div className="flex justify-between items-center p-3 bg-blue-500 text-white rounded-t-lg">
            <h3 className="text-lg font-semibold">Chatbot</h3>
            <button
              className="text-white font-bold text-xl hover:text-gray-300"
              onClick={() => setShowChatbot(false)}
            >
              &times;
            </button>
          </div>

          {/* Chatbot Content */}
          <div className="p-4">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </div>
      )}
    </div>
  );

};

export default ChatBot;
