import { Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import AdbIcon from '@mui/icons-material/Adb';

const Logo = () => {
    return (
        <NavLink to='/' className='flex items-center'>
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    // display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    textDecoration: 'none',
                }}
            >
                LOGO
            </Typography>
        </NavLink>
    )
}
export default Logo;
