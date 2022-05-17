import React, { useEffect, useState } from "react";
import styled from '@emotion/styled';
import { Colors } from '../styles/ui';
import OfflineList from '../components/OfflineMapList';
import { getApi, postApi, setHeader } from '../api';

import Marker from "../assets/offlineMap/marker.png";

  const OfflineMap = () => {

    //TODO: API 대체
    const offline_map = 
    [
        {
            "id": 1,
            "category": "동물병원",
            "name": "청담동물병원",
            "address": "서울특별시 강남구 도산대로50길 13, 논현빌딩 3층 (논현동)",
            "longitude": "127.0376255",
            "latitude": "37.5217122"
        },
        {
            "id": 2,
            "category": "동물병원",
            "name": "자연동물병원",
            "address": "서울특별시 강남구 개포로 260 (개포동)",
            "longitude": "127.0508995",
            "latitude": "37.4792161"
        },
        {
            "id": 3,
            "category": "동물병원",
            "name": "강남25동물병원",
            "address": "서울특별시 강남구 학동로 235, 로이빌딩 (논현동)",
            "longitude": "127.0346255",
            "latitude": "37.5161688"
        },
        {
            "id": 4,
            "category": "동물병원",
            "name": "주주동물종합병원",
            "address": "서울특별시 강남구 선릉로 412, 1층 (대치동)",
            "longitude": "127.0503211",
            "latitude": "37.5022243"
        },
        {
            "id": 5,
            "category": "동물병원",
            "name": "서경석동물병원",
            "address": "서울특별시 강남구 일원로3길 38, 1층 (일원동)",
            "longitude": "127.0833909",
            "latitude": "37.4920703"
        }
    ]

    var markers: any [] = [];  // 마커 객체 배열
    var infowindows: any [] = [];  // 정보창 객체 배열

    const [mapList, setMapList] = useState(offline_map);
    console.log("1");
    const [myLocation, setMyLocation] = useState< { latitude: number; longitude: number } | string >("");

    useEffect(() => {
      // map 좌표 불러오기
      const getMapList = async () => {
          await getApi(
              {}, `/offline-map`
          )
              .then(({ status, data }) => {
                  console.log(`GET 글 내용`, status, data);
                  // if (status === 200) {
                  //     setQuestion(data.body.data);
                  // }
                  setMapList(data.body.data.placeInfo);
              })
              .catch((e) => {
                  console.log(e);
              });
      }
      getMapList();

  }, []);

    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            setMyLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          });
        } else {
          window.alert("현재위치를 알수 없습니다.");
        }
      }, []);

      useEffect(() => {
        if (typeof myLocation !== "string") {
          const currentPosition = [myLocation.latitude, myLocation.longitude]; // 현재 사용자 위치 추척
    
          //지도 옵션 지정
          const map = new naver.maps.Map("map", {
            center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
            // center: new naver.maps.LatLng(37.497928, 127.027583), //초기 위치 강남역
            logoControl: true,
            logoControlOptions: {
                position: naver.maps.Position.LEFT_BOTTOM
            },
            scaleControl: true,
            scaleControlOptions: {
                position: naver.maps.Position.RIGHT_BOTTOM
            },
            zoomControl: true,
            zoomControlOptions: {
                style: naver.maps.ZoomControlStyle.SMALL,
                position: naver.maps.Position.RIGHT_BOTTOM
            },
            mapDataControl: false,
            mapTypeControl: false
          });
    
          //현재 사용자 위치 마크
          new naver.maps.Marker({
            position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
            map: map,
            icon: {
              url: Marker
            },
          });
    
          new naver.maps.Marker({
            position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
            map: map,
            icon: {
              content: [`<span>현재 나의 위치</span>`].join(""),
              anchor: new naver.maps.Point(50, 60)
            },
          });

          //위치 정보 마크
          //offline_map.map(function(place: any) {
            mapList.map(function(place: any) {
              new naver.maps.Marker({
                position: new naver.maps.LatLng(Number(place.latitude), Number(place.longitude)),
                map: map,
                icon: {
                  url: Marker
                },
              });
              
              new naver.maps.Marker({
                position: new naver.maps.LatLng(Number(place.latitude), Number(place.longitude)),
                map: map,
                icon: {
                  content: [`<span>${place.name}</span>`].join(""),
                  anchor: new naver.maps.Point(50, 60)
                },
              });
        });

        }
    }, [myLocation]);

    //지도 크기 설정
    //TODO: 지도 height 지정
    const mapStyle = {
        width: "73%",
        height: "calc(100vh - 70px)",
    };

    return (
        <Offline>
            <OfflineList  />
            <div id="map" style={mapStyle}></div>
        </Offline>
    );
};

export default OfflineMap;

const Offline = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: center;
`;