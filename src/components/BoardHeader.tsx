import styled from '@emotion/styled';
import { Colors } from '../styles/ui';
import { Link } from "react-router-dom";

const BoardHeader = () => {
    return (
        <Wrapper>
            <div className='title'>우리 동네 커뮤니티</div>
            <Link to="/all">
                <div className='comp'>전체</div>
            </Link>
            <Link to="/meet">
                <div className='comp'>모임</div>
            </Link>
            <Link to="/share">
                <div className='comp'>나눔</div>
            </Link>
            <Link to="/boast">
                <div className='comp'>자랑</div>
            </Link>

            <div className='location'>00구 00동</div>
        </Wrapper>
    )
}

export default BoardHeader;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 50px;

    .title {
        font-size: 24px;
        font-weight: bold;
    }

    .comp {
        margin: 0 5px;
    }

    .location {
        margin: 0 5px;
        margin-left: auto;
    }
`