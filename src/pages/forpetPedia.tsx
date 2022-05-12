import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled';
import Pagination from "../components/Pagination";
import { PediaOne, CreatePostPedia } from '../components';
import { getApi } from '../api';


const ForpetPedia = () => {
    const navigate = useNavigate();

    const initialPediaList =  // 임시 데이터
    [
        {
            "qnaBoardId": 2,
            "nickName": "김유동",
            "tag" : "예비반려인",
            "title": "titletitle",
            "content": "contentcontent",
            "createDate": "2022-05-11T17:19:20.617981",
            "likes": 3,
            "bookmark": 2,
            "comments": 1,
            "imageUrlList": [
                "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/5107068e-51f5-4836-81a8-d3ba3f572660.jpg"
            ]
        },
        {
            "qnaBoardId": 3,
            "nickName": "김유동",
            "tag" : "예비반려인",
            "title": "titletitle",
            "content": "contentcontent",
            "createDate": "2022-05-11T18:27:23.124736",
            "likes": 0,
            "bookmark": 0,
            "comments": 0,
            "imageUrlList": [
                "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/f5916a54-70e9-43cf-ba80-3fc3d91218bd.jpeg",
                "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/df30acfd-2697-4c50-9614-b0f4c1a7e67f.jpg"
            ]
        },
        {
            "qnaBoardId": 4,
            "nickName": "김유동",
            "tag" : "예비반려인",
            "title": "titletitle",
            "content": "contentcontent",
            "createDate": "2022-05-11T18:28:36.742053",
            "likes": 1,
            "bookmark": 1,
            "comments": 0,
            "imageUrlList": [
                "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/b9be9557-6113-4b91-9f48-0121c41548b7.jpeg",
                "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/7926ec79-02bb-4afb-a40e-1b509e17f3ae.jpg"
            ]
        }
    ]

    // const initialPediaList = [{
    //             "_id": "6226ecb59ae535d10q6e484c",
    //             "postNumber": 1,
    //             "title": "질문 제목",
    //             "question": "질문 내용",
    //             "qwriter": "질문 작성자",
    //             "qtag": "예비 반려인",
    //             "awriter": "답변 작성자",
    //             "atag": "반려인",
    //             "answer": "답변 내용~",
    //             "answerGoodCnt": 4,
    //             "date": "2022-03-08 14:42:13",
    //             "goodCnt": 5,
    //             "scrapCnt": 3,
    //             "answerCnt": 1,
    //         }],
            

    const initialFaqKeyword = ["임시보호", "필수품", "유기견"];

    const [doQuestion, setDoQestion] = useState<boolean>(false);  // 질문하기 버튼 클릭 시 질문 폼 렌더링
    const [searchWord, setSearchWord] = useState<string>();  // 검색 시 검색결과 렌더링
    const [searchWordRe, setSearchWordRe] = useState<string>();

    const [sortVar, setSortVar] = useState<string>('latest');  // 최신순: latest, 추천순: likes
    const [pediaList, setPediaList] = useState(initialPediaList);
    const [faqKeyword, setFaqKeyword] = useState(initialFaqKeyword);


    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    const handlePrevPage = (prevPage: number) => {
        setPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = (nextPage: number) => {
        setPage((nextPage) => nextPage + 1);
    };

    useEffect(() => {  // pediaList 불러오기 getApi
        // [TODO] sortVar : lastest, likes 보내기
        const getPediaList = async () => {
            if (sortVar === 'latest') {
                await getApi(
                    {},
                    `/qnaBoard/orderByLatest?page=${page}`
                )
                .then(({ status, data }) => {
                    if (status === 200) {
                        // console.log(`GET /orderByLatest?page=${page}`, data.data);
                        setPediaList(data.data);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
            } else {
                await getApi(
                    {},
                    `/qnaBoard/orderByLikes?page=${page}`
                )
                .then(({ status, data }) => {
                    if (status === 200) {
                        // console.log(`GET /orderByLikes?page=${page}`, data.data);
                        setPediaList(data.data);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
            }
        }
        getPediaList();
    }, [sortVar, page])

    const clickKeyword = (keyword: string) => {  // keyword로 검색 api 불러오기
        // console.log(keyword);
        setSearchWord(keyword);
        setSearchWordRe(keyword);
    }

    const enterSearchInput = async (e: any) => {
        if (e.key === "Enter") {  // 엔터키 클릭 시 검색 api 호출
            console.log(e.target.value);
            setSearchWordRe(e.target.value);
            await getApi(
                {},
                `/qnaBoard/search?keyword=${e.target.value}&orderby=${sortVar}`
            )
            .then(({ status, data }) => {
            // console.log("search 결과", status, data);
            if (data) {
                setPediaList(data.data);
            } else {
                setPediaList([]);
            }
            })
            .catch((e) => {
            console.log(e);
            });
        }
    }

    return (
        <>
            <Wrapper>
                <div className='upper-group'>
                    <input
                        className='searchbar'
                        onChange={(
                            e: React.ChangeEvent<HTMLInputElement>,
                        ): void => setSearchWord(e.target.value)}
                        onKeyPress={enterSearchInput}
                        value={searchWord}
                    />
                    <button
                        className='question-button'
                        onClick={() => setDoQestion(!doQuestion)}
                    >질문하기</button>
                </div>
                <div className='keywords'>자주 묻는 키워드
                    {
                        faqKeyword &&
                        faqKeyword.map((e, i) => (
                            <div
                                key={i}
                                className='keyword'
                                onClick={() => clickKeyword(e)}
                            >#{e}</div>
                        ))
                    }
                </div>
                {
                    searchWordRe &&
                    <div className='search-result'>'{searchWordRe}' 검색 결과</div>
                }

                {doQuestion && <CreatePostPedia />}

                <div className='sort'>
                    <div
                        onClick={() => setSortVar('latest')}
                        style={{
                            fontWeight: sortVar === 'latest' ?
                                'bold' : 'normal'
                        }}
                    >
                        최신순&nbsp;&nbsp;
                    </div>
                    <div
                        onClick={() => setSortVar('likes')}
                        style={{
                            fontWeight: sortVar === 'likes' ?
                                'bold' : 'normal'
                        }}
                    >
                        추천순
                    </div>
                </div>

                {
                    pediaList &&
                    pediaList.map(p => (
                        <PediaOne
                            key={p.qnaBoardId}
                            post={p}
                        />
                    ))
                }

            <Pagination
                totalPages={totalPages}
                currentPage={page}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
            />
            </Wrapper>
        </>
    );
};

export default ForpetPedia;


const Wrapper = styled.header`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 60vw;

    .upper-group {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .searchbar {
        width: 900px;
        height: 40px;
        border-radius: 20px;
        margin: 0 20px;
    }

    .question-button {
        width: 300px;
        height: 40px;
        border-radius: 20px;
        margin: 0 20px;

    }

    .keywords {
        display: flex;
        flex-direction: row;
    }

    .keyword {
        margin: 0 5px;
        cursor: pointer;
    }

    .search-result {
        font-size: 24px;
        text-align: left;
    }

    .sort {
        display: flex;
        flex-direction: row;
        margin-left: auto;
    }
`