import { useState } from "react";
import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';

interface Props {
    item: any;
}

const OfflineMapInfo = ({ item }: Props) => {

    return(
        <Section>
            <span>{item.name}</span>
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