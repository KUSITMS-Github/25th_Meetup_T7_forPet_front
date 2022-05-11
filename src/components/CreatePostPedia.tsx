import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Colors } from '../styles/ui';


const CreatePostPedia = () => {

    const [myQuestion, setMyQuestion] = useState<string>();

    const createQuestion = () => {
        console.log(myQuestion);
    }

    const [file, setFile] = useState<File>();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files![0]);
        setFile(e.target.files![0]);
    }
    
    const fileSubmitHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const end_url = '/file-upload';
        const formData = new FormData();
        formData.append('file', file!)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        await axios.post(
            process.env.REACT_APP_BACK_BASE_URL + end_url,
            formData,
            config
        );
    }
    
    return(
        <CreateQustion>
            <div className='title'>질문하개</div>
            <hr
                style={{
                    color: `${Colors.gray1}`,
                    height: 1,
                    width: '100%'
                }}
            />
            <textarea
                rows={10}
                placeholder='궁금한 것들을 질문해보세요!&#13;예비 반려인과 반려인이 완벽한 답을 줄거에요'
                onChange={(
                    e: React.ChangeEvent<HTMLTextAreaElement>,
                ): void => setMyQuestion(e.target.value)}
                value={myQuestion}
            >
            </textarea>
            <div className='low-section'>
                <input type="file" multiple onChange={(e) => onChange(e)} />
                <button type="submit" onClick={(e) => fileSubmitHandler(e)}>파일 업로드</button>
                <div onClick={createQuestion}>연필</div>
            </div>
        </CreateQustion>
    )
}

export default CreatePostPedia;

const CreateQustion = styled.header`

    display: flex;
    flex-direction: column;
    width: 900px; // 추후조정
    margin: 10px auto;
    padding: 20px;
    background-color: ${Colors.green1};

    .title {
        text-align: left;
    }

    .low-section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    textarea {
        resize: none;
    }
`