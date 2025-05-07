import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Dialogs from "./Dialogs";
import { addMessage } from "../../redux/messages-reducer";
import type { RootState, AppDispatch } from "../../redux/redux-store";
// Если есть типы Dialog и Message, импортируйте их:
// import type { Dialog, Message } from "../../redux/messages-reducer";

const DialogsContainer: React.FC = () => {
	const dialogs = useSelector((state: RootState) => state.messagesPage.Dialogs /* as Dialog[] */);
	const messages = useSelector((state: RootState) => state.messagesPage.Messages /* as Message[] */);
	const dispatch: AppDispatch = useDispatch();

	const onSendMessage = (message: string) => {
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
