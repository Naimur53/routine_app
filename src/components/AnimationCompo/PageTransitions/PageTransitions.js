import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom';
import { pageTranAni, pageTranInit } from '../../../utilities/framerMotionAnimationsUtilites';

const PageTransitions = ({ children, path }) => {
    const location = useLocation()
    const isVisible = location?.pathname.includes(path)
    console.log({ isVisible, path, location });
    const init = { clipPath: pageTranInit, opacity: 0, x: 0 }

    const animate = { clipPath: pageTranAni, opacity: 1, x: 0 }
    return (
        <AnimatePresence>
            {
                isVisible && <motion.div

                    initial={init}
                    animate={animate}
                    exit={init}
                    transition={{ ease: 'anticipate' }}
                >
                    {children}
                </motion.div>
            }
        </AnimatePresence>
    );
};

export default PageTransitions;