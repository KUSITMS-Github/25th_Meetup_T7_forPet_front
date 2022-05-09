import axios from "axios";

interface CommonHeaderProperties {
    "Authorization": string | null;
}

const postApi = async (data: any, end_url: string, token: string) => {
    const config = {
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
    return await axios.post(
        process.env.REACT_APP_BACK_BASE_URL + end_url,
        data,
        config
    );
};

export default postApi;
