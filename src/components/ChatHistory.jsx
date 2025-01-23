import React, { useEffect, useState } from "react";
import { database, ref, onValue } from "./firebase";

const ChatHistory = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const chatRef = ref(database, "chats");
    onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      const chatList = data ? Object.values(data) : [];
      setChatHistory(chatList);
    });
  }, []);

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Chat History</h2>
      {chatHistory.map((chat, index) => (
        <div key={index} className="mb-2">
          <p><strong>User:</strong> {chat.user}</p>
          <p><strong>Bot:</strong> {chat.bot}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
