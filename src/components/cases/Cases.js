import React from 'react';
import stl from './cases.module.css';
import userPhoto from '../../assets/img/user_noPhoto.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios/index";


let Cases = (props) => {

        let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount ; i++) {
            pages.push(i);

        }


        return <div>

            <div className={stl.pagesNumList}>
                { pages.map(p => {
                    return <div>
                        <span className={props.currentPage === p && stl.selectedPage}
                                 onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
                    </div>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
    <span>
        <div>
            <NavLink to={'/profile/' + u.id}>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={stl.userphoto_small_case}/>
            </NavLink>

        </div>
        <div>
            {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                props.toggleFollowingProgress(true, u.id);
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "294c0237-877d-46a2-9429-1d801ed3496b"
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode == 0) {
                                props.unfollow(u.id)
                            }
                            props.toggleFollowingProgress(false, u.id);
                        });



            }}>UNFOLLOW</button> :
                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                props.toggleFollowingProgress(true, u.id);
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    withCredentials: true,
                    headers: {
                        "API-KEY": "294c0237-877d-46a2-9429-1d801ed3496b"
                    }
                })
                    .then(response => {
                        if (response.data.resultCode == 0) {
                            props.follow(u.id)
                        }
                        props.toggleFollowingProgress(false, u.id);
                    });

            }}>FOLLOW</button>}

        </div>
    </span>
                    <span>
        <div>{u.name}</div>
        <div>{u.userStatus}</div>

    </span>
      <span>
        <div>{'u.userHomeLocation.city'}</div>
        <div>{'u.userHomeLocation.country'}</div>
    </span>
                </div>)
            }
    </div>

     }


 export default Cases;