import React from 'react';
import stl from './profilePage.css';
import Preloader from "../common/preloader/preloader.jsx";


const ProfilePage = (props) => {
    if (!props.profile) {
        debugger;
        return <Preloader />
    }
    return (<div>
            <div>
                <img src={props.profile.photos.large} className={stl.userphoto_big}/>
            </div>
            <div>{props.profile.fullName}</div>
            <div>Contacts</div>
            <ul>
                <li>{props.profile.contacts.facebook}</li>
                <li>{props.profile.contacts.vk}</li>
                <li>{props.profile.contacts.instagram}</li>
            </ul>
        </div>
    )
}


export default ProfilePage;