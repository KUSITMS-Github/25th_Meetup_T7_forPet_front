import axios from "axios";

const postApi = async (data: any, end_url: string, token: string) => {
    const config = {
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
    };
    
    return await axios.post(
        process.env.REACT_APP_BACK_BASE_URL + end_url,
        data,
        config
    );
};

export default postApi;
