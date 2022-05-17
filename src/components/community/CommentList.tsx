import React, { useState, useEffect, PropsWithChildren, Children } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { getApi } from '../../api';
import { useParams, useNavigate } from "react-router-dom";

const dump = [
    {
        "parentId": null,
        "commentId": 1,
        "content": "무야호~",
        "username": "부모1",
        "userId": 1,
        "profileImage": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
        "createDate": "2022-04-04 21:37:52",
        "children": [
            {
                "parentId": 1,
                "commentId": 4,
                "content": "자식댓글1",
                "username": "자식1",
                "userId": 2,
                "profileImage": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
                "createDate": "2022-04-04 21:38:19",
            },
            {
                "parentId": 1,
                "commentId": 9,
                "content": "자식댓글2",
                "username": "자식2",
                "userId": 1,
                "profileImage": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
                "createDate": "2022-04-07 00:38:18",
            }
        ]
    },
    {
        "parentId": null,
        "commentId": 2,
        "content": "부모2",
        "username": "부모2",
        "userId": 3,
        "profileImage": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
        "createDate": "2022-04-04 21:38:04",
        "children": [
            {
                "parentId": 2,
                "commentId": 5,
                "content": "자식댓1",
                "username": "dasdad",
                "userId": 4,
                "profileImage": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
                "createDate": "2022-04-04 21:38:21",
            }
        ]
    },
    {
        "parentId": null,
        "commentId": 3,
        "content": "부모입니다333",
        "username": "333",
        "userId": 5,
        "profileImage": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
        "createDate": "2022-04-04 21:38:09",
        "children": [
            {
                "parentId": 3,
                "commentId": 7,
                "content": "자식1",
                "username": "자식1",
                "userId": 1,
                "profileImage": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
                "createDate": "2022-04-06 23:35:28",
            },
            {
                "parentId": 3,
                "commentId": 8,
                "content": "자식2",
                "username": "자식2",
                "userId": 1,
                "profileImage": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
                "createDate": "2022-04-07 00:34:16",
            }
        ]
    }
];

const CommentList = () => {
    const params = useParams();
    let postId = params.id;
    const navigate = useNavigate();

    const [comments, setComments] = useState(dump);
    // const [comments, setComments] = useState();

    useEffect(() => {
        const getComments = async () => {
            await getApi(
                {},
                `/community/${postId}/comment`
            )
                .then(({ status, data }) => {
                    console.log(status, data);
                    if (status === 200) {
                        setComments(data.body.comments);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        getComments();
    }, [])

    const clickProfile = (userId: number) => {
        navigate(`/mypage/${userId}`);
    }

    const Comment = ({ comment, pp }: any) => {
        console.log(pp)
        return (
            <div className={pp}
                style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                <img src={comment.profileImage}
                    style={{ width: '30px', height: '30px', borderRadius: '20px', cursor: 'pointer' }}
                    onClick={() => clickProfile(comment.userId)} />
                <div>
                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{comment.username}</div>
                    <div>{comment.content}</div>
                    <div style={{ display: 'flex', flexDirection: 'row', color: Colors.gray2, fontSize: '14px' }}>
                        <div>{comment.createDate}</div>
                        <div style={{ margin: '0 8px' }}>답글쓰기</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {
                comments &&
                comments.map((comment, i) => (
                    <Wrapper>

                        <Comment comment={comment} pp='parent' className='parent' />
                        {
                            comment.children &&
                            comment.children.map((child, i) => (
                                <Comment comment={child} pp='child' className='child' />
                            ))
                        }
                        <></>
                    </Wrapper>
                ))
            }
        </>
    )
}

export default CommentList;

const Wrapper = styled.div`
    .child {
        margin-left: 50px;
    }
`

