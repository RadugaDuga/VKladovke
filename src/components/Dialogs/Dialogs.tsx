import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import MessageItem from "./Message/Message";
import MessageForm from "./Message/MessageForm";
import backArrow from "../../images/Messages_Images/back-arrow.svg";
import { addMessage } from "../../redux/messages-reducer";
import type { AppDispatch, RootState } from "../../redux/redux-store";

const Dialogs: React.FC = () => {
  
	const dialogs = useSelector(
		(state: RootState) => state.messagesPage.Dialogs
	);

	const messages = useSelector(
		(state: RootState) => state.messagesPage.Messages
	);

	const dispatch: AppDispatch = useDispatch();

	const autoScroll = useRef<HTMLDivElement>(null);
	const onSendMessage = (message: string) => {
		dispatch(addMessage(message));
		autoScroll.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		document.title = "Мессенджер";
	}, []);

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
				{dialogs?.map((d) => (
					<DialogItem
						key={d.id}
						id={d.id}
						name={d.name}
						image={d.image}
					/>
				))}
			</div>
			<div className={s.messages}>
				{messages?.map((m) => (
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
				<MessageForm onSubmit={onSendMessage} />
				<button className={s.addSmile_btn}></button>
			</div>
		</div>
	);
};

export default Dialogs;
