import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { Link } from "react-router-dom";
import { BoardHeader, BoardWrite, BoardList } from '../../components/community';




const BoardAll = () => {

    const [write, setWrite] = useState<Boolean>();

    

    return(
        <>
        <BoardHeader />
        <div className='write' onClick={() => setWrite(!write)}>새 글을 작성해주세요!</div>
        {write && <BoardWrite />}
        
        <BoardList board={'all'}/>
        </>
    )
}

export default BoardAll;