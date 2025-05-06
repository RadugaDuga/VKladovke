import React, { useEffect } from "react";
import s from "./App.module.css";

import HeaderContainer from "./components/Header/HeaderContainer.js";
import GroupsContainer from "./components/Groups/GroupsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import Nav from "./components/Navigation/Nav";
import Preloader from "./components/common/Preloader/Preloader";

import { Route, Switch } from "react-router-dom";
import { initializeApp } from "./redux/app-reducer";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router';
import NF404 from "./components/404NotFound/NF404";

import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  const dispatch = useDispatch();
  const initialized = useSelector(state => state.app.initialized);

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  if (!initialized) {
    return <Preloader/>;
  }

  return (
    <div>
      <div className={s.header_line}></div>
      <div className={s.app_wrapper}>
        <HeaderContainer />
        <Nav />
        <div className={s.app_wrapper_content}>
          <Switch>
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/dialogs" render={() => <Dialogs />} />
            <Route path="/users"   render={() => <UsersContainer />} />
            <Route path="/groups"  render={() => <GroupsContainer />} />
            <Route path="/login"   render={() => <Login />} />
            <Route exact path="/VKladovke" render={() => <Redirect to ={"/profile"} />} />
            <Route path="*"   render={() => <NF404/>} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
