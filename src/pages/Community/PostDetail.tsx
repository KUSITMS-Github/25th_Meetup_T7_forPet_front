import React, { useEffect, useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../../styles/ui';
import { useParams, Link } from "react-router-dom";
import { getApi } from '../../api';
import { ImageModal } from '../../components/community';

const dump = {
    "postId": 2,
    "userId": 1,
    "title": "testTitle",
    "content": "testContent",
    "date": "2022-05-13T17:04:09.750795",
    "thumbsUpCnt": 0,
    "imageUrlList": [
        "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/a561f68a-14a5-445d-aa43-3d435d86e04b.png", 
        "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/a7f10556-c8d6-4f6a-8ad1-34e9500daf0c.png",
        "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/a561f68a-14a5-445d-aa43-3d435d86e04b.png", 
        "https://kusitms-forpet.s3.ap-northeast-2.amazonaws.com/a7f10556-c8d6-4f6a-8ad1-34e9500daf0c.png"
    ],
    "category": "meeting"
};

const PostDetail = () => {
    const params = useParams();

    const [postData, setPostData] = useState(dump);
    const [postCategory, setPostCategory] = useState<string>();

    const [modal, setModal] = useState<boolean>(false);
    const [imageSource, setImageSource] = useState<any>();

    useEffect(() => {
        // 커뮤니티 글 상세 get API
        const getPost = async () => {
            await getApi(
                {},
                `/community/${params.id}`
            )
                .then(({ status, data }) => {
                    console.log(status, data);
                    if (status === 200) {
                        setPostData(data.body.data.data);
                        setPostCategory(data.body.data.data.category)
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        getPost();

        switch(postData.category) {
            case 'all':
                setPostCategory('전체');
                break;
            case 'meet':
                setPostCategory('모임');
                break;
            case 'share':
                setPostCategory('나눔');
                break;
            case 'boast':
                setPostCategory('자랑');
                break;
            default:
                setPostCategory('전체');
        }
    }, [])

    const onClickImage = (img: any) => {
        setImageSource(img);
        setModal(!modal);
    }
    
    const onClickImageModal = useCallback(() => {
        setModal(!modal);
    }, [modal]);


    return (
        <Wrapper>
            <PostWrapper>
                <Post>
                    <UpperSection>
                        <div className='upper'>
                            <div className='category'>
                                {postCategory}
                            </div>
                            <div className='title'>{postData.title}</div>
                            <div className='userId'>{postData.userId}</div>
                        </div>
                        <div className='date'>{postData.date}</div>
                    </UpperSection>
                    <hr
                        style={{
                            color: `${Colors.gray1}`,
                            height: 1,
                            width: '100%'
                        }}
                    />
                    <div className='content'>{postData.content}</div>
                    <ImageSection>
                    {
                        postData.imageUrlList &&
                        postData.imageUrlList.map((img: string, i: number) => (
                            <img src={img} 
                            onClick={() => onClickImage(img)}
                            />
                        ))
                    }
                    </ImageSection>
                    <div className='cnts'>
                        <div className='cnt'>좋아요 수{postData.thumbsUpCnt}</div>
                        <div className='cnt'>스크랩 수</div>
                    </div>
                </Post>


            </PostWrapper>
            <Link to='/all' style={{textDecoration: 'none'}}>
                <div className='back-list'>{postCategory} 글 목록</div>
            </Link>

            {modal && <ImageModal imgSrc={imageSource} onClickImageModal={onClickImageModal} />}
        </Wrapper>
    );
};

export default PostDetail;

const Wrapper = styled.div`
    margin: 0 80px;

    .back-list {
        text-align: left;
        color: ${Colors.black}
    }
`

const PostWrapper = styled.div`
    background-color: ${Colors.white};
    margin: 20px 0;
`

const Post = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    .content {
        margin-right: auto;
    }

    img {
        width: 400px;
        height: 400px;
        margin: 0 10px;
    }

    .cnts {
        display: flex;
        flex-direction: row;
        margin-left: auto;
    }

    .cnt {
        margin: 0 5px;
    }
`

const ImageSection = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    
    overflow-x: scroll;
    overflow-y: hidden;
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
`

const UpperSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
    width: 100%;
    margin-bottom: 10px;

    .upper {
        display: flex;
        flex-direction: column;
    }

    .date {
        font-size: 12px;
    }
`