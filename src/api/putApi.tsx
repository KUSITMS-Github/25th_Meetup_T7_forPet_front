import axios from "axios";

const putApi = async (data: any, end_url: string) => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjUyNTQ1Njc1LCJleHAiOjE2NTI1NDc0NzV9.7rJFsP_8kSrML36lpaDkb7TJbSgTo1wF4aHFkBZ8naU'

    const config = {
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            "Authorization": ''
        },
    };
    config.headers["Authorization"] = `Bearer ${token}`;
    
    return await axios.put(process.env.REACT_APP_BACK_BASE_URL + end_url, data, config);
};

export default putApi;
