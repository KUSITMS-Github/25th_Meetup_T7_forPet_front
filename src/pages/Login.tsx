import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Colors } from '../styles/ui';
import { setHeader } from "../api";


const Login = () => {
    
    const loginHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            }
        }
        const redirectURL = 'http://172.30.1.9:8080/oauth2/redirect'
        await axios.get(
            process.env.REACT_APP_BACK_BASE_URL + `/oauth2/authorize/kakao?redirect_uri=`+ redirectURL,
            config
        )
            .then(({ status, data }) => {
                console.log(status, data);
                if (status === 200 || status === 201) {
                    setHeader(data.body.data.token);
                }
            })
            .catch((e) => {
                console.log(e);
            })
    }

    return (
        <>
        <div>Login page</div>
        <button onClick={(e) => loginHandler(e)}>로그인하기</button>
        <a href='http://172.30.1.9:8080/oauth2/authorize/kakao?redirect_uri=http://localhost:3000/oauth2/redirect' >
            카카카카카
        </a>
        </>
    );
};

export default Login;
