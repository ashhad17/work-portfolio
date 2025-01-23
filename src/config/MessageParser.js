class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase();
  
      // Add custom logic for matching questions
      if (lowercase.includes("hello")||lowercase.includes("name")||lowercase.includes("hi")) {
        this.actionProvider.handleHello();
      } 
      else if (lowercase.includes("services")||lowercase.includes("service")) {
        this.actionProvider.handleServices();
      }
      else {
        this.actionProvider.handleDefault(message);
      }
      
      
    //   And create a corresponding handler in ActionProvider.js:
      
      
    }
  }
  
  export default MessageParser;
  