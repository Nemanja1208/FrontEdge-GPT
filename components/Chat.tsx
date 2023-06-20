"use client";
import { TextField } from "@mui/material";
import { useState } from "react";

export default function Chat() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center mx-auto text-center">
      <div>
        <h1>Welcome to our Chat</h1>
        <h3>Ask away !</h3>
        <div className="w-full">
          <TextField
            id="outlined-basic"
            label="Ask us a question"
            variant="outlined"
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  );
}
