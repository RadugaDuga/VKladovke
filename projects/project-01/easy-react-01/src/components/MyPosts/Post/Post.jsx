import React from "react";
import s from "./Post.module.css";

const Post = () => {
	return (
		<div className={s.post}>
			<div className={s.about}>
				<img
					className={s.avatar}
					src="https://i.scdn.co/image/ab67706c0000bebb163aeea48afe86ed0c55bfcd"
				/>
				<a className={s.name} href="#">
					Дарья Амеличева <br/>
                    18 сент. 2020
				</a>
			</div>
			<p className={s.text} >
				Человеческие условия труда Я хочу немного рассказать об условиях труда в
				немецкой компании, где я работаю. Все уже довольно привыкли читать
				невероятные истории про офисы Гугла и Эппла, где описывается рай на
				Земле. Но не только в Кремниевой долине есть приличные работодатели.
			</p>
		</div>
	);
};

export default Post;
