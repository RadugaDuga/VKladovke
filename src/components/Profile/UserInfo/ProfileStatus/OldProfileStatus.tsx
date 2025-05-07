import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,
	};

	editModeToggle = () => {
		if (this.state.editMode) {
			this.setState({ editMode: false });
			this.props.updateStatus(this.state.status);
		} else {
			this.setState({ editMode: true });
		}
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({ status: this.props.status });
		}
	}

	onStatusChange = (e) => {
		this.setState({ status: e.currentTarget.value });
	};

	handleFocus(event) {
		event.target.select();
	}

	render() {
		return (
			<section>
				{!this.state.editMode && (
					<div onClick={this.editModeToggle} className={s.status}>
						{this.props.status || (
							<div className={s.no_status}>yстановить статус</div>
						)}
					</div>
				)}

				{this.state.editMode && (
					<section>
						<div>.</div>
						<div className={s.input_status_wrapper}>
							<input
								onChange={this.onStatusChange}
								className={s.inputStatus}
								autoFocus={true}
								onFocus={this.handleFocus}
								onBlur={this.editModeToggle}
								type="text"
								value={this.state.status}
							></input>
						</div>
					</section>
				)}
			</section>
		);
	}
}

export default oldProfileStatus;
