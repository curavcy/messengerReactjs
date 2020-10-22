import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, Input } from "@material-ui/core";
import Message from "./ Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import logo from "./logo.png";
//BEM message__guestCard (component__targeting)

function App() {
  const [input, setInput] = useState(""); //Short memory track
  //When you type change the event with onChange

  const [messages, setMessages] = useState([
    /*{ username: "oguz", message: "hey" },
    { username: "natalie", message: "hello" },*/
  ]);
  const [username, setUsername] = useState("");

  //Run code  on a condition useEffect
  useEffect(() => {
    //run once when the app component loads
    //bring data from docs
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
    //run code here
    //if its blank inside [], this code runs once when the app component loads
  }, []); //condition

  const sendMessage = (event) => {
    event.preventDefault(); //when added form always refresh. This keep the page without refreshing
    // All the logic to send a message goes

    //Add the data input to the db. also order by last post
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"
        alt=""
      />

      <h1>Messenger</h1>
      <h4>Please Keep Clean The Messenger!</h4>
      <h2>Welcome {username}</h2>
      <img className="app__logo" src={logo} alt="" />

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map((
          { id, message } //esx map thru all the array and return as a message.
        ) => (
          <Message key={id} username={username} message={message} /> //parsing text to component message.js.
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
