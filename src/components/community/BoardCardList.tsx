import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { getApi } from '../../api';
import Pagination from "../Pagination";
import { useNavigate } from "react-router-dom";

const initialData = [
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

const initialBoardList = [
    {
        "postId": 0,
        "userId": 0,
        "title": "",
        "content": "",
        "date": "",
        "thumbsUpCnt": 0,
        "imageUrlList": [""],
        "category": ""
    },
]

interface propsType {
    board: string;
    search: string;
}

interface BoardItf {
    writer: {
        user_id: number;
        user_profile_image: string;
        user_nickname: string;
    };
    title: string,
    category: string,
    post_id: number,
    thumbs_up_cnt: number,
    image_url_list: any,
    comment_cnt: number,
    createdDate: string
}

const BoardCardList = ({ board, search }: propsType) => {
    const navigate = useNavigate();
    // const [boardList, setBoardList] = useState(initialData);
    const [boardList, setBoardList] = useState<BoardItf[]>();


    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    const handlePrevPage = (prevPage: number) => {
        setPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = (nextPage: number) => {
        setPage((nextPage) => nextPage + 1);
    };

    useEffect(() => {
        // 커뮤니티 글 불러오기 게시판 - share, boast
        const getBoardList = async () => {
            await getApi(
                {},
                `/community/list?page=${page-1}&size=${12}&category=${board}`
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
                `/community/search/page=${page - 1}/size=${12}/keywork=${search}`
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
                <CardView>
                    {
                        boardList &&
                        boardList.map((b, i) => (
                            <BoardCardOne
                                key={b.post_id}
                                onClick={() => clickHandler(b.post_id)}
                            >
                                <img src={b.image_url_list[0]} />
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left', marginTop: '5px' }}>
                                    <img src={b.writer.user_profile_image}
                                        style={{ width: '40px', height: '40px', borderRadius: '40px' }}
                                    />
                                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', marginLeft: '10px' }}>
                                        <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{b.title}</div>
                                        <div style={{ fontSize: '14px', color: Colors.gray1 }}>{b.writer.user_nickname}</div>
                                    </div>
                                </div>

                                {/* <div>좋아요수 {b.thumbsUpCnt}</div>
                            <div>댓글수</div> */}
                            </BoardCardOne>
                        ))
                    }
                </CardView>
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

export default BoardCardList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 80px;
    justify-content: center;
    align-items: center;
`

const ListWrapper = styled.div`
    margin: 20px auto;
    border-radius: 15px;
`

const CardView = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0 auto;
`

const BoardCardOne = styled.div`
    background-color: ${Colors.white};
    border: none;
    width: 220px;
    padding: 20px;
    margin: 20px;

    img {
        width: 220px;
        height: 220px;
    }


`