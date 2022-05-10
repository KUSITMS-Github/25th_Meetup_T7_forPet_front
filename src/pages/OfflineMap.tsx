import React, { useEffect } from "react";
import styled from '@emotion/styled';
import { Colors } from '../styles/ui';
import OfflineMapInfo from "../components/OfflineMapInfo";

const OfflineMap = () => {
    var markers: any [] = [];  // 마커 객체 배열
    var infowindows: any [] = [];  // 정보창 객체 배열


    useEffect(() => {
        let map: null = null;
        const initMap = () => {
            //지도 옵션 지정
            const map = new naver.maps.Map("map", {
                center: new naver.maps.LatLng(37.610079, 126.93024),
                zoom: 16,
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
        };
        initMap();
    }, []);

    //지도 사이즈 관련 스타일
    const mapStyle = {
        width: "61%",
        height: "690px",
    };

    return (
        <Offline>
            <OfflineMapInfo />
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