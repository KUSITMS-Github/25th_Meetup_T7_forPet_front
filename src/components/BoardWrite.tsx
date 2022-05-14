import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../styles/ui';

const BoardWrite = () => {

    const [x, setX] = useState<any>();

    const handleRadioButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setX(e.target.value);
    }

    return (
        <>
        <input
            type='radio'
            value='1'
            checked={x === '1'}
            onChange={(e) => handleRadioButton(e)}
            />
        <input
            type='radio'
            value='2'
            checked={x === '2'}
            onChange={(e) => handleRadioButton(e)}
            />
        </>
    )
}

export default BoardWrite;

