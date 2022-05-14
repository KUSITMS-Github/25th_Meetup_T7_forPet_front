import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
        <div>Login page</div>
        <Link to="/loginterms">
            <button>로그인하기</button>
        </Link>
        
        </>
    );
};

export default Login;
