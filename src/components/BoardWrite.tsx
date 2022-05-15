import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../styles/ui';
import { stringify } from 'querystring';

const BoardWrite = () => {
    const [radio, setRadio] = useState<string>();
    const [contents, setContents] = useState<any>({
    });

    interface Contents {
        title: string,
        content: string,
    }

    const handleRadioButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setRadio(e.target.value);
    }

    return (
        <Wrapper>
            <Radios>
                <input
                    type='radio'
                    value='meet'
                    checked={radio === 'meet'}
                    onChange={(e) => handleRadioButton(e)}
                />모임
                <input
                    type='radio'
                    value='share'
                    checked={radio === 'share'}
                    onChange={(e) => handleRadioButton(e)}
                    />나눔
                <input
                    type='radio'
                    value='boast'
                    checked={radio === 'boast'}
                    onChange={(e) => handleRadioButton(e)}
                    />자랑
            </Radios>

            <textarea
                rows={10}
                placeholder='궁금한 것들을 질문해보세요!&#13;예비 반려인과 반려인이 완벽한 답을 줄거에요'
                onChange={(
                    e: React.ChangeEvent<HTMLTextAreaElement>,
                ): void => setContents({...contents, 'title': e.target.value})}
                value={contents.content}
            >
            </textarea>

        </Wrapper>
    )
}

export default BoardWrite;

const Wrapper = styled.div`

`

const Radios = styled.div`

`