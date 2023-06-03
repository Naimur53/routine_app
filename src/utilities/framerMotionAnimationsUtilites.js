export const mainDuration = .5
export const logGoToTopDuration = .2;
export const topBarGrowDuration = .9
export const avatarDelay = topBarGrowDuration;
const menusDelay = topBarGrowDuration

export const homeClassDelay = .4
export const chatRevelDelay = .4
export const mainCompoDelay = menusDelay + 1.4
export const menuContainer = {
    animate: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2, delay: menusDelay },
    },
    initial: {
        opacity: 0,
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
};
export const menuItem = {
    animate: {
        x: 0,
        opacity: 1,
        transition: { type: 'easeOut' }
    },
    initial: {
        opacity: 0,
        x: -250,
    },
};

export const pageTranInit = 'polygon(0 0, 0 0, 0 100%, 0 100%)'
export const pageTranAni = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'