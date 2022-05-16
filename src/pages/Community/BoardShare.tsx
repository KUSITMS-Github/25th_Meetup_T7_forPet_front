import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { Link } from "react-router-dom";
import { BoardHeader, BoardWrite, BoardCardList } from '../../components/community';

const BoardShare = () => {
    const [write, setWrite] = useState<Boolean>();
    const [search, setSearch] = useState<string>('');
    const [searchWordRe, setSearchWordRe] = useState<string>('');
    const enterSearch = (e: any) => {
        if (e.key === "Enter") {
            setSearchWordRe(e.target.value);
        }
    }

    return(
        <>
        <BoardHeader />
        <div className='write' 
            onClick={() => setWrite(!write)}>
            새 글을 작성해주세요!
        </div>
        {write && <BoardWrite />}
        <BoardCardList board={'share'} search={searchWordRe}/>
        </>
    )
}

export default BoardShare;