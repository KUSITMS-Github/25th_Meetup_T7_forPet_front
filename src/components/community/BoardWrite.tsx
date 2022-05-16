import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { stringify } from 'querystring';


const BoardWrite = () => {
    const [radio, setRadio] = useState<string>();
    const [contents, setContents] = useState<Contents>({
        title: '',
        content: '',
    });

    interface Contents {
        title: string,
        content: string,
    }

    const handleRadioButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setRadio(e.target.value);
    }

    const [file, setFile] = useState<File>();

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files![0]);
        setFile(e.target.files![0]);
    }

    const fileSubmitHandler = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        const end_url = '/community';
        const formData = new FormData();
        formData.append('community_request',
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
        <Wrapper>
            <Radios>
                <label>
                    <input
                        type='radio'
                        value='meet'
                        checked={radio === 'meet'}
                        onChange={(e) => handleRadioButton(e)}
                    />모임
                </label>
                <label>
                    <input
                        type='radio'
                        value='share'
                        checked={radio === 'share'}
                        onChange={(e) => handleRadioButton(e)}
                    />나눔
                </label>
                <label>
                    <input
                        type='radio'
                        value='boast'
                        checked={radio === 'boast'}
                        onChange={(e) => handleRadioButton(e)}
                    />자랑
                </label>
            </Radios>
            <textarea
                rows={1}
                placeholder='제목'
                onChange={(
                    e: React.ChangeEvent<HTMLTextAreaElement>,
                ): void => setContents({ ...contents, title: e.target.value })}
                value={contents.title}
            ></textarea>
            <textarea
                rows={10}
                placeholder='모두가 즐거운 커뮤니티를 위해 커뮤니티 규칙을 지켜주시개 &#13;&#13;
                다음과 같은 행위를 금지합니다.
                - 홍보 및 사업성 판매 행위
                - 타인의 권리를 침해하거나 불쾌감을 주는 행위
                - 범죄, 불법 행위 등 법령을 위반하는 행위
                - 욕설, 비하, 혐오, 차별, 폭력 관련 내용을 포함한 게시물 작성 행위'
                onChange={(
                    e: React.ChangeEvent<HTMLTextAreaElement>,
                ): void => setContents({ ...contents, content: e.target.value })}
                value={contents.content}
            >
            </textarea>
            <div className='low-section'>
                <input type="file" multiple onChange={(e) => onFileChange(e)} />
                {/* <button type="submit" onClick={(e) => fileSubmitHandler(e)}>파일 업로드</button> */}
                <div onClick={(e) => fileSubmitHandler(e)}>연필</div>
            </div>
        </Wrapper>
    )
}

export default BoardWrite;

const Wrapper = styled.div`
    background-color: ${Colors.green1};
    margin: 0 5vw;
    padding: 10px;

    textarea {
        width: 100%;
        resize: none;
    }

    .low-section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

const Radios = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: auto;
`