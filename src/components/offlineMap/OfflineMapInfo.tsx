import { useState, useEffect } from "react";
import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { getApi } from '../../api';

interface Props {
    item: any;
}

const OfflineMapInfo = ({ item }: Props) => {
    const [placeId, setPlaceId] = useState<Number>(item.id);
    const [reviewList, setReviewList] = useState<any[]>([]);

    useEffect(() => {
        const getReview =  async () => {
            await getApi(
                {}, `/offline-map/${placeId}/marker/review`)
                .then(({ status, data }) => {
                    console.log(`GET 리뷰 내용`, status, data);
                    if (status === 200) {
                        setReviewList(data.body.data);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        getReview();
      }, []);

    return(
        <Section>
            <span>{item.name}</span>
            <span>{item.category}</span>
            <span>{item.starAvg}/5</span>
            <span>리뷰 {item.reviewCnt}</span>
            {reviewList.map((item, index) => (
                <span>{item.content}</span>
            ))}
        </Section>
    );
};

export default OfflineMapInfo;

const Section = styled.div`
position: absolute;
    top: 70px;
    left: 32.1%;
    z-index: 2;

    width: 27%;
    height: calc(100vh - 70px);
    background-color: ${Colors.white};
  
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
`;