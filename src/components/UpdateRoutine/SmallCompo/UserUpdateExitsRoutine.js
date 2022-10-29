import { Grid } from '@mui/material';
import React from 'react';
import SingleTab from '../../Home/smallCompo/SingleTab/SingleTab';
import UserUpdateRoutineCard from './UserUpdateRoutineCard';

const UserUpdateExitsRoutine = ({ data, setData }) => {
    const week = [
        "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
    ];
    const [selectValue, setSelectValue] = React.useState(0);
    const handleChange = (newValue) => {
        setSelectValue(newValue);
    };
    return (
        <div className='mt-5'>
            <Grid container spacing={2}

            >
                <Grid item xs={12} lg={4} >
                    <div
                        className='flex md:flex-col overflow-x-auto pb-4'
                    >
                        {
                            week.map((single, i) => <SingleTab handleChange={handleChange} classes={data.classes} day={single} value={selectValue} key={single} i={i} onClick={handleChange} />)
                        }
                    </div>
                </Grid>

                <Grid item xs={12} lg={8} >
                    <div className='custom_height_preview overflow-y-auto'>
                        {
                            week.map((single, i) => <UserUpdateRoutineCard value={selectValue} key={i} classes={data.classes} day={single} i={i} setData={setData}></UserUpdateRoutineCard>)
                        }
                    </div>
                </Grid>



            </Grid>
        </div>
    );
};

export default UserUpdateExitsRoutine;