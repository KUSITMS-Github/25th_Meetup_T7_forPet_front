import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';


const CreatePostPedia = () => {

    const [myQuestion, setMyQuestion] = useState<string>();

    const [file, setFile] = useState<File>();
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files![0]);
        setFile(e.target.files![0]);
    }

    const fileSubmitHandler = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        let contents = {
            title: 'title',
            content: myQuestion
        }
        const end_url = '/qnaBoard';
        const formData = new FormData();
        formData.append('qnaBoardRequestDto',
            new Blob([JSON.stringify(contents)], { type: "application/json" })
        );
        formData.append('imageList', file!);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        await axios.post(
            process.env.REACT_APP_BACK_BASE_URL + end_url,
            formData,
            config
        )
            .then(({ status, data }) => {
                console.log(status, data);
                if (status === 200 || status === 201) {
                    // window.location.reload();
                }
            })
            .catch((e) => {
                console.log(e);
            })
    }

    return (
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
                <input type="file" multiple onChange={(e) => onFileChange(e)} />
                {/* <button type="submit" onClick={(e) => fileSubmitHandler(e)}>파일 업로드</button> */}
                <div onClick={(e) => fileSubmitHandler(e)}>연필</div>
            </div>
        </CreateQustion>
    )

}

export default CreatePostPedia;

const CreateQustion = styled.div`

    display: flex;
    flex-direction: column;
    width: 900px; // 추후조정
    margin: 10px auto;
    padding: 20px;
    background-color: ${Colors.white};

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