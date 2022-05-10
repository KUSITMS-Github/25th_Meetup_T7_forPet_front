import styled from '@emotion/styled';
import { Colors } from '../styles/ui';

const OfflineMapInfo = () => {

    return(
        <Info>
        </Info>
    );

};

export default OfflineMapInfo;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: flex-start;

    width: 39%;
    background-color: ${Colors.green1};
`;