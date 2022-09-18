import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import RoutineClassCards from '../../../ShareComponents/RoutineClassCards/RoutineClassCards';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

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
            className='custom_height overflow-y-auto'
        >
            {value === index && (
                <Box className=' ' sx={{ px: 0, }}>
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
    const SingleTab = ({ info: { day, totalClass, totalHours }, onClick, i, value }) => {

        return (
            <button className='cursor-pointer' onClick={() => handleChange(i)}>
                <div className={`flex flex-col lg:flex-row justify-center lg:justify-start items-center py-3 px-2 gap-4 rounded-2xl text-main-dark ${value === i && " active_class_tab"}`}>
                    <div className={`border-b lg:border-b-0 lg:border-r w-[80px] h-[50px] flex justify-center items-center  border-content `}>
                        <h1 className='text-2xl  font-medium'>{day.slice(0, 3)}</h1>
                    </div>
                    <div className='text-left'>
                        <h2 className='text-main-dark '> {totalClass} Classes</h2>
                        <p className='text-content '> <span className='hidden lg:inline-block'> Total hours</span> {totalHours} <span className='inline-block lg:hidden'> Hours</span></p>
                    </div>
                </div>
            </button>
        )
    }
    return (
        <div className=''>
            <Grid container spacing={2}

            >
                <Grid item xs={12} lg={6} >
                    <Box
                        className='flex lg:flex-col lg:custom_height overflow-y-auto'
                    >
                        {
                            week.map((single, i) => <SingleTab value={value} key={single} i={i} onClick={handleChange} component={SingleTab} info={{ day: single, totalClass: 10, totalHours: 5.4 }} {...a11yProps(i)} />)
                        }
                    </Box>
                </Grid>

                <Grid item xs={12} lg={6} >
                    <TabPanel value={value} index={0}>
                        <RoutineClassCards></RoutineClassCards>
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