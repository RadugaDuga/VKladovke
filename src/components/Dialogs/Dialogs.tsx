import React, { useRef } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import MessageItem from "./Message/Message";
import MessageForm from "./Message/MessageForm";
import backArrow from "../../images/Messages_Images/back-arrow.svg";
import src from "../../images/Favicons/messagesFavicon.svg";
import type { Message, Dialog } from '../../redux/messages-reducer';

interface DialogsProps {
  dialogs: Dialog[];
  messages: Message[];
  onSendMessage: (message: string) => void;
}

const Dialogs: React.FC<DialogsProps> = ({ dialogs, messages, onSendMessage }) => {
  const autoScroll = useRef<HTMLDivElement>(null);

  const handleFormSubmit = async (message: string) => {
    onSendMessage(message);
    autoScroll.current?.scrollIntoView({ behavior: "smooth" });
  };

  document.title = `Мессенджер`;

  return (
    <div className={s.content_wrapper}>
      <div className={s.search_wrapper}>
        <input className={s.search} placeholder="Поиск" />
      </div>
      <div className={s.info}>
        <img src={backArrow} alt="" className={s.backArrow} />
        <img
          src="https://sun9-25.userapi.com/s/v1/ig2/DiNCNxBt3JoVEDcJmIYbl5B3HkGjF59QN5SMnP2yUt9lsu8Vj_Qn15aMPoaN2fZI8vF-lGQ4YV2yAHcGU6ilzYGa.jpg?size=100x0&quality=96&crop=5,4,853,853&ava=1"
          className={s.image}
          alt=""
        />
        <p className={s.name}> Дарья Амеличева </p>
      </div>
      <div className={s.dialogs}>
        {dialogs.map((d) => (
          <DialogItem
            key={d.id}
            id={d.id}
            name={d.name}
            image={d.image}
          />
        ))}
      </div>
      <div className={s.messages}>
        {messages.map((m) => (
          <MessageItem
            key={m.id}
            name={m.name}
            is_moderator={m.is_moderator}
            date={m.date}
            image={m.image}
            messageText={m.messageText}
          />
        ))}
        <div ref={autoScroll}></div>
      </div>
      <div className={s.textarea_wrapper}>
        <button className={s.addFiles_btn}></button>
        <MessageForm onSubmit={handleFormSubmit} />
        <button className={s.addSmile_btn}></button>
      </div>
    </div>
  );
};

export default Dialogs;
