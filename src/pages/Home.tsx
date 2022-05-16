import styled from '@emotion/styled';
import { Colors } from '../styles/ui';
import { ReactComponent as OfflineMap } from '../assets/Home-offlinemap.svg';
import { ReactComponent as OnlineMap } from '../assets/Home-onlinemap.svg';
import OnlineMapImg from '../assets/Home-onlinemap.png';
import { ReactComponent as MapBackground } from '../assets/Home-background.svg';
import { ReactComponent as LowSection } from '../assets/Home-LowerSection.svg';

const Home = () => {
    return (
        <Wrapper>
            <HomeBanner>
                <p className='subtitle'
                    style={{ fontSize: '36px', textAlign: 'left', marginLeft: '70px' }}>
                    당신의 반려견을 위한 <br />완벽한 지도
                </p>
            </HomeBanner>
            <div style={{height: '800px'}}>
                <MapBackground style={{ width: '100vw', position: 'relative' }} />
                <HomeMaps>
                    <div className='home-map'>
                        <OfflineMap style={{ width: '300px', height: '300px'}} />
                        <div>
                            <p className='title'>오프라인 지도</p>
                            <p className='subtitle'>
                                내 근처에서<br />
                                반려견을 위한 공간을 찾아보세요!
                            </p>
                            <p className='intro'>식당&#38;카페, 공원, 병원, 미용, 병원, 보호소, 유치원</p>
                        </div>
                    </div>

                    <div className='home-map'>
                        <img src={OnlineMapImg} style={{ width: '300px', height: '300px' }} />
                        <div>
                            <p className='title'>온라인 지도</p>
                            <p className='subtitle'>
                                반려생활에 꼭 필요한 플랫폼을<br />
                                보기 쉽게 모아봤어요!
                            </p>
                            <p className='intro'>건강하개, 영양있개, 쇼핑하개, 지식쌓개, 특별하개, 봉사하개, 입양하개</p>
                        </div>
                    </div>
                </HomeMaps>
            </div>
            <div style={{height: '1000px'}}>
                <LowSection style={{backgroundColor: Colors.white, width: '100vw', paddingTop: '50px', position: 'relative' }} />
                <LowComment>
                    <div className='commuity'>
                        <p style={{fontWeight: 'bold', fontSize: '28px'}}>우리 동네 커뮤니티</p>
                        <p style={{fontSize: '24px'}}>동네 사람들과 같이 산책, 나눔, 강아지 자랑 할 수 있어요!</p>
                    </div>
                    <div className='forpet'>
                        <p style={{fontWeight: 'bold', fontSize: '28px'}}>퍼펫트 백과</p>
                        <p style={{fontSize: '24px'}}>반려인부터 예비 반려인까지 자유롭게 Q&#38;A 를 공유할 수 있어요!</p>
                    </div>
                </LowComment>
            </div>
        </Wrapper>
    );
};

export default Home;

const Wrapper = styled.div`
    overflow-x: hidden;
`;

const HomeBanner = styled.div`
    background-color: ${Colors.white};
    padding: 60px 0;
`;

const HomeMaps = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    position: absolute;
    transform: translate(-50%, 0);
    top: 600px;
    left: 55%;
    
    .home-map {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        width: 30vw;
    }

    .title {
        font-size: 28px;
        font-weight: bold;
        text-align: left;
    }

    .subtitle { 
        font-size: 20px;
        text-align: left;
    }
    
    .intro {
        font-size: 16px;
        color: ${Colors.gray1};
        text-align: left;
    }

`;

const LowComment = styled.div`
    position: absolute;
    transform: translate(50%, 0);
    top: 1360px;

    .commuity {
        position: absolute;
        left: 36vw;  // 틀어지면 얘랑...
    }
    
    .forpet {
        position: absolute;
        top: 450px;
        right: -65vw;  // 얘 조정해서 맞추기...
    }

    p {
        width: 800px;
    }
`