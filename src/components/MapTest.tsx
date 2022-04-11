import React, { useEffect } from "react";

const MapTest = () => {
    var hyeonjinHouse = new naver.maps.LatLng(36.30260, 127.33838);
    var jooyeokHouse = new naver.maps.LatLng(36.32611, 127.41263);
    var markers: any [] = [];  // 마커 객체 배열
    var infowindows: any [] = [];  // 정보창 객체 배열


    useEffect(() => {
        let map: null = null;
        const initMap = () => {
            const map = new naver.maps.Map("map", {
                center: new naver.maps.LatLng(37.511337, 127.012084),
                zoom: 13,
            });
            markers.push(new naver.maps.Marker({
                map: map,
                position: hyeonjinHouse
            }));
            
            infowindows.push(new naver.maps.InfoWindow({
                content: [
                    '<div class="iw_inner">',
                    '   <h3>현진이네 집</h3>',
                    '</div>'
                ].join('')
            }));
            markers.push(new naver.maps.Marker({
                map: map,
                position: jooyeokHouse
            }));
            
            infowindows.push(new naver.maps.InfoWindow({
                content: [
                    '<div class="iw_inner">',
                    '   <h3>주역이네 집</h3>',
                    '</div>'
                ].join('')
            }));
            infowindows[0].open(map, markers[0]);
        };
        initMap();
        

        for(let i=0; i<markers.length; i++){
            naver.maps.Event.addListener(markers[i], "click", function(e) {
                if (infowindows[i].getMap()) {
                    infowindows[i].close();
                } else {
                    infowindows[i].open(map, markers[i]);
                }
            });
        }
    }, []);

    //지도 사이즈 관련 스타일
    const mapStyle = {
        width: "90%",
        height: "600px",
    };



    return (
        <React.Fragment>
            <div id="map" style={mapStyle}></div>
        </React.Fragment>
    );
};

export default MapTest;