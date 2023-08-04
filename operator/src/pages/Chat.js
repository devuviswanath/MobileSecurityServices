import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import styled from "styled-components";
import { getAllUsers } from "../features/Chat/UserRequest";
import ChatContainer from "../components/ChatContainers";
import Operators from "../components/Operators";
import Welcome from "../components/Welcome";

export default function Chat() {
  const [currentChat, setCurrentChat] = useState(undefined);
  console.log("currentChat", currentChat);

  const user = useSelector((state) => state?.auth?.user);
  let userId = user?._id;
  const socket = useRef();
  const [operators, setOperators] = useState([]);
  // const [notifications, setNotifications] = useState([]);
  // console.log("notifications", notifications);
  useEffect(() => {
    if (userId) {
      socket.current = io("ws://localhost:8800");
      socket.current.emit("new-user-add", userId);
    }
  }, [userId]);
  // useEffect(() => {
  //   if (socket.current) {
  //     socket.current.on("recieve-notification", (res) => {
  //       if (currentChat?._id == res.senderId) {
  //         setNotifications(() => [{ isRead: true }]);
  //       } else {
  //         console.log("else");
  //         setNotifications((prev) => [res, ...prev]);
  //       }
  //     });
  //   }
  // }, []);

  useEffect(() => {
    const getOPerators = async () => {
      try {
        const { data } = await getAllUsers();
        setOperators(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOPerators();
  }, []);

  console.log("currentchat", currentChat);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <>
      <Container1>
        <div className="container1">
          <Operators operators={operators} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      </Container1>
    </>
  );
}

const Container1 = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container1 {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
