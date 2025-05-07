import React from "react";
import s from "./Notifications.module.css";

export const NotificationsBar: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <span>Ваша страница</span>
        <span>Настройки</span>
      </div>
      <div className={s.notification}>
        <img
          src="https://sun4-10.userapi.com/s/v1/ig2/70gpZV_bQ5hI-6fY60zSX7X2YgIP2LpDed67cwAqELpxYqYv2RICJ7xiYCBMtHa46SxGcw06idWxnjmc2C0bVQY2.jpg?size=50x50&quality=95&crop=0,548,1440,1440&ava=1"
          alt=""
          className={s.notification__avatar}
        />
        <p className={s.notification__info}>
          Arina Raevich впервые за долгое время опубликовала историю
        </p>
        <img
          src="https://sun4-15.userapi.com/s/v1/ig2/WadGKc6k3bPaZi0NeUgHaVufKAtMRq5wt2yCHcCjyxbxpzUVquW94-3bkpHx5iygxjhOrCh2rFu7qkp9i_3Iusno.jpg?size=340x604&quality=96&type=story"
          alt=""
          className={s.notification__image}
        />
      </div>
      <div className={s.notification}>
        <img
          src="https://sun4-15.userapi.com/s/v1/if1/6BK_MDXw9k6Z1AGIr2015-uPU-ahINFs1HBb5K8VLpCoi-jNRldLINFHNmtJPFbNvHQ6VJsB.jpg?size=50x50&quality=96&crop=45,45,1262,1262&ava=1"
          alt=""
          className={s.notification__avatar}
        />
        <p className={s.notification__info}>
          Arina Raevich впервые за долгое время опубликовала историю
        </p>
        <img
          src="https://sun4-15.userapi.com/s/v1/ig2/WadGKc6k3bPaZi0NeUgHaVufKAtMRq5wt2yCHcCjyxbxpzUVquW94-3bkpHx5iygxjhOrCh2rFu7qkp9i_3Iusno.jpg?size=340x604&quality=96&type=story"
          alt=""
          className={s.notification__image}
        />
      </div>
    </div>
  );
};
