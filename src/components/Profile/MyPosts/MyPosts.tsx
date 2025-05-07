import React, { useRef, useState } from "react";
import s from "./MyPosts.module.css";
import { useForm } from "react-hook-form";
import useClickOutside from '../../common/userHooks/useClickOutside';
import { useDispatch } from 'react-redux';
import { toggleLikePost } from '../../../redux/profile-reducer';

const PostForm = ({ onSubmit }) => {
	const { register, handleSubmit, reset, formState: { errors } } = useForm();
	return (
		<form onSubmit={handleSubmit((data) => { onSubmit(data.postText); reset(); })} className={s.form}>
			<textarea
				{...register("postText", { required: "Введите текст", maxLength: { value: 300, message: "Максимум 300 символов" } })}
				className={s.textarea}
				autoFocus={true}
				placeholder={"Что у вас нового"}
			/>
			{errors.postText && <span style={{ color: 'red', fontSize: 12 }}>{errors.postText.message}</span>}
			<button className={s.button}>Опубликовать</button>
		</form>
	);
};

const MyPosts = React.memo((props) => {
	const [editMode, setEditMode] = useState(false);
	const aae = useRef();
	const dispatch = useDispatch();
	useClickOutside(() => setEditMode(false), aae);

	const formSumbitted = (postText) => {
		props.addPost(postText);
		setEditMode(false);
	};

	let posts = props.postsData.map((p) => (
		<div key={p.postId} className={s.post}>
			<div className={s.about}>
				<img className={s.avatar} src={p.image} alt="" />
				<button className={s.name} >
					{p.name} <br />
					<span className={s.date}>{p.date}</span>
				</button>
				<button
					onClick={() => {
						props.deletePost(p.postId);
					}}
					className={s.delete}
				>
					×
				</button>
			</div>
			<p className={s.text}>{p.text}</p>
			<div className={s.stats}>
				<button onClick={() => { dispatch(toggleLikePost(p.postId)) }} className={p.liked ? s.liked : s.like_button}></button>
				{p.likes_count ? <span style={p.liked ? ({ color: "#FF3358" }) : null}>{p.likes_count}</span> : null}
				<button className={s.comment_button}></button>
				{p.comments_count ? <span>{p.comments_count}</span> : null}
				<button className={s.repost_button}></button>
				{p.reposts_count ? <span>{p.reposts_count}</span> : null}
				<button className={s.views_button}></button>
				{p.views_count ? <span>{p.views_count}</span> : null}
			</div>
		</div>
	));

	return (
		<div className={s.my_posts_wrapper}>
			{editMode ? (
				<div ref={aae} tabIndex="100" className={s.textarea_wrapper__edit}>
					<img src="https://sun9-74.userapi.com/s/v1/if1/wnhPf1akAP1IYujDsFmUaeLG7pjkj80kDNOPNdkYWwDGPCOeuTs3pJZot4nlJlLalmLgEuYF.jpg?size=50x0&quality=96&crop=459,0,1006,1006&ava=1" className={s.mini_image} alt="^__^"></img>
					<PostForm onSubmit={formSumbitted} />
				</div>
			) : (
				<div onClick={() => setEditMode(true)} className={s.textarea_wrapper}>
					<img src="https://sun9-74.userapi.com/s/v1/if1/wnhPf1akAP1IYujDsFmUaeLG7pjkj80kDNOPNdkYWwDGPCOeuTs3pJZot4nlJlLalmLgEuYF.jpg?size=50x0&quality=96&crop=459,0,1006,1006&ava=1" className={s.mini_image} alt="^__^"></img>
					Что у вас нового?
				</div>
			)}
			{posts}
		</div>
	);
});

export default MyPosts;
