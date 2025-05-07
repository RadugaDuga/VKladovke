import React from "react";
import s from "./Message.module.css";

interface MessageItemProps {
  image: string;
  name: string;
  date: string;
  messageText: string;
  is_moderator?: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({ image, name, date, messageText }) => {
  return (
    <div className={s.container}>
      <img src={image} alt="^__^" className={s.image} />
      <div className={s.name_message_wrapper}>
        <p className={s.name}>
          {name} <span className={s.date}>{date}</span>
        </p>
        <p className={s.message}>{messageText}</p>
      </div>
    </div>
  );
};

export default MessageItem;
