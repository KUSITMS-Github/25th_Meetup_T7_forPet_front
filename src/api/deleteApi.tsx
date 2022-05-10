import axios from "axios";

const deleteApi = async (params: any, end_url: string, token: string) => {
    const config = {
        data: params,
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
    };
    
    return await axios.delete(process.env.REACT_APP_BACK_BASE_URL + end_url, config);
};

export default deleteApi;
