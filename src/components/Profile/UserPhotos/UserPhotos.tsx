import React from "react";
import s from "./UserPhotos.module.css";

const UserPhotos: React.FC = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Мои фотографии<span className={s.span}>6</span>
      </h1>
      <div className={s.photos}>
        <img
          src="https://sun9-74.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=200x133&quality=96&sign=d669ef6e9b89b3bfb8113d84d2a11e15&type=album"
          alt=""
          className={s.photo}
        />
        <img
          src="https://sun9-27.userapi.com/impf/c638923/v638923809/3593a/lhxaQOZjMrM.jpg?size=200x133&quality=96&sign=1f9812f0e762e6c5d4cec363e9442243&type=album"
          alt=""
          className={s.photo}
        />
        <img
          src="https://sun9-15.userapi.com/impf/c627327/v627327809/1ae91/PJ-_7QRMAbs.jpg?size=200x150&quality=96&sign=562fe7abae81fddc3e9ea07944286aeb&type=album"
          alt=""
          className={s.photo}
        />
        <img
          src="https://sun9-33.userapi.com/impf/c627327/v627327809/1a59c/V99XkDtzKNA.jpg?size=200x133&quality=96&sign=90772a52f4112f9be3af77ade0704e55&type=album"
          alt=""
          className={s.photo}
        />
      </div>
    </div>
  );
};

export default UserPhotos;
