import { useState, useCallback } from "react";
import styled from '@emotion/styled';
import { Colors } from '../styles/ui';
import  OfflineMapModal from '../components/OfflineMapModal';

import Item1 from "../assets/offlineMap/item_img1.png"
import { ReactComponent as BookmarkAct } from "../assets/offlineMap/bookmark_act.svg"
import { ReactComponent as BookmarkDeact } from "../assets/offlineMap/bookmark_deact.svg"
import { ReactComponent as StarAvg } from "../assets/offlineMap/StarAvg.svg"

interface Props {
    item: any;
  }

const OfflineMapListItem = ({ item }: Props) => {

    const [bookmark, setBookmark] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);

    const toggleBookmark = () => setBookmark(bookmark => !bookmark);

    //TODO: 모달 중첩 문제 처리
    const onClickToggleModal = useCallback(() => {
        setModal(!modal);
        }, [modal]);

    return(
        <ItemBox>

            {/*장소 이미지*/}
            <img src={Item1} alt='' onClick={onClickToggleModal}/>

            {/*장소 이름, 카테고리*/}
            <Section>
                <div className="text" onClick={onClickToggleModal}>
                <span style={{fontSize: '17px'}}>{item.name}</span>
                <span style={{fontSize: '11px', marginLeft: '8px', color: '${Colors.gray2}'}}>{item.category}</span>
                </div>
                <div className='bookmark'>
                {bookmark ? 
                    <BookmarkAct onClick={toggleBookmark}/> 
                    : <BookmarkDeact onClick={toggleBookmark}/> }
                </div>
            </Section>

            {/*장소 리뷰 정보*/}
            <Section style={{marginLeft:'10px'}} onClick={onClickToggleModal}>
                <StarAvg />
                <span style={{fontSize: '14px', marginLeft: '8px'}}>{item.starAvg}/</span>
                <span style={{fontSize: '11px'}}>&nbsp;리뷰 {item.reviewCnt}</span>
            </Section>

            {/*리뷰 정보 팝업*/}
            {modal && ( <OfflineMapModal name={item.name} onClickToggleModal={onClickToggleModal} /> )}
        </ItemBox>
    );
};

export default OfflineMapListItem;

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 16px;    
`;

const Section = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-start;

    margin-top: 8px;

    font-family: 'NotoSans';
    font-weight: 500;
    color: ${Colors.black};

    .text {
        float: left;
        width: 90%;
    }

    .bookmark{
        float: right;
        width: 10%;
    }
`;