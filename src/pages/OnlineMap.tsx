import react, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../styles/ui';
import { motion, AnimatePresence } from "framer-motion";

import MapImg from '../assets/MapTest.svg';
import { Motion } from 'react-motion';

const OnlineMap = () => {
    const unit = 100;
    const [dir, setDir] = useState(true);


    const mapVariants = {
        entry: ({
            x: 0
        }),
        center:{
            x: dir ? (-1 * unit): (unit)
        },
        exit: ({
            x: 0
        }),

    }

    return (
        <div>
            <button onClick={() => setDir(!dir)}>방향전환</button>
            <AnimatePresence>
                    <motion.img
                        variants={mapVariants}
                        src={MapImg}
                        initial="entry"
                        animate="center"
                        exit="exit"
                    />
            </AnimatePresence>
        </div>
    );
};

export default OnlineMap;
