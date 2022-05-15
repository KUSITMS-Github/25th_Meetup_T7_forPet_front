import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getApi } from '../../api';


const PreBoard = () => {  // 인증 확인
    // 2가지 모두 인증되었을 경우 커뮤니티로 이동
    // 인증 안되었을 경우 인증창
    const navigate = useNavigate();
    const [address, setAddress] = useState<Boolean>();
    const [petcard, setPetcard] = useState<Boolean>();

    useEffect(() => {
        const checkAuths = async () => {
            await getApi(
                {},
                `/certify`
            )
                .then(({ status, data }) => {
                    console.log(status, data);
                    console.log(data.body.result.certifiedAddress);
                    if (status === 200) {
                        setAddress(data.body.result.certifiedAddress);
                        setPetcard(data.body.result.certifiedPetCard);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        checkAuths();
    }, []);

    useEffect(() => {
        if (address && petcard) {
            navigate('/all');  // 둘다 인증되면 커뮤니티로 이동
        }
    }, [address, petcard])

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