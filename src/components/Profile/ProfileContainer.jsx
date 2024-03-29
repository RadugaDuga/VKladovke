import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getStatus, getUserProfile } from "./../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";


const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  };
};


// Hi there 
class ProfileContainer extends React.PureComponent {
  //Рефреш нужен для получения пользователя и его данных и он вынесен в функцию т.к повторяется

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (userId !== 0) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
      />
    );
  }
}


export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
