import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import styled from '@emotion/styled';
import { Colors } from '../styles/ui';
import { getApi, postApi } from '../api';
import { PediaOneComment } from '../components';

const dumpdata = {
    "qnaBoardId": 2,
    "nickName": "김유동",
    "tag": "예비반려인",
    "title": "titletitle",
    "content": "contentcontent",
    "createDate": "2022-05-11T17:19:20.617981",
    "likes": 3,
    "bookmark": 2,
    "comments": 1,
    "imageUrlList": [
        "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/5107068e-51f5-4836-81a8-d3ba3f572660.jpg"
    ]
}

const dump2 = [
    {
        "imageUrl": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
        "nickName": "김유동",
        "tag": "예비반려인",
        "comment": "귀여워요",
        "createDate": "2022-05-12T14:13:50.797922",
        "likes": 3,
        "id": 1
    },
    {
        "imageUrl": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
        "nickName": "김유동",
        "tag": "예비반려인",
        "comment": "댓글댓글댓글",
        "createDate": "2022-05-12T14:42:26.300552",
        "likes": 0,
        "id": 3
    },
    {
        "imageUrl": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
        "nickName": "쩜마이",
        "tag": "반려인",
        "comment": "게시글1 댓글작성",
        "createDate": "2022-05-12T15:18:17.055392",
        "likes": 0,
        "id": 4
    },
    {
        "imageUrl": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
        "nickName": "김유동",
        "tag": "예비반려인",
        "comment": "댓글이",
        "createDate": "2022-05-12T23:24:42.126204",
        "likes": 0,
        "id": 5
    }
]

const PediaDetail = () => {
    const [question, setQuestion] = useState(dumpdata);  // 질문
    const [comments, setComments] = useState([]);  // 댓글
    const [myAnswer, setMyAnswer] = useState<string>();  // 내가 쓴 댓글
    const params = useParams();
    let postId = params.id;

    // interface Comment {
    //     imageUrl: string,
    //     nickName: string,
    //     tag: string,
    //     comment: string,
    //     createDate: string,
    //     likes: number,
    //     id: number,
    // }

    useEffect(() => {
        // 글 불러오기
        const getQuestion = async () => {
            await getApi(
                {}, `/qnaBoard/${postId}`
            )
                .then(({ status, data }) => {
                    console.log(`GET 글 내용`, status, data);
                    if (status === 200) {
                        setQuestion(data.body.data);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }

        // 댓글 불러오기
        const getComments = async () => {
            await getApi(
                {}, `/qnaBoard/${postId}/comment`
            )
                .then(({ status, data }) => {
                    console.log('댓글불러옴', data);
                    if (status === 200) {
                        // console.log(`GET 댓글내용`, status, data);
                        setComments(data.body.data);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        getQuestion();
        getComments();
    }, []);

    // 댓글 입력
    const writeAnswer = () => {  // 연필 클릭 시 답변 입력 - postapi
        console.log(myAnswer);
        console.log(postId); // id랑 같이 넘기기
        const createComment = async () => {
            await postApi(
                {
                    // comment: myAnswer
                },
                `/qnaBoard/${postId}/comment?comment=${myAnswer}`
            )
                .then(({ status, data }) => {
                    console.log('댓글입력:', status, data);
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

    // 좋아요, 북마크 Post API
    const clickCnt = async (cnt: string) => {
        await postApi(
            {},
            `/qnaBoard/${postId}/${cnt}`
        )
            .then(({ status, data }) => {
                console.log("POST 좋아요/북마크 누름", status, data);
                if (status === 200) {
                    if (cnt === 'like') {
                        setQuestion({ ...question, likes: data.body.data });
                    } else {
                        setQuestion({ ...question, bookmark: data.body.data.cnt });
                    }
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <Wrapper>
            <Question>
                <div className='q-upper'>
                    <div className='writer-sec'>
                        <div>이미지</div>
                        <div className='writer-sec-name'>
                            <div className='writer'>{question.nickName}</div>
                            <div>{question.tag}</div>
                        </div>
                    </div>
                    <div>{question.createDate}</div>
                </div>
                <hr
                    style={{
                        color: `${Colors.gray1}`,
                        height: 1,
                        width: '100%'
                    }}
                />
                <div className='q-contents'>
                    <div className='q-title'>{question.title}</div>
                    <div className='q-question'>{question.content}</div>
                </div>
                <div className='cnts'>
                    <div
                        className='cnt'
                        onClick={() => clickCnt('like')}
                    >좋아요수 {question.likes}
                    </div>
                    <div
                        className='cnt'
                        onClick={() => clickCnt('bookmark')}
                    >스크랩수 {question.bookmark}
                    </div>
                    <div className='cnt'>댓글수 {question.comments}</div>
                </div>
            </Question>

            <hr
                style={{
                    color: `${Colors.gray1}`,
                    height: 1,
                    width: '100%'
                }}
            />
            {
                comments && 
                comments.map((c: any, i: number) => (
                    <PediaOneComment
                        key={i}
                        comment={c}
                    />
                ))
            }
            <hr
                style={{
                    color: `${Colors.gray1}`,
                    height: 1,
                    width: '100%'
                }}
            />
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
        </Wrapper>
    )
}

export default PediaDetail;

const Wrapper = styled.div`
    padding: 0 20px;

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

const Question = styled.div`

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
