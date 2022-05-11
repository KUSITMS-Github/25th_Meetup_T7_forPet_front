import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled';

import { PediaOne, CreatePostPedia } from '../components';


const ForpetPedia = () => {
    const navigate = useNavigate();

    const initialPediaList =  // 임시 데이터
        [
            {
                "_id": "6226ecb59ae535d10q6e484c",
                "postNumber": 1,
                "title": "질문 제목",
                "question": "질문 내용",
                "qwriter": "질문 작성자",
                "qtag": "예비 반려인",
                "awriter": "답변 작성자",
                "atag": "반려인",
                "answer": "답변 내용~",
                "answerGoodCnt": 4,
                "date": "2022-03-08 14:42:13",
                "goodCnt": 5,
                "scrapCnt": 3,
                "answerCnt": 1,
            },
            {
                "_id": "6226ecb59ae535d11e6e484c",
                "postNumber": 2,
                "title": "질문 제목2",
                "question": "질문 내용2",
                "qwriter": "질문 작성자2",
                "qtag": "예비 반려인",
                "awriter": "답변 작성자2",
                "atag": "반려인",
                "answer": "답변 내용22~",
                "answerGoodCnt": 3,
                "date": "2022-03-10 14:42:13",
                "goodCnt": 5,
                "scrapCnt": 4,
                "answerCnt": 3,
            },
            {
                "_id": "6226ecb59ae235d10e6e484c",
                "postNumber": 3,
                "title": "질문 제목3",
                "question": "질문 내용3",
                "qwriter": "질문 작성자3",
                "qtag": "예비 반려인",
                "awriter": "답변 작성자3",
                "atag": "반려인",
                "answer": "답변 내용3~",
                "answerGoodCnt": 4,
                "date": "2022-03-11 14:42:13",
                "goodCnt": 1,
                "scrapCnt": 3,
                "answerCnt": 3,
            },
        ];
    
    const initialFaqKeyword = ["임시보호", "필수품", "유기견"];
    
    const [doQuestion, setDoQestion] = useState<boolean>(false); // 질문하기 버튼 클릭 시 질문 폼 렌더링

    const [pediaList, setPediaList] = useState(initialPediaList);
    const [faqKeyword, setFaqKeyword] = useState(initialFaqKeyword);

    const clickKeyword = (keyword: string) => {
        // keyword로 검색 api 불러오기
        // console.log(keyword);
        
    }

    

    return (
        <>
            <UpperSection>
                <div className='upper-group'>
                    <input className='searchbar'/>
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
            </UpperSection>

            {doQuestion && <CreatePostPedia />}
            
            {
                pediaList &&
                    pediaList.map(p => (
                        <PediaOne
                            key={p._id}
                            post={p}
                        />
                    ))
            }
        </>
    );
};

export default ForpetPedia;

const UpperSection = styled.header`
    display: flex;
    flex-direction: column;

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
        justify-content: center;
    }

    .keyword {
        margin: 0 5px;
        cursor: pointer;
    }
`;

