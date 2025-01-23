import { db, collection, addDoc } from "./firebase";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async saveMessageToFirebase(userMessage, botResponse) {
    try {
      await addDoc(collection(db, "messages"), {
        userMessage,
        botResponse,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error("Error saving message: ", error);
    }
  }

  handleHello() {
    const message = this.createChatBotMessage("Hello!I am Ashhad's Assistant. How can I assist you?");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
    // this.saveMessageToFirebase("hello", "Hello! How can I assist you?");
  }

  handleDefault(userMessage) {
    const message = this.createChatBotMessage(
      "Sorry, I couldn't understand that. Please contact us via email or whatsapp."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
    // this.saveMessageToFirebase(userMessage, "Sorry, I couldn't understand that. Please contact us via email or whatsapp.");
  }
  
  handleServices() {
    const message = this.createChatBotMessage("Here are the available Services!");
    const message1 = this.createChatBotMessage("FrontEnd Development.");
    const message2 = this.createChatBotMessage("ChatBot Integration.");
    const message3 = this.createChatBotMessage("Many More to Come!! Stay tuned.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message, message1, message2, message3],
    }));
    // this.saveMessageToFirebase("courses", "Here are the available courses!");
  }
}


export default ActionProvider;
