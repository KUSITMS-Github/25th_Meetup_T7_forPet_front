import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { useNavigate } from "react-router-dom";
import { BoardHeader, BoardCardList } from '../../components/community';
import SearchIcon from '../../assets/search_icon.png';
import { getApi, setHeader } from '../../api';

const BoardShare = () => {
    useEffect(() => {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjUyNjg5MDU4LCJleHAiOjE2NTMyOTM4NTh9.Smx6cW-984fGOU5dq5GTnyMnw_Pf_R8UFALXMmzYDTo'
        setHeader(token);
    }, [])

    const [search, setSearch] = useState<string>('');
    const [searchWordRe, setSearchWordRe] = useState<string>('');

    const navigate = useNavigate();

    const enterSearch = (e: any) => {
        if (e.key === "Enter") {
            setSearchWordRe(e.target.value);
        }
    }

    const writeHandler = () => {
        navigate('/board/write');
    }

    return (
        <Wrapper>
            <HeaderSection>
                <BoardHeader />
                <div className='search-bar'>
                    <img src={SearchIcon} style={{width: '20px', height: '20px'}} />
                    <input
                        onChange={(
                            e: React.ChangeEvent<HTMLInputElement>,
                        ): void => setSearch(e.target.value)}
                        onKeyPress={enterSearch}
                        value={search} />
                </div>
            </HeaderSection>
            <div className='write'
                onClick={writeHandler}>
                각종 물품을 나눠주세요!
            </div>
            <BoardCardList board={'share'} search={searchWordRe} />
        </Wrapper>
    )
}

export default BoardShare;
const Wrapper = styled.div`

    .write {
        background-color: ${Colors.green2};
        margin: 20px 80px 0 80px;
        padding: 10px 40px;
        font-weight: bold;
        text-align: left;
        border-radius: 15px;
}
`

const HeaderSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 40px;

    .search-bar {
        margin-top: 20px;
        margin-right: 40px;
    }

    input {
        background: ${Colors.white};
        border: 2px solid  ${Colors.green5};
        border-radius: 25.5px;
        width: 250px;
        height: 40px;
        padding-left: 36px;
    }

    img {
        position: relative;
        top: 10%;
        left: 10%;
    }
`