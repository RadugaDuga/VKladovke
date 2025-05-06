import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

const DialogItem = ({ id, name, image }) => {
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

DialogItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default DialogItem;
