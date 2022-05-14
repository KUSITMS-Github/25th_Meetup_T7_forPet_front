import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { Link } from "react-router-dom";

const PreBoard = () => {  // 인증 확인
    // 2가지 모두 인증되었을 경우 커뮤니티로 이동
    // 인증 안되었을 경우 인증창
    return(
        <Wrapper>
            인증이 필요합니다.
        </Wrapper>
    )
}

export default PreBoard;

const Wrapper = styled.div`
    background-color: ${Colors.white}
`