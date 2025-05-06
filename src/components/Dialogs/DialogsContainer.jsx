import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Dialogs from "./Dialogs";
import { addMessage } from "../../redux/messages-reducer";

const DialogsContainer = () => {
	const dialogs = useSelector((state) => state.messagesPage.Dialogs);
	const messages = useSelector((state) => state.messagesPage.Messages);
	const dispatch = useDispatch();

	const onSendMessage = (message) => {
		dispatch(addMessage(message));
	};

	return (
		<Dialogs
			dialogs={dialogs}
			messages={messages}
			onSendMessage={onSendMessage}
		/>
	);
};

export default DialogsContainer;
