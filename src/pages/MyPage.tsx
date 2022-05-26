import { getApi, postApi, setHeader } from "../api";
import { Header } from "../components";

const MyPage = () => {

    if(localStorage.getItem("token") != ""){
        const ACCESS_TOKEN = localStorage.getItem("token");
        setHeader(ACCESS_TOKEN);
        console.log("토큰 저장");
    }

    return (
        <>
        <Header />
        <div>MyPage</div>
        </>
    );
};

export default MyPage;
