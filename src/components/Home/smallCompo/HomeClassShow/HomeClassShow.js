import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import RoutineClassCards from '../../../ShareComponents/RoutineClassCards/RoutineClassCards';
import TabPanel from '../TabPanel/TabPanel';
import SingleTab from '../SingleTab/SingleTab';


const HomeClassShow = ({ data }) => {
    // const week = ;
    const [value, setValue] = React.useState(0);
    const [week, setWeek] = React.useState([]);

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        const todayNum = new Date().getDay()
        const normalWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const newWeek = normalWeek.filter(single => single !== normalWeek[todayNum])
        setWeek(pre => [normalWeek[todayNum], ...newWeek])
        setValue(1);
    }, [])
    return (
        <div className=''>
            <Grid container spacing={2}

            >
                <Grid item xs={12} lg={6} >
                    <Box
                        className='flex lg:flex-col lg:custom_height_for_classes overflow-y-auto pb-0 md:pb-0 px-2'
                    >
                        {
                            week.map((single, i) => <SingleTab
                                day={single}
                                handleChange={handleChange} value={value} key={single} i={i} onClick={handleChange} classes={data.classes} />)
                        }
                    </Box>
                </Grid>

                <Grid item xs={12} lg={6} >
                    <div className='custom_height_for_classes  overflow-y-auto'>

                        {
                            week.map((single, i) => <TabPanel key={i} value={value} index={i}>
                                <RoutineClassCards day={single} data={data.classes}></RoutineClassCards>
                            </TabPanel>)
                        }
                    </div>
                </Grid>



            </Grid>
        </div>
    );
};


export default HomeClassShow;
