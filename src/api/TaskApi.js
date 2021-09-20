import axiosClient from "./AxiosClient";

const taskApi = {
    getAll: () => {
        const url = '/tasks';
        return axiosClient.get(url);
    },
    getById: (id) => {
        const url = `/tasks/${id}`;
        return axiosClient.get(url);
    },
    post: (data) => {
        const url = '/tasks';
        return axiosClient.post(url, {...data});
    },
    put: (id, data) => {
        const url = `/tasks/${id}`;
        return axiosClient.put(url, {...data});
    },
    del: (id) => {
        const url = `/tasks/${id}`;
        return axiosClient.delete(url);
    },
}

export default taskApi;