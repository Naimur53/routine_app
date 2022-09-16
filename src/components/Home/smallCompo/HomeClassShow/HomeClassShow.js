import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';


const week = [
    "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
];
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box className='bg-red-300' sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}



const HomeClassShow = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const SingleTab = ({ info: { day, totalClass, totalHours }, onClick, i }) => {

        return (
            <button className='cursor-pointer' onClick={() => handleChange(i)}>
                <div className='block md:flex px-2 py-5 gap-4'>
                    <div className='border-r pr-5 border-gray-700'>
                        <h1 className='text-xl text-gray-600'>{day.slice(0, 3)}</h1>
                    </div>
                    <div>
                        <h2>{totalClass} class</h2>
                        <p>total hours {totalHours}</p>

                    </div>
                </div>
            </button>
        )
    }
    return (
        <div className='mt-5'>
            <Grid container spacing={4}

            >
                <Grid item xs={4} >
                    <Box
                        className='flex flex-col'
                    >
                        {
                            week.map((single, i) => <SingleTab key={single} i={i} onClick={handleChange} component={SingleTab} info={{ day: single, totalClass: 10, totalHours: 5.4 }} {...a11yProps(i)} />)
                        }
                    </Box>
                </Grid>

                <Grid item xs={8} >
                    <TabPanel value={value} index={0}>
                        <div className='w-full  h-full bg-red-300'>
                            d

                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                    </TabPanel>

                </Grid>



            </Grid>
        </div>
    );
}

export default HomeClassShow;