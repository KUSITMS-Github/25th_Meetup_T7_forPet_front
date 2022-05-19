import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Colors } from '../styles/ui';
import { setHeader } from "../api";

import LoginBackground from '../assets/Login-background.svg';
import { ReactComponent as LoginLogo } from '../assets/Login-logo.svg';


const Login = () => {
    
    //카카오 로그인
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
        <img src={LoginBackground} style={{height:'calc(100vh - 72px)', overflow:'hidden'}} />
            {/* 로그인 */}
            <Section>
                <LoginLogo />
                <span className="notice">로그인하고 퍼펫트를 이용해보세요! <br />필요한 시간은 단, 3초!</span>
                <button className="btn-login" style={{ marginTop:'45px' }} onClick={(e) => loginHandler(e)} >카카오 로그인</button>

            </Section>
        </>
    );
};

export default Login;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: calc(19vh + 74px);
    left: 26%;

    .notice{
        font-family: 'NotoSans';
        font-weight: 500;
        font-size: 25px;

        color: ${Colors.black};
    }

    .btn-login{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 47vw;
        height: 81px;
        background: ${Colors.green3};
        box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.25);
        border-radius: 51px;
        border: none;

        font-family: 'NotoSans';
        font-weight: 700;
        font-size: 25px;
        color: ${Colors.white};
    }

`;