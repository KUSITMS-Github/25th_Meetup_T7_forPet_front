import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { Link } from "react-router-dom";
import { BoardHeader, BoardWrite, BoardList } from '../../components/community';

const BoardMeet = () => {
    const [write, setWrite] = useState<Boolean>();
    const [search, setSearch] = useState<string>('');
    const [searchWordRe, setSearchWordRe] = useState<string>('');
    const enterSearch = (e: any) => {
        if (e.key === "Enter") {
            setSearchWordRe(e.target.value);
        }
    }

    return(
        <Wrapper>
        <HeaderSection>
            <BoardHeader />
            <input 
            onChange={(
                e: React.ChangeEvent<HTMLInputElement>,
            ): void => setSearch(e.target.value)}
            onKeyPress={enterSearch}
            value={search}/>
        </HeaderSection>
        <div className='write' 
            onClick={() => setWrite(!write)}>
            새 글을 작성해주세요!
        </div>
        {write && <BoardWrite />}

        <BoardList board={'meet'} search={searchWordRe}/>
        </Wrapper>
    )
}

export default BoardMeet;

const Wrapper = styled.div`

    .write {
        background-color: ${Colors.green2};
        margin: 0 40px;
        padding: 10px;
        text-align: left;
        
}
`

const HeaderSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 40px;

    .write {
        width: 100%;
        background-color: ${Colors.green2};
        text-lign: left;
    }
`