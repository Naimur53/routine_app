import React from 'react';
import { motion } from 'framer-motion'
const GrowEffect = ({ condition = false, duration = 1.5, delay = 0, children, initPath, aniPath, firstTime }) => {

    const init = { clipPath: initPath || (firstTime ? 'none' : 'circle(0.6% at 1% 50%)') }
    const ani = { clipPath: aniPath || 'circle(76.0% at 46% 54%)', }
    return (
        <motion.div

            initial={init}
            animate={condition ? init : ani}
            transition={{ duration, delay, ease: 'easeOut', children: { duration: 9 } }}
            className='h-full'

        >
            {children}
        </motion.div>
    );
};

export default GrowEffect;