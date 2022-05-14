import React, { useState, useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../styles/ui';
import { postApi, getApi } from '../api';
import { useNavigate } from "react-router-dom";
import { PediaOneComment } from '../components';


const PediaOne = (post: any) => {
    const navigate = useNavigate();
    const onePost = post.post;
    const [myAnswer, setMyAnswer] = useState<string>();
    const [count, setCount] = useState({
        like: 0,
        bookmark: 0,
        comment: 0,
    });
    
    // interface Comment {
    //     imageUrl: string,
    //     nickName: string,
    //     tag: string,
    //     comment: string,
    //     createDate: string,
    //     likes: number,
    //     id: number,
    // }

    const commentInitial = [
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
    ];

    const [comments, setComments] = useState([]);  // 댓글 
    // const [comments, setComments] = useState();

    // 댓글 불러오기 GET API
    useEffect(() => {
        const getComments = async() => {
            await getApi(
                {},
                `/qnaBoard/${onePost.qnaBoardId}/comment`
            )
            .then(({ status, data }) => {
                console.log(`GET 댓글 불러오기`, status, data.data);
                if (status === 200) {
                    setComments(data.data);
                }
            })
            .catch((e) => {
                console.log(e);
            });
        }
        getComments();
    }, [])

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

    // 좋아요, 스크랩 Post API
    const clickLike = async ( postId: number, cnt: string ) => {
        console.log('좋아요누름', postId);
        await postApi(
            {},
            `/qnaBoard/${postId}/${cnt}`
        )
            .then(({ status, data }) => {
                if (status === 200) {
                    // console.log("POST 좋아요/북마크 누름", status, data);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const postClickHandler = () => {
        navigate(`/pedia/${onePost.qnaBoardId}`);
    };


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
                <div className='q-contents' onClick={postClickHandler}>
                    <div className='q-title'>{onePost.title}</div>
                    <div className='q-question'>{onePost.content}</div>
                </div>
                <div className='cnts'>
                    <div className='cnt' onClick={() => clickLike(onePost.qnaBoardId, 'like')}>좋아요수 {onePost.likes}</div>
                    <div className='cnt' onClick={() => clickLike(onePost.qnaBoardId, 'bookmark')}>스크랩수 {onePost.bookmark}</div>
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
            
            {
                comments && 
                comments.map((c: any, i: number) => (
                    <PediaOneComment
                        key={i}
                        comment={c}
                    />
                ))
            }

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

const OnePost = styled.div`
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
const Answer = styled.div`
    text-align: left;

    .answer {
        margin-left: 30px;
    }

    .a-good-cnt {
        margin-left: 30px;
    }
`