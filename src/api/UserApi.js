import axiosClient from "./AxiosClient";

const userApi = {
    getAll: () => {
        const url = '/users';
        return axiosClient.get(url);
    },
    post: (data) => {
        const url = '/users';
        return axiosClient.post(url, {...data});
    },
    put: (id, data) => {
        const url = `/users/${id}`;
        return axiosClient.put(url, {...data});
    },
}

export default userApi;