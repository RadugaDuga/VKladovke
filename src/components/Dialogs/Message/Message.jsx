import React from "react";
import PropTypes from "prop-types";
import s from "./Message.module.css";

const MessageItem = ({ image, name, date, messageText }) => {
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

MessageItem.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	date: PropTypes.string,
	messageText: PropTypes.string,
};

export default MessageItem;
