import styled from '@emotion/styled';
import { Colors } from '../styles/ui';

const Home = () => {
    return (
        <div>
            <HomeBanner>
                <p className='title'>for Pet</p>
                <p className='subtitle'>
                    당신의 반려견을 위한 완벽한 지도
                </p>
            </HomeBanner>

            <HomeMaps>
                <h5>Forpet Map</h5>
                <div className='home-map'>
                    <div style={{width: '500px'}}>이미지</div>
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
                    <div>
                        <p className='title'>온라인 지도</p>
                        <p className='subtitle'>
                            반려생활에 꼭 필요한 플랫폼을<br />
                            보기 쉽게 모아봤어요!
                        </p>
                        <p className='intro'>건강하개, 영양있개, 쇼핑하개, 지식쌓개, 특별하개, 봉사하개, 입양하개</p>
                    </div>
                    <div style={{width: '500px'}}>이미지</div>
                </div>
            </HomeMaps>

            <div>
                <p>우리 동네 커뮤니티</p>
                <p>동네 사람들과 같이 산책, 나눔, 강아지 자랑 할 수 있어요!</p>
                <p>퍼펫트 백과</p>
                <p>반려인부터 예비 반려인까지 자유롭게 Q&#38;A 를 공유할 수 있어요!</p>

            </div>

        </div>
    );
};

export default Home;

const HomeBanner = styled.div`
    margin: 30vh 0;

    .title {
        font-size: 32px;
        font-weight: bold;
    }

    .subtitle {
        font-size: 28px;
    }
`;

const HomeMaps = styled.div`
    background-color: ${Colors.green1};
    text-align: center;
    padding: 10px 0 40px 0;

    h5 {
        font-size: 28px;
        font-weight: bold;
    }
    
    .home-map {
        display: flex;
        flex-direction: row;
        text-align: left;
        justify-content: center;
    }

    .title {
        font-size: 28px;
        font-weight: bold;
    }

    .subtitle { 
        font-size: 20px;
    }
    
    .intro {
        font-size: 16px;
        color: ${Colors.gray1};
    }
`;


