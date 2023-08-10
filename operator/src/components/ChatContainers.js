import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ChatInput from "./ChatInput";
import userImage2 from "../images/userImage2.jpg";
import { format } from "timeago.js";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import {
  sendMessageRoute,
  recieveMessageRoute,
} from "../features/Chat/MessageRequest";

export default function ChatContainer({ currentChat, socket }) {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  console.log("arrivalMessage", arrivalMessage);
  // const [notifications, setNotifications] = useState([]);
  // console.log("notifications", notifications);
  const scrollRef = useRef();
  const user = useSelector((state) => state?.auth?.user);
  let userId = user?._id;

  useEffect(() => {
    myFunction();
  }, [currentChat]);

  const myFunction = async () => {
    if (currentChat) {
      console.log("currentChat", currentChat);
      const response = await axios.post(recieveMessageRoute, {
        from: userId,
        to: currentChat._id,
      });
      setMessages(response.data);
    }
  };

  const handleSendMsg = async (msg) => {
    await axios.post(sendMessageRoute, {
      from: userId,
      to: currentChat._id,
      message: msg,
    });
    socket.current.emit("send-message", {
      to: currentChat._id,
      from: userId,
      message: msg,
    });
    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };
  useEffect(() => {
    console.log("ourside if", socket.current);
    if (socket.current) {
      console.log("inside if", socket.current);
      socket.current.on("recieve-message", (msg) => {
        console.log("msg oerator", msg);
        setArrivalMessage({
          fromSelf: false,
          message: msg,
        });
      });
    }
  }, []);
  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {currentChat && (
        <Container1>
          <div className="chat-header">
            <div className="user-details">
              <div className="avatar">
                <img src={userImage2} alt="" />
              </div>
              <div className="username">
                <h3>{currentChat.fullname}</h3>
              </div>
            </div>
          </div>
          <div className="chat-messages">
            {messages &&
              messages?.map((message) => {
                return (
                  <div>
                    <div
                      ref={scrollRef}
                      className={`message ${
                        message.fromSelf ? "sended" : "recieved"
                      }`}
                    >
                      <div className="content ">
                        <p>{message.message}</p>
                        <span style={{ fontSize: "0.7rem" }}>
                          {format(message.time)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <ChatInput handleSendMsg={handleSendMsg} />
        </Container1>
      )}
    </>
  );
}

const Container1 = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-rows: 10% 78% 12%;
  gap: 0.1rem;
  overflow: hidden;
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        overflow-wrap: break-word;
        padding: 0.5rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #4f04ff21;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
    }
  }
`;
