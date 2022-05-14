import axios from "axios";

const getApi = async (params: any, end_url: string) => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjUyNTQ0Njc4LCJleHAiOjE2NTI1NDY0Nzh9.w_UhTDaSGrDfnZr3nwsSCdC0FNN8rQsF-MxsB1Gx2L0'
    const config = {
        params: params,
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            "Authorization": ''
        },
    };
    config.headers["Authorization"] = `Bearer ${token}`;
    
    return await axios.get(process.env.REACT_APP_BACK_BASE_URL + end_url, config);
};

export default getApi;
