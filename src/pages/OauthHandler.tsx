import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
 

const OauthHandler = () => {
    let token;
    
    useEffect(() => {
        token = new URL(window.location.href).searchParams.get("token");
        console.log('token', token);
        console.log(window.location.href);
    }, [])

    useEffect(() => {
        // axios로 token 보내면 signup 여부 반환
        // signup = true -> 서비스
        // signup = false -> 회원가입(정보등록)
        

    }, [token])


    return (
        <>

        </>
    )
}

export default OauthHandler;