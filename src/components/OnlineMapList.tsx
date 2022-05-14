import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Colors } from '../styles/ui';

// 각 카테고리마다 - 이름, 이미지, 설명, 링크
let serviceList = {
    // 반려인 마을 
    'health': [
        {
            'name': '티티케어',
            'exp': 'sdf',
            'link': 'http',
        },
        {
            'name': '펫트라슈',
            'exp': 'sdf',
            'link': 'http',
        },
        {
            'name': '라이펫',
            'exp': 'sdf',
            'link': 'http',
        },
    ],
    'young': [
        {
            'name': '플라잉퍼피',
            'exp': 'sdf',
            'link': 'http',
        },
        {
            'name': '펄PEL',
            'exp': 'sdf',
            'link': 'http',
        },
        {
            'name': '샐러드펫',
            'exp': 'sdf',
            'link': 'http',
        },
    ],
    'shop': [
        {
            'name': '콤빌리지',
            'exp': 'sdf',
            'link': 'http',
        },
        {
            'name': '우프바이베럴즈',
            'exp': 'sdf',
            'link': 'http',
        },
        {
            'name': '펫치즈',
            'exp': 'sdf',
            'link': 'http',
        },
    ],
    'special': [
        {
            'name': '21그램',
            'exp': 'sdf',
            'link': 'http',
        },
        {
            'name': '펫트너',
            'exp': 'sdf',
            'link': 'http',
        },
        {
            'name': '펫시터',
            'exp': 'sdf',
            'link': 'http',
        },
        {
            'name': '페보릿',
            'exp': 'sdf',
            'link': 'http',
        },
    ],
    'knowledge': [
        {
            'name': '비마이펫라이프',
            'exp': 'sdf',
            'link': 'http',
        },
        {
            'name': '도그tv',
            'exp': 'sdf',
            'link': 'http',
        },
        {
            'name': '도그마스터',
            'exp': 'sdf',
            'link': 'http',
        },
    ],
    // 예비 반려인 마을
    'volunteer': [
        {
            'name': '러퍼월드',
            'exp': 'sdf',
            'link': 'http',
        },
        {
            'name': '유기견 자원봉사',
            'exp': 'sdf',
            'link': 'http',
        },
    ],
    'adopt': [
        {
            'name': '라이프플러스펫',
            'exp': 'sdf',
            'link': 'http',
        },
        {
            'name': '포인핸드',
            'exp': 'sdf',
            'link': 'http',
        },
        {
            'name': '유기견 보호센터',
            'exp': 'sdf',
            'link': 'http',
        },
    ],
};


const OneComp = ({ service }: string | any) => {
    return (
        <OneWrapper
            href={'https://cafe.naver.com/kusitms'}  // {service.link}
            target='_blank'
            style={{ textDecoration: 'none' }}>
            <div>이미지</div>
            <div className='contents'>
                <div>{service.name}</div>
                <div>{service.exp}</div>
            </div>
        </OneWrapper>
    )
}

const OnlineMapList = ({ pick }: any | string) => {
    // health, young, shop, special, knowledge, volunteer, adopt
    const [category, setCategory] = useState<string>();
    const [pickService, setPickService] = useState<Service[]>();

    interface Service {
        name: string,
        exp: string,
        link: string
    }

    useEffect(() => {
        setCategory(pick);
        switch (pick) {
            case '건강하개':
                setPickService(serviceList['health']);
                break;
            case '영양있개':
                setPickService(serviceList['young']);
                break;
            case '쇼핑하개':
                setPickService(serviceList['shop']);
                break;
            case '특별하개':
                setPickService(serviceList['special']);
                break;
            case '지식쌓개':
                setPickService(serviceList['knowledge']);
                break;
            case '봉사하개':
                setPickService(serviceList['volunteer']);
                console.log(pickService)
                break;
            case '입양하개':
                setPickService(serviceList['adopt']);
                break;
            default:
                setPickService(serviceList['health']);
                break;
        }
    }, [pick])


    return (
        <BoxWrapper>
            <div className={
                (pick === '봉사하개' || pick === '입양하개') ?
                    'right-box' : 'left-box'
            }>
                <div className={
                    (pick === '봉사하개' || pick === '입양하개') ?
                        'category-right' : 'category-left'
                }
                    style={{ fontWeight: 'bold' }}
                >{category}</div>
                {
                    pickService &&
                    pickService.map((s: any, i: number) => (
                        <OneComp
                            key={i}
                            service={s}
                        />
                    ))
                }
            </div>
        </BoxWrapper >
    )

}

export default OnlineMapList;

const BoxWrapper = styled.div`
    .right-box {
        background-color: ${Colors.white};
        width: 400px;
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
        border-radius: 15px;

        position: absolute;
        right: 10%;
        z-index: 100;
    }

    .left-box {
        background-color: ${Colors.white};
        width: 400px;
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
        border-radius: 15px;

        position: absolute;
        z-index: 100;
    }

    .category-left {
        width: 100px;
        border-radius: 27px;
        padding: 8px 0;
        background-color: ${Colors.black};
        color: ${Colors.yellow1};
        
        position: relative;
        top: -10px;
    }
    .category-right {
        width: 100px;
        border-radius: 27px;
        padding: 8px 0;
        background-color: ${Colors.black};
        color: ${Colors.green4};
        
        position: relative;
        top: -10px;
    }
`

const OneWrapper = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 300px;
    margin: 10px 0;
    background-color: ${Colors.green1};
    color: black;


    .contents {
        display: flex;
        flex-direction: column;
    }
`

