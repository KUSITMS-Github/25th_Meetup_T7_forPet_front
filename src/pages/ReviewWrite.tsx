import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

interface Props {
    state: {
        address: string,
        category: string,
        id: number,
        latitude: number,
        longitude: number,
        name: string,
        reviewCnt: number,
        starAvg: number
    };
}

const ReviewWrite = () => {

    const location = useLocation() as Props;
    console.log('리뷰: '+ location.state );
    
    return (
        <div>
            {location.state.name}
        

            
        </div>
    );
};

export default ReviewWrite;