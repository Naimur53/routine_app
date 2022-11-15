import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
const CustomTooltip = ({ title, children }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handlePopoverOpen = (event) => {

        setAnchorEl(() => event.currentTarget);
    };

    const handlePopoverClose = () => {

        setAnchorEl(null);

    };


    return (
        <div>
            <div
                // aria-owns={open ? 'mouse-over-popover' : undefined}
                // aria-haspopup="true"
                // onClick={(e) => handleClick(e)}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                {children}
            </div>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={() => setAnchorEl(null)}
                disableRestoreFocus
            >
                <span className='p-1 text-xs bg-black/[.8] text-white inline-block'>{title}</span>
            </Popover>
        </div>
    );
}
export default CustomTooltip;