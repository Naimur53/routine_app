import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SingleTab from '../../../../Home/smallCompo/SingleTab/SingleTab';
import TabPanel from '../../../../Home/smallCompo/TabPanel/TabPanel';
import RoutineClassCards from '../../../../ShareComponents/RoutineClassCards/RoutineClassCards';
import UpdateRoutineCard from './UpdateRoutineCard/UpdateRoutineCard';

const PreviewClasses = ({ classes, errors, watch, setMainData, register, mainData, setActiveStep, setValue, trigger }) => {
    const week = [
        "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
    ];
    const [selectValue, setSelectValue] = React.useState(0);
    const handleChange = (newValue) => {
        setSelectValue(newValue);
    };

    return (
        <div className=''>
            <Grid container spacing={2}

            >
                <Grid item xs={12} lg={4} >
                    <Box
                        className='flex lg:flex-col lg:custom_height_preview overflow-y-auto pb-4'
                    >
                        {
                            week.map((single, i) => <SingleTab handleChange={handleChange} value={selectValue} key={single} i={i} onClick={handleChange} info={{ day: single, totalClass: 10, totalHours: 5.4 }} />)
                        }
                    </Box>
                </Grid>

                <Grid item xs={12} lg={8} >
                    <div className='custom_height_preview overflow-y-auto'>
                        {
                            week.map((single, i) => <UpdateRoutineCard value={selectValue} classes={classes} day={single} i={i} errors={errors}
                                watch={watch}
                                setMainData={setMainData}
                                register={register}
                                mainData={mainData}
                                setValue={setValue}
                                trigger={trigger}
                                setActiveStep={setActiveStep}></UpdateRoutineCard>)
                        }
                    </div>
                </Grid>



            </Grid>
        </div>
    );
};

export default PreviewClasses;