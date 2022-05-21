import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { getApi, postApi, setHeader } from '../api';
import { useNavigate } from "react-router-dom";

const OauthHandler = () => {
    let id: any;
    let navigate = useNavigate();           //화면 이동
    
    useEffect(() => {
        
        id = new URL(window.location.href).searchParams.get("id");
        console.log('id', id);
        console.log(window.location.href);

        
    }, []) 
    

    useEffect(() => {
        const login = async () => {

            await getApi(
                {},
                `/auth/signup?id=${id}`
            )
            .then((res) => {
                console.log(res); // 토큰이 넘어올 것임
                const ACCESS_TOKEN = res.data.body.data.token;
                localStorage.setItem("token", ACCESS_TOKEN);    //예시로 로컬에 저장함 
                setHeader(ACCESS_TOKEN);   
                if( res.data.body.data.is_signup == true){
                    navigate("/"); // 토큰 받았았고 회원가입 정보가 있으니 화면 전환시켜줌(메인으로)
                } else {
                    navigate("/loginForpet");
                }
                
            })
            .catch((e) => {
                console.log("소셜로그인 에러", e);
              window.alert("로그인에 실패하였습니다.");
              navigate("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
            });
        }
        login();
        
        //받아온 token으로 setHeader
        // axios로 token 보내면 signup 여부 반환
        // signup = true -> 서비스
        // signup = false -> 회원가입(정보등록)
        
    }, [id])

    return (
        <>
            {/*spinner */}
        </>
    )
}

export default OauthHandler;