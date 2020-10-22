import React, { forwardRef } from "react"; //ref animation
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

//wrap with all the dynamic moves with ref
const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  //if user logged in render different style message__user
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${message.username || "Anonymous"}:`} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
