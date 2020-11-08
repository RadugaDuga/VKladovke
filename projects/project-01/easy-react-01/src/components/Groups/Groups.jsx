import React from "react";
import s from "./Groups.module.css";

const Groups = (props) => {

	const GroupItem = (props) => {
		return (
				<div className={s.element}>
					<img src={props.image} alt="" />
					<div>
						<a href="#"> {props.name} </a>
						<p> {props.type} </p>
						<p> {props.subsCount} <span> подписчиков</span></p>
					</div>
				</div>
		);
	};

	

	let groupElements = props.groupsData.map( g => (
		<GroupItem
			id={g.id}
			image={g.image}
			name={g.name}
			type={g.type}
			subsCount={g.subsCount}
        />)
    );

	return <section className={s.wrapper}>{groupElements}</section>;
};

export default Groups;
