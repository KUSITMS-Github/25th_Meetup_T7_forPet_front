import styled from '@emotion/styled';
import { Colors } from '../styles/ui';
import { Link } from "react-router-dom";

const ChooseMaps = () => {
    return (
        <ChooseMapsWrapper>
            <Link to="/offlinemap" style={{ textDecoration: 'none' }}>
                <div className='map'>
                    <div className='map-img'></div>
                    <div className='map-text'>오프라인 지도</div>
                </div>
            </Link>
            <Link to="/onlinemap" style={{ textDecoration: 'none' }}>
                <div className='map'>
                    <div className='map-img'></div>
                    <div className='map-text'>온라인 지도</div>
                </div>
            </Link>
        </ChooseMapsWrapper>
    )
}

export default ChooseMaps;

const ChooseMapsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    background-color: ${Colors.green1};
    height: calc(100vh - 70px); // header 높이만큼 빼기

    .map {
        width: 500px;
        height: 500px;
        margin: 100px 40px;
        background-color: ${Colors.white};
        box-shadow: 0px 4px 53px rgba(0, 0, 0, 0.25);
        border-radius: 38px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .map-img {
        width: 300px;
        height: 300px;
        background-color: ${Colors.green2};
    }

    .map-text {
        font-size: 28px;
        margin-top: 20px;
        font-weight: bold;
        color: ${Colors.black};
    }
`

