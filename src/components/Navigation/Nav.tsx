import React from "react";
import s from "./Nav.module.css";
import profile from "../../images/Nav_Images/profile.svg";
import news from "../../images/Nav_Images/news.svg";
import messenger from "../../images/Nav_Images/messenger.svg";
import friends from "../../images/Nav_Images/friends.svg";
import groups from "../../images/Nav_Images/groups.svg";
import photos from "../../images/Nav_Images/photos.svg";
import music from "../../images/Nav_Images/music.svg";
import video from "../../images/Nav_Images/video.svg";
import files from "../../images/Nav_Images/files.svg";
import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
    return (
        <div className={s.sticky}>
            <nav className={s.nav}>
                <NavLink to='/profile' className={s.nav_item} activeClassName={s.active}><img className={s.icon} src={profile}   alt='^__^'/>  Моя страница </NavLink>
                <NavLink to='/feed'    className={s.nav_item} activeClassName={s.active}><img className={s.icon} src={news}      alt='^__^'/>  Новости       </NavLink>
                <NavLink to='/dialogs' className={s.nav_item} activeClassName={s.active}><img className={s.icon} src={messenger} alt='^__^'/>  Мессенджер    </NavLink>
                <NavLink to='/users'   className={s.nav_item} activeClassName={s.active}><img className={s.icon} src={friends}   alt='^__^'/>  Пользователи  </NavLink>
                <NavLink to='/groups'  className={s.nav_item} activeClassName={s.active}><img className={s.icon} src={groups}    alt='^__^'/>  Сообщества    </NavLink>
                <NavLink to='/photos'  className={s.nav_item} activeClassName={s.active}><img className={s.icon} src={photos}    alt='^__^'/>  Фотографии    </NavLink>
                <NavLink to='/music'   className={s.nav_item} activeClassName={s.active}><img className={s.icon} src={music}     alt='^__^'/>  Музыка        </NavLink>
                <NavLink to='/videos'  className={s.nav_item} activeClassName={s.active}><img className={s.icon} src={video}    alt='^__^'/>  Видео         </NavLink>
                <NavLink to='/files'   className={s.nav_item} activeClassName={s.active}><img className={s.icon} src={files}    alt='^__^'/>  Файлы       </NavLink>
            </nav>
            <div className={s.more_wrapper}>
                <p className={s.more}>Блог</p>
                <p className={s.more}>Разработчикам</p>
                <p className={s.more}>Для бизнеса</p>
                <p className={s.more}>Еще</p>
            </div>
        </div>
    );
};

export default Nav;
