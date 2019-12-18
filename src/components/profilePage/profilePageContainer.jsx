import React from 'react';
import ProfilePage from "./profilePage.js";
import {connect} from 'react-redux';
import * as axios from "axios/index";
import {setUserProfile} from "../../redux/profilePage_reduser";
import {withRouter} from "react-router-dom";

class ProfilePageContainer extends React.Component {

    componentDidMount () {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
    });
    }
    render() {
        return (<div>
                {<ProfilePage profile={this.props.profile}/>}
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
profile: state.profilePage.profile
});

let WithUrlDataProfileContainerComponent = withRouter (ProfilePageContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataProfileContainerComponent);