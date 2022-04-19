import { useParams } from "react-router-dom";

const PostDetail = () => {
    const params = useParams();

    return (
        <div>
            post id = {params.id}인 글 불러오기
            
        </div>
    );
};

export default PostDetail;
