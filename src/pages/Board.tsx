import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";


import { Editor } from "../components"


const Board = () => {
    const navigate = useNavigate();

    const initialList =  // 임시 데이터
        [
            {
                "_id": "6226ecb59ae535d10e6e484c",
                "viewCnt": 3,
                "title": "제목1",
                "content": "내용1",
                "postNumber": 1,
                "date": "2022-03-08 14:42:13"
            },
            {
                "_id": "6226ecba9ae535d10e6e4851",
                "viewCnt": 3,
                "title": "제목2",
                "content": "내용2",
                "postNumber": 2,
                "date": "2022-03-08 14:42:18"
            },
            {
                "_id": "6226ecbd9ae535d10e6e4856",
                "viewCnt": 3,
                "title": "제목3",
                "content": "내용3",
                "postNumber": 3,
                "date": "2022-03-08 14:42:21"
            }
        ];
    const [list, setList] = useState(initialList);

    const contentsClickHandler = (postNumber: number) => {  // 클릭 시 글 상세 페이지로 이동
        // console.log(postNumber);
        navigate(`/post/${postNumber}`);
    }


    return (
        <div>
            <div>
                {
                    list.length ?
                        list.map((e, idx) => (
                            <div
                                key={idx}
                                onClick={() => contentsClickHandler(e.postNumber)}
                            >
                                <div>
                                    <div>{e.title}</div>
                                    <div>{e.content}</div>
                                    <div>{e.date}</div>
                                </div>
                            </div>
                        )) :
                        <div>
                            글 없음
                        </div>
                }
            </div>
        </div>
    );
};

export default Board;
