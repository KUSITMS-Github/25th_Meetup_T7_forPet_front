import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { useNavigate } from "react-router-dom";
import { BoardHeader, BoardCardList } from '../../components/community';

const BoardBoast = () => {
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
                <input
                    onChange={(
                        e: React.ChangeEvent<HTMLInputElement>,
                    ): void => setSearch(e.target.value)}
                    onKeyPress={enterSearch}
                    value={search} />
            </HeaderSection>
            <div className='write'
                onClick={writeHandler}>
                새 글을 작성해주세요!
            </div>
            <BoardCardList board={'boast'} search={searchWordRe} />
        </Wrapper>
    )
}

export default BoardBoast;

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
`