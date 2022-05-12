import styled from '@emotion/styled';
import { Colors } from '../styles/ui';

const OfflineList = () => {

    return(
        <Info>
        </Info>
    );

};

export default OfflineList;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: flex-start;

    width: 39%;
    background-color: ${Colors.green1};
`;