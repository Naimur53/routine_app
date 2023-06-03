import React from 'react';
import { motion } from 'framer-motion'
const ScaleEffect = ({ inScale = 0.5, aniScale = 1, condition = true, duration = .5, delay = 0, children }) => {
    const init = { scale: inScale, opacity: 0 }
    const ani = { scale: aniScale, opacity: 1 }
    return (
        <motion.div animate={condition ? ani : init} initial={init} transition={{ duration, delay }}>
            {children}
        </motion.div>
    );
};

export default ScaleEffect;