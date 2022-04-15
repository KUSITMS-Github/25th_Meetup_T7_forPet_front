import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="App-header">
            <div className="header-links">
                <>
                    <div className="header-right">
                        <Link to="/onlinemap">
                            <button className="header-btn">Online Map</button>
                        </Link>
                        <Link to="/offlinemap">
                            <button className="header-btn">Offline Map</button>
                        </Link>
                        <Link to="/mypage">
                            <button className="header-btn">
                                My page
                            </button>
                        </Link>
                        <Link to="/board">
                            <button className="header-btn">
                                Board(테스트용)
                            </button>
                        </Link>
                    </div>
                </>
            </div>
        </header>
    );
};

export default Header;
