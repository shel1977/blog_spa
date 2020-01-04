import * as axios from "axios/index";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "294c0237-877d-46a2-9429-1d801ed3496b"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}

// export const followAPI = {
//     followDel(u.id) {
//         return instance.delete(`follow/${u.id}`)
//             .then(response => {
//                 return response.data;
//             });
//     }
// }
// export const getUsers2 = (currentPage = 1, pageSize = 10) => {
// return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//     .then(response => {
//         return response.data;
//     });
// }