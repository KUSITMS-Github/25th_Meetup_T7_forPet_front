import styled from '@emotion/styled';
import { Colors } from '../styles/ui';
import { postApi } from '../api';

const PediaOneComment = ({ comment }: any) => {
    // 댓글좋아요 Post API
    const clickCommentCnt = async (commentId: number) => {
        console.log(commentId);
        await postApi(
            {},
            `/qnaBoard/comment/${commentId}/like`
        )
            .then(({ status, data }) => {
                console.log("POST 댓글좋아요 누름", status, data);
                if (status === 200) {
                    // window.location.reload();
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <Answer>
            <div className='writer-sec'>
                <div>이미지</div>
                <div className='writer-sec-name'>
                    <div className='writer'>{comment.nickName}</div>
                    <div>{comment.tag}</div>
                </div>
            </div>
            <div className='answer'>{comment.comment}</div>
            <div className='a-date'>{comment.createDate}</div>
            <div className='a-good-cnt' onClick={() => clickCommentCnt(comment.id)}>댓글 추천수{comment.likes}</div>
        </Answer>
    )
}

export default PediaOneComment;

const Answer = styled.div`
    text-align: left;

    .answer {
        margin-left: 30px;
    }

    .a-good-cnt {
        margin-left: 30px;
    }
`