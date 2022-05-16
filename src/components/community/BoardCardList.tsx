import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { getApi } from '../../api';
import Pagination from "../Pagination";
import { useNavigate } from "react-router-dom";

const initialData = [
    {
        "postId": 3,
        "userId": 1,
        "title": "testTitle",
        "content": "testContent",
        "date": "2022-05-13T17:09:13.586589",
        "thumbsUpCnt": 0,
        "imageUrlList": ["https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/a561f68a-14a5-445d-aa43-3d435d86e04b.png", "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/a7f10556-c8d6-4f6a-8ad1-34e9500daf0c.png"],
        "category": "meeting"
    },
    {
        "postId": 2,
        "userId": 1,
        "title": "testTitle",
        "content": "testContent",
        "date": "2022-05-13T17:04:09.750795",
        "thumbsUpCnt": 0,
        "imageUrlList": ["https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/967e1338-67f0-4f6c-8ed0-ea92c8583124.png", "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/d58e980b-1c14-47a0-be5a-de20e157abce.png"],
        "category": "meeting"
    },
    {
        "postId": 3,
        "userId": 1,
        "title": "testTitle",
        "content": "testContent",
        "date": "2022-05-13T17:09:13.586589",
        "thumbsUpCnt": 0,
        "imageUrlList": ["https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/a561f68a-14a5-445d-aa43-3d435d86e04b.png", "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/a7f10556-c8d6-4f6a-8ad1-34e9500daf0c.png"],
        "category": "meeting"
    },
    {
        "postId": 2,
        "userId": 1,
        "title": "testTitle",
        "content": "testContent",
        "date": "2022-05-13T17:04:09.750795",
        "thumbsUpCnt": 0,
        "imageUrlList": ["https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/967e1338-67f0-4f6c-8ed0-ea92c8583124.png", "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/d58e980b-1c14-47a0-be5a-de20e157abce.png"],
        "category": "meeting"
    },
    {
        "postId": 3,
        "userId": 1,
        "title": "testTitle",
        "content": "testContent",
        "date": "2022-05-13T17:09:13.586589",
        "thumbsUpCnt": 0,
        "imageUrlList": ["https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/a561f68a-14a5-445d-aa43-3d435d86e04b.png", "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/a7f10556-c8d6-4f6a-8ad1-34e9500daf0c.png"],
        "category": "meeting"
    },
    {
        "postId": 2,
        "userId": 1,
        "title": "testTitle",
        "content": "testContent",
        "date": "2022-05-13T17:04:09.750795",
        "thumbsUpCnt": 0,
        "imageUrlList": ["https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/967e1338-67f0-4f6c-8ed0-ea92c8583124.png", "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/d58e980b-1c14-47a0-be5a-de20e157abce.png"],
        "category": "meeting"
    },
    {
        "postId": 3,
        "userId": 1,
        "title": "testTitle",
        "content": "testContent",
        "date": "2022-05-13T17:09:13.586589",
        "thumbsUpCnt": 0,
        "imageUrlList": ["https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/a561f68a-14a5-445d-aa43-3d435d86e04b.png", "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/a7f10556-c8d6-4f6a-8ad1-34e9500daf0c.png"],
        "category": "meeting"
    },
    {
        "postId": 2,
        "userId": 1,
        "title": "testTitle",
        "content": "testContent",
        "date": "2022-05-13T17:04:09.750795",
        "thumbsUpCnt": 0,
        "imageUrlList": ["https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/967e1338-67f0-4f6c-8ed0-ea92c8583124.png", "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/d58e980b-1c14-47a0-be5a-de20e157abce.png"],
        "category": "meeting"
    },
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

const BoardCardList = ({ board, search }: propsType) => {
    const navigate = useNavigate();
    const [boardList, setBoardList] = useState(initialData);

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
                `/community/search/page=${page-1}/size=${10}/keywork=${search}`
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
            <CardView>
            {
                boardList &&
                boardList.map((b, i) => (
                    <BoardCardOne 
                        key={b.postId}
                        onClick={() => clickHandler(b.postId)}
                        >
                        <img src={b.imageUrlList[0]} />
                        <div>{b.userId}</div>
                        <div>{b.title}</div>
                        
                        {/* <div>좋아요수 {b.thumbsUpCnt}</div>
                        <div>댓글수</div> */}
                    </BoardCardOne>
                ))
            }
            </CardView>
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
`

const CardView = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const BoardCardOne = styled.div`
    border: 1px solid ${Colors.black};
    width: 200px;
    padding: 20px;
    margin: 20px;

    img {
        width: 200px;
        height: 200px;
    }

`