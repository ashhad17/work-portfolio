import { createChatBotMessage } from "react-chatbot-kit";

const botName = "Techash";

const config = {
  botName,
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}. How can I help you?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "primary",
    },
    chatButton: {
      backgroundColor: "primary",
    },
  },
};

export default config;
