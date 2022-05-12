import React, { useState, useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../styles/ui';
import { postApi } from '../api';


const PediaOne = (post: any) => {
    const onePost = post.post;
    const [myAnswer, setMyAnswer] = useState<string>();

    const writeAnswer = () => {
        // 연필 클릭 시 답변 입력 - postapi
        console.log(myAnswer);
        console.log(onePost.qnaBoardId); // id랑 같이 넘기기
        const createComment = async () => {
            await postApi(
                {
                    comment: myAnswer
                },
                `/qnaBoard/${onePost.qnaBoardId}/comment`
            )
                .then(({ status, data }) => {
                    if (status === 200) {
                        // console.log("댓글 작성 post api", status);
                        window.location.reload(); // 새로고침
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        createComment();
    }


    return (
        <OnePost>
            <Question>
                <div className='q-upper'>
                    <div className='writer-sec'>
                        <div>이미지</div>
                        <div className='writer-sec-name'>
                            <div className='writer'>{onePost.nickName}</div>
                            <div>{onePost.tag}</div>
                        </div>
                    </div>
                    <div>{onePost.createDate}</div>
                </div>
                <div className='q-contents'>
                    <div className='q-title'>{onePost.title}</div>
                    <div className='q-question'>{onePost.content}</div>
                </div>
                <div className='cnts'>
                    <div className='cnt'>좋아요수 {onePost.likes}</div>
                    <div className='cnt'>스크랩수 {onePost.bookmark}</div>
                    <div className='cnt'>댓글수 {onePost.comments}</div>
                </div>
            </Question>
            <hr
                style={{
                    color: `${Colors.gray1}`,
                    height: 1,
                    width: '100%'
                }}
            />
            <Answer>
                <div className='writer-sec'>
                    <div>이미지</div>
                    <div className='writer-sec-name'>
                        <div className='writer'>{onePost.awriter}</div>
                        <div>{onePost.atag}</div>
                    </div>
                </div>
                <div className='answer'>{onePost.answer}</div>
                <div className='a-good-cnt'>댓글 추천수{onePost.answerGoodCnt}</div>
            </Answer>
            <div className='input-comment'>
                <textarea
                    placeholder='댓글을 입력하시개'
                    onChange={(
                        e: React.ChangeEvent<HTMLTextAreaElement>,
                    ): void => setMyAnswer(e.target.value)}
                    value={myAnswer}
                ></textarea>
                <div
                    className="pencil-img"
                    onClick={writeAnswer}>연필</div>
            </div>

        </OnePost>
    );
}

export default PediaOne;

const OnePost = styled.header`
    display: flex;
    flex-direction: column;
    width: 900px; // 추후조정
    margin: 10px auto;
    padding: 20px;
    background-color: ${Colors.green1};

    textarea {
        resize: none;
    }

    .input-comment {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    textarea {
        width: 90%;
    }

    .pencil-img {
        cursor: pointer;
    }

    .writer-sec {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
    .writer-sec-name {
        display: flex;
        flex-direction: column;
    }

    .writer {
        font-weight: bold;
    }
`
const Question = styled.header`

    .q-upper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .q-contents {
        text-align: left;
    }

    .q-title {
        font-weight: bold;
        font-size: 20px;
    }

    .cnts {
        display: flex;
        flex-direction: row;
        float: right;
    }

    .cnt {
        margin: 0 5px;
    }
`
const Answer = styled.header`
    text-align: left;

    .answer {
        margin-left: 30px;
    }

    .a-good-cnt {
        margin-left: 30px;
    }
`