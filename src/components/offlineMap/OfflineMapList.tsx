import React, { useEffect, useState } from "react";
import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { getApi } from '../../api';
import  OfflineMapListItem from './OfflineMapListItem';
import OfflineMapCategory from "./OfflineMapCategory";
import BtnSearch from "../../assets/offlineMap/btn_search.svg";

const OfflineMapList = () => {
    //TODO: API 대체
    const offline_list = 
    [
        {
            "id": 394,
            "name": "머멍펫살롱(MuMung)",
            "category": "미용실",
            "address": "서울특별시 강남구 논현동 272-26",
            "starAvg": 0.0,
            "reviewCnt": 0
        },
        {
            "id": 395,
            "name": "별애견샵",
            "category": "미용실",
            "address": "서울특별시 강남구 일원동 718",
            "starAvg": 0.0,
            "reviewCnt": 0
        },
        {
            "id": 403,
            "name": "오드리펫샵",
            "category": "미용실",
            "address": "논현동 162-13번지 1층 강남구 서울특별시 KR",
            "starAvg": 0.0,
            "reviewCnt": 0
        },
        {
            "id": 404,
            "name": "달이네애견미용실",
            "category": "미용실",
            "address": "논현동 125-17번지 1층 강남구 서울특별시 KR",
            "starAvg": 0.0,
            "reviewCnt": 0
        },
        {
            "id": 409,
            "name": "더왈츠",
            "category": "카페",
            "address": "서울특별시 강남구 역삼로 134",
            "starAvg": 0.0,
            "reviewCnt": 0
        },
        {
            "id": 410,
            "name": "두젠틀",
            "category": "카페",
            "address": "서울특별시 강남구 역삼동 667-10번지 하1층 별관",
            "starAvg": 0.0,
            "reviewCnt": 0
        },
        {
            "id": 417,
            "name": "히히냥냥",
            "category": "카페",
            "address": "서울특별시 강남구 강남대로102길 14 장연빌딩 5층 501호",
            "starAvg": 0.0,
            "reviewCnt": 0
        },
        {
            "id": 418,
            "name": "페스츄리",
            "category": "카페",
            "address": "서울특별시 강남구 역삼동 789-7",
            "starAvg": 0.0,
            "reviewCnt": 0
        }
    ]

    const [mapList, setMapList] = useState(offline_list);
    const [searchPlace, setsearchPlace] = useState<string>();  
    const [activeCat, setActiveCat] = useState('전체보기');

    //주변 반려견 장소 검색
    const enterSearchPlace = async (e: any) => {
            console.log(searchPlace);
            await getApi(
                {},
                `/offline-map/search?keyword=${searchPlace}`
            )
                .then(({ status, data }) => {
                    console.log("search 결과", status, data);
                    if (data) {
                        setMapList(data.body.data);
                    } else {
                        setMapList([]);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
    }

    useEffect(() => {
        activeCat === '전체보기'
          ? setMapList(offline_list)
          : 
            getApi(
                {},
                `/offline-map/category?category=${activeCat}`
            )
                .then(({ status, data }) => {
                    console.log("search 결과", status, data);
                    if (data) {
                        setMapList(data.body.data);
                    } else {
                        setMapList([]);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });

      }, [activeCat]);

    return(
        <ListBox>
            {/*제목*/}
            <Title>
                <span className='main-title'>forPet map</span>
                <span className='sub-titile'>&nbsp;|오프라인</span>
            </Title>

            {/*검색*/}
            <Section>
                <span className='title'>검색</span>
                <input
                    className='searchbar'
                    placeholder='내 주변 반려견 장소'
                        onChange={(
                            e: React.ChangeEvent<HTMLInputElement>,
                        ): void => setsearchPlace(e.target.value)}
                        value={searchPlace}
                ></input>
                <img className='btn_search' src={BtnSearch} onClick={enterSearchPlace} />   
            </Section>

            {/*주변*/}
            <Section>
                <span className='title'>주변</span>
                {mapList.map((item, index) => (
                    <OfflineMapListItem key={index} item={item} />
                ))}
            </Section>

            <Category>
                <OfflineMapCategory name='전체보기' activeCat={activeCat === '전체보기' ? true : false} handleSetCat={setActiveCat}/>
                <OfflineMapCategory name='카페' activeCat={activeCat === '카페' ? true : false} handleSetCat={setActiveCat}/>
                <OfflineMapCategory name='동물병원' activeCat={activeCat === '동물병원' ? true : false} handleSetCat={setActiveCat}/>
                <OfflineMapCategory name='동물약국' activeCat={activeCat === '동물약국' ? true : false} handleSetCat={setActiveCat}/>
                <OfflineMapCategory name='미용실' activeCat={activeCat === '미용실' ? true : false} handleSetCat={setActiveCat}/>
                <OfflineMapCategory name='보호소' activeCat={activeCat === '보호소' ? true : false} handleSetCat={setActiveCat}/>
                <OfflineMapCategory name='유치원' activeCat={activeCat === '유치원' ? true : false} handleSetCat={setActiveCat}/>
            </Category>
        </ListBox>
    );

};

export default OfflineMapList;

const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;

    width: 27%;
    height: calc(100vh - 89px);
    padding: 17px 3.5% 0px 3.5%;
    background-color: ${Colors.green1};

    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-start;

    .main-title {
        font-family: 'Baloo';
        font-weight: 400;
        font-size: 28px;
        color: ${Colors.black};
    }

    .sub-titile {
        font-family: 'NotoSans';
        font-weight: 400;
        font-size: 17px;
        color: ${Colors.gray2};
    }

`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;

    margin-top: 19px;

    .title{
        font-family: 'NotoSans';
        font-weight: 700;
        font-size: 17px;
        color: ${Colors.black};
    }

    .searchbar{
        margin-top: 16px;
        padding: 7px 19px;
        box-sizing: border-box;
        border: 3px solid #4F6D47;
        box-sizing: border-box;
        border-radius: 25.5px;

        background: #FFFFFF;

        font-family: 'NotoSans';
        font-weight: 400;
        font-size: 17px;
    }

    .btn_search{
        position: relative;
        top: -33px;
        left: 342px;
        width: 21px;
        height: 21px;
    }
`;

const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 68%;

    position: absolute;
    top: 89px;
    left: 32%;
    z-index: 1;
`;