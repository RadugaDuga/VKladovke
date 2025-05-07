import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

interface DialogItemProps {
  id: number;
  name: string;
  image: string;
}

const DialogItem: React.FC<DialogItemProps> = ({ id, name, image }) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${id}`} activeClassName={s.active}>
        <div className={s.container}>
          <img src={image} alt="404" />
        </div>
        <div className={s.about}>{name}</div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
