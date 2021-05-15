import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { updateStatus,getStatus, getUserProfile } from "./../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.id,
		isAuth: state.auth.isAuth
	};
};

class Profile_Container extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
		}
		this.props.getUserProfile(userId);
        
		this.props.getStatus(userId);
	}

    

	render() {
        document.title = "Моя страница";
        return (
            <Profile 
                profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatus}
            />
        )
	}
}

export default compose(
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
	withRouter,
	withAuthRedirect
)(Profile_Container);
