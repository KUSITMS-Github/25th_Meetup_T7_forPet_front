import React, { useEffect, useState } from "react";
import styled from '@emotion/styled';
import { Colors } from '../styles/ui';

interface Props {
    item: any;
  }

const OfflineMapListItem = ({ item }: Props) => {

    return(
        <ItemBox>
            <img src='/offlineMap/item_img1.png' alt=''/>
            <Section>
                <span className='name'>{item.name}</span>
                <span className='category'>{item.category}</span>
            </Section>
            <div className='review'>
                <span>{item.starAvg}</span>
                <span>{item.reviewCnt}</span>
            </div>
        </ItemBox>
    );
};

export default OfflineMapListItem;

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .name{
        font-family: 'NotoSans';
        font-weight: 500;
        font-size: 24px;
        color: ${Colors.black};
    }

    .category{
        font-family: 'NotoSans';
        font-weight: 500;
        font-size: 16px;
        color: ${Colors.gray2};
    }

`;

const Section = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;

`;