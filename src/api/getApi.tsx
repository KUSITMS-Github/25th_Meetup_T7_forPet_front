import axios from "axios";

interface CommonHeaderProperties {
    "Authorization": string | null;
}

const getApi = async (params: any, end_url: string, token: string) => {
    const config = {
        params: params,
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
    return await axios.get(process.env.REACT_APP_BACK_BASE_URL + end_url, config);
};

export default getApi;
