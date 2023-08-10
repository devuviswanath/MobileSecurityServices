import React, { useState, useEffect } from "react";
import styled from "styled-components";
import userImage from "../images/userImage2.png";

export default function Operators({
  operators,
  notifications,
  currentChat,
  changeChat,
}) {
  const [currentSelected, setCurrentSelected] = useState(undefined);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {/* {userName && userId && ( */}
      <Container1>
        <div className="brand">
          <h4>Operators</h4>
        </div>
        <div className="contacts">
          {operators.map((operators, index) => {
            return (
              <div
                key={operators._id}
                className={`contact ${
                  index === currentSelected ? "selected" : ""
                }`}
                onClick={() => changeCurrentChat(index, operators)}
              >
                <div className="avatar">
                  <img src={userImage} alt="" />
                </div>
                <div className="username">
                  <h5>{operators.fullname}</h5>
                </div>
                {notifications.length > 0 &&
                  operators._id == notifications[0].senderId &&
                  currentChat?._id !== operators._id && (
                    <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                      {notifications.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  )}
              </div>
            );
          })}
        </div>
      </Container1>
      {/* )} */}
    </>
  );
}

const Container1 = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    h4 {
      color: white;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
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
    .selected {
      background-color: #9a86f3;
    }
  }
`;
