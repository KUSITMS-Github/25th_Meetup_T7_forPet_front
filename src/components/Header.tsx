import styled from '@emotion/styled';
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <HeaderStyle>
            <div className="header-left">
                <Link to="/">
                    <HeaderButton className="header-btn">Forpet(Logo)</HeaderButton>
                </Link>
            </div>
            <div className="header-right">
                <Link to="/maps">
                    <HeaderButton className="header-btn">Forpet MAP</HeaderButton>
                </Link>
                <Link to="/board">
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
    margin: 20px 0 10px;
    padding: 0 50px;
`;

const HeaderButton = styled.button`
    border: none;
    outline: 0;
    margin: 0 5px;
    background-color: transparent;
    &:hover {
        color: green;
    }
`;