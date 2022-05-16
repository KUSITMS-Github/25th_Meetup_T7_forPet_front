import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { postApi } from '../../api';
import { ReactComponent as LikeIcon} from '../../assets/Like-icon.svg';
import { ReactComponent as LikeFullIcon} from '../../assets/Like-icon-full.svg';


const PediaOneComment = ({ comment }: any) => {
    console.log(comment)
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
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px'}}>
                        {/* 프로필사진 */}
                    <img src={comment.imageUrl}
                        style={{width: '30px', height: '30px', borderRadius: '20px'}} />
                    <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left', marginLeft: '5px'}}>
                        <div style={{fontSize: '14px', color: Colors.green5}}>{comment.tag}</div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'end'}}>
                            <div style={{fontSize: '18px', fontWeight: 'bold'}} className='writer'>{comment.nickName}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{marginLeft: '30px'}}>{comment.comment}</div>
            <div style={{display: 'flex', flexDirection: 'row', margin: '5px 0'}}>
                <div style={{fontSize: '12px', color: Colors.gray1, marginLeft: '30px'}}>{comment.createDate}</div>
                <div 
                    style={{marginLeft: '20px'}}
                    onClick={() => clickCommentCnt(comment.id)}>
                    <LikeIcon style={{width: '18px', height: '18px', marginRight: '5px'}}/>
                    {comment.likes}
                </div>
            </div>
        </Answer>
    )
}

export default PediaOneComment;

const Answer = styled.div`
    text-align: left;
`