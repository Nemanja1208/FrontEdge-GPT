import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

interface ChatProps {
  onSendMessage: (message: string) => void;
}

const Chat: React.FC<ChatProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div className="flex flex-row space-x-2">
      <TextField
        label="Message"
        variant="outlined"
        value={message}
        onChange={handleInputChange}
        className="flex-grow"
      />
      <Button
        variant="contained"
        onClick={handleSendMessage}
        className="flex-shrink-0"
      >
        Send
      </Button>
    </div>
  );
};

export default Chat;
