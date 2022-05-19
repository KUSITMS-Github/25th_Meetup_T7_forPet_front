import styled from '@emotion/styled';
import { Colors } from '../styles/ui';
import { useState } from 'react';

import Background from '../assets/Login-background.svg';
import ProfileImg from '../assets/Login-profile.svg';
import Picture from '../assets/Login-picture.svg';

const LoginForpet = () => {
    const [profile, setProfile] = useState<File>();
    const [nickname, setNickname] = useState<string>();
    const [phoneNum, setPhoneNum] = useState<string>();
    
    const reader = new FileReader();

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files![0]);
        setProfile(e.target.files![0]);
    }

    return (
        <>
        <img src={Background} style={{height:'calc(100vh - 74px)'}} />
        <Box>
            <Title style={{padding: '11px 0px 0px 30px'}}>
                <span className='logo'>forPet</span>
                <span className='title'>&nbsp;&nbsp;회원가입</span>
            </Title>
            <Section>
                <img src={ProfileImg} width="137" height="137" style={{marginTop: '23px'}}/>
                <label htmlFor='input-profile'>
                    <img src={Picture} width="49" height="49" style={{position: 'absolute', top: '185px', left: '52%'}}/>
                </label>
                <input type='file' id='input-profile' onChange={(e) => onFileChange(e)} style={{display:'none'}}/>
                

                <InputSection>
                    <span className='sub-title'>닉네임(필수)</span>
                    <input
                    className='nicknameBar'
                    placeholder='닉네임 입력'
                        onChange={(
                            e: React.ChangeEvent<HTMLInputElement>,
                        ): void => setNickname(e.target.value)}
                        value={nickname}
                    ></input>
                </InputSection>

                <Title style={{paddingTop: '20px'}}>
                    <span className='text-bold'>동물카드, 동네 인증</span>
                    <span className='regular'>으로 페펫트 커뮤니티를 즐겨보시개 !</span>
                    <div className='underline' style={{position: 'absolute', top: '330px', left: '31%'}}/>
                </Title>
                
                <InputSection style={{paddingTop: '9px'}}>
                    <span className='sub-title'>휴대폰 인증(선택)</span>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <input
                        className='certifyBar'
                        placeholder='휴대폰 번호 (- 없이)'
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ): void => setPhoneNum(e.target.value)}
                            value={phoneNum}
                        ></input>
                        <div className='btn-certify'>번호 입력</div>
                    </div>
                </InputSection>
                
                <InputSection>
                    <span className='sub-title'>동물카드 인증(선택)</span>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <input
                        className='certifyBar'
                        placeholder='동물카드 사진'
                        ></input>
                        <div className='btn-certify'>인증하기</div>
                    </div>
                </InputSection>

                <InputSection>
                    <span className='sub-title'>내 동네 인증(선택)</span>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <input
                        className='certifyBar'
                        placeholder='내 동네'
                        ></input>
                        <div className='btn-certify'>현재 위치로 찾기</div>
                    </div>
                </InputSection>


                <div className='btn-complete'>회원가입 완료</div>
            </Section>
        </Box>
        </>
    );
};

export default LoginForpet;

const Box = styled.div`
    position: absolute;
    top: calc(5vh + 74px);
    left: 17%;

    width: 66%;
    height: 600px;

    background: ${Colors.white};
    box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
`;

const Title = styled. div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-start;

    font-family: 'NotoSans';
    color: ${Colors.black};

    .logo{
        font-family: 'Baloo';
        font-weight: 400;
        font-size: 34px;
    }

    .title{
        font-weight: 500;
        font-size: 25px;
    }

    .text-bold{
        font-weight: 700;
        font-size: 14px;
        z-index: 1;
    }

    .regular{
        font-weight: 500;
        font-size: 14px;
        z-index: 1;
    }

    .underline{
        width: 387px;
        height: 9px;

        background: ${Colors.yellow2};
        opacity: 0.5;
        border-radius: 25px;
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .btn-complete{
        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 128px;
        height: 32px;
        margin-top: 20px;

        background: ${Colors.green3};
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
        border-radius: 20px;

        font-family: 'NotoSans';
        font-weight: 700;
        font-size: 14px;
        color: ${Colors.white};
    }
`;

const InputSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: flex-start;

    margin-top: 9px;

    .sub-title{
        font-family: 'NotoSans';
        font-weight: 500;
        font-size: 8px;
        color: ${Colors.gray2};

        margin-bottom: 4px;
    }
    .nicknameBar{
        width: 293px;
        height: 43px;
        padding-left: 12px;
        background: ${Colors.gray3};
        border-radius: 6px;
        border: none;
    }

    .certifyBar{
        width: 187px;
        height: 26px;

        border: none;
        border-bottom: 1px solid ${Colors.gray2};
    }

    .btn-certify{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 89px;
        height: 26px;

        margin-left: 14px;

        box-sizing: border-box;
        border: 1px solid ${Colors.black};
        border-radius: 5px;

        font-family: 'NotoSans';
        font-weight: 500;
        font-size: 10px;
        color: ${Colors.black};
    }

`;