import axiosClient from "./AxiosClient";

const userApi = {
    getAll: () => {
        const url = '/users';
        return axiosClient.get(url);
    }
}

export default userApi;