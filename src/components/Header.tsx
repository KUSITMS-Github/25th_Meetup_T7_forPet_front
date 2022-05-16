import styled from '@emotion/styled';
import { Colors } from '../styles/ui';
import { Link } from "react-router-dom";
import { ReactComponent as HeaderLogo } from "../assets/HeaderLogo.svg";

const Header = () => {

    return (
        <HeaderStyle>
            <div className="header-left">
                <Link to="/">
                    <HeaderButton className="header-btn"><HeaderLogo /></HeaderButton>
                </Link>
            </div>
            <div className="header-right">
                <Link to="/maps">
                    <HeaderButton className="header-btn">Forpet MAP</HeaderButton>
                </Link>
                <Link to="/preboard">
                    <HeaderButton className="header-btn">우리동네 커뮤니티</HeaderButton>
                </Link>
                <Link to="/forpetPedia">
                    <HeaderButton className="header-btn">퍼펫트 백과</HeaderButton>
                </Link>
                <Link to="/login">
                    <HeaderButton className="header-btn">
                        로그인
                    </HeaderButton>
                </Link>
{/*             로그인 여부에 따라 렌더링
                <Link to="/mypage">
                    <button className="header-btn">
                        마이페이지
                    </button>
                </Link> */}
            </div>
        </HeaderStyle>
    );
};

export default Header;

const HeaderStyle = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 40px;
    padding: 20px 50px 10px 50px;
    background-color: ${Colors.white};

    .header-left {
        display: flex;
        align-items: center;
    }
`;

const HeaderButton = styled.button`
    border: none;
    outline: 0;
    margin: 0 5px;
    background-color: transparent;
    &:hover {
        color: ${Colors.green5};
    }
    cursor: pointer;
    font-size: 16px;
`;