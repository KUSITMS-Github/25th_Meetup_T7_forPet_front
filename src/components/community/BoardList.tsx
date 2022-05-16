import React, { useState, useEffect, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { getApi } from '../../api';
import Pagination from "../Pagination";
import { useNavigate } from "react-router-dom";

const initialBoardList = [
    {
        "writer": {
            "user_id": 3,
            "user_profile_image": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
            "user_nickname": "쩜마이"
        },
        "title": "insertTitle",
        "category": "sharing",
        "post_id": 10,
        "thumbs_up_cnt": 0,
        "image_url_list": [
            "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/d55921df-d60b-4466-93b5-0c547ffdf68d.png"
        ],
        "comment_cnt": 2
    },
    {
        "writer": {
            "user_id": 3,
            "user_profile_image": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
            "user_nickname": "쩜마이"
        },
        "title": "insertTitle",
        "category": "meeting",
        "post_id": 9,
        "thumbs_up_cnt": 0,
        "image_url_list": [
            "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/2a901d25-0ff4-4e43-bb91-e36ef67a89e1.png"
        ],
        "comment_cnt": 2
    },
    {
        "writer": {
            "user_id": 3,
            "user_profile_image": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
            "user_nickname": "쩜마이"
        },
        "title": "insertTitle",
        "category": "meeting",
        "post_id": 8,
        "thumbs_up_cnt": 0,
        "image_url_list": [
            "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/6ec7081f-5877-4f6b-9459-f5318fd35c37.png"
        ],
        "comment_cnt": 2
    },
    {
        "writer": {
            "user_id": 3,
            "user_profile_image": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
            "user_nickname": "쩜마이"
        },
        "title": "insertTitle",
        "category": "boasting",
        "post_id": 7,
        "thumbs_up_cnt": 0,
        "image_url_list": [
            "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/c351f652-31f6-4d68-9568-8fff1c47ed1e.png"
        ],
        "comment_cnt": 2
    },
    {
        "writer": {
            "user_id": 3,
            "user_profile_image": "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
            "user_nickname": "쩜마이"
        },
        "title": "insertTitle",
        "category": "boasting",
        "post_id": 6,
        "thumbs_up_cnt": 0,
        "image_url_list": [
            "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/98a1e436-d006-41eb-bba9-94f5031259e9.png"
        ],
        "comment_cnt": 2
    }
];

interface propsType {
    board: string;
    search: string;
}

const BoardList = ({ board, search }: propsType) => {

    const navigate = useNavigate();
    const [boardList, setBoardList] = useState(initialBoardList);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    const handlePrevPage = (prevPage: number) => {
        setPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = (nextPage: number) => {
        setPage((nextPage) => nextPage + 1);
    };

    useEffect(() => {
        console.log(search);
        // 커뮤니티 글 불러오기 게시판 - all, meet
        const getBoardList = async () => {
            await getApi(
                {},
                `/community/list?category=${board}?page=${page - 1}?size=${10}`  // 추후 수정 size는 뭐지. 
            )
                .then(({ status, data }) => {
                    console.log(status, data);
                    if (status === 200) {
                        setBoardList(data.body.data.data);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        getBoardList();
    }, [page])

    useEffect(() => {
        // 검색 api
        const getSearchList = async () => {
            await getApi(
                {},
                `/community/search/page=${page - 1}/size=${10}/keywork=${search}`
            )
                .then(({ status, data }) => {
                    console.log(status, data);
                    if (status === 200) {
                        setBoardList(data.body.data.data);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
            getSearchList();
        }
    }, [search])

    const clickHandler = (postId: number) => {
        navigate(`/post/${postId}`);  // 글 상세창으로 이동
    }

    return (
        <Wrapper>
            <ListWrapper>
                {
                    boardList &&
                    boardList.map((b, i) => (
                        <BoardListOne
                            key={b.post_id}
                            onClick={() => clickHandler(b.post_id)}
                        >
                            {
                                board === 'all' &&
                                <div>{b.category}</div>
                            }
                            <div className='user'>{b.writer.user_id}</div>
                            <div className='title'>{b.title}</div>
                            <div className='like-cnt'>좋아요수 {b.thumbs_up_cnt}</div>
                            <div className='comt-cnt'>댓글수</div>
                        </BoardListOne>
                    ))
                }
            </ListWrapper>
            <Pagination
                totalPages={totalPages}
                currentPage={page}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
            />
        </Wrapper>
    )
}

export default BoardList;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ListWrapper = styled.div`
    margin: 20px 80px;
    background-color: ${Colors.white};
    box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
`

const BoardListOne = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 80px;
`