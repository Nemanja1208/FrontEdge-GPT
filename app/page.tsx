"use client";
import Container from "@mui/material/Container";
import Chat from "../components/Chat";

export default function Home() {
  const handleSendMessage = (message: string) => {
    // Handle sending the message to ChatGPT or perform any other actions
    console.log("Sending message:", message);
  };

  return (
    <Container className="flex items-center justify-center h-screen">
      <Chat onSendMessage={handleSendMessage} />
    </Container>
  );
}
