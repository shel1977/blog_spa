import React from 'react';
import stl from './cases.module.css';
import userPhoto from '../../assets/img/user_noPhoto.png'
import {NavLink} from "react-router-dom";


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
            {u.followed ? <button onClick={() => {
                props.unfollow(u.id)
            }}>UNFOLLOW</button> :
            <button onClick={() => {
                props.follow(u.id)
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