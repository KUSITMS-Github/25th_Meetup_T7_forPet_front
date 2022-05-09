import axios from "axios";

interface CommonHeaderProperties {
    "Authorization": string | null;
}

const deleteApi = async (params: any, end_url: string, token: string) => {
    const config = {
        data: params,
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
    };
    if (token) {
        (
            axios.defaults.headers! as unknown as Record<string, CommonHeaderProperties>
        ).common["Authorization"] = `Bearer ${token}`;
        // config.headers["Authorization"] = `Bearer ${token}`;
    }
    return await axios.delete(process.env.REACT_APP_BACK_BASE_URL + end_url, config);
};

export default deleteApi;
