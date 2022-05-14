import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { Link } from "react-router-dom";
import { BoardHeader, BoardWrite } from '../../components';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';


const BoardAll = () => {
    const navigate = useNavigate();

    const [write, setWrite] = useState<Boolean>();
    
    useEffect(() => {
        navigate('/menu');
    }, [])
    

    return(
        <>
        <BoardHeader />
        <div className='write' onClick={() => setWrite(true)}>새 글을 작성해주세요!</div>
        {write && <BoardWrite />}
        </>
    )
}

export default BoardAll