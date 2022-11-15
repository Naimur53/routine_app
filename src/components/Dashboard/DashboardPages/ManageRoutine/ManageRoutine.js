import { Grid, Skeleton } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DemoCard from '../../../SearchRoutine/DemoCard/DemoCard';
import SkeletonDemoCard from '../../../ShareComponents/SkeletonDemoCard/SkeletonDemoCard';

const ManageRoutine = () => {
    const [allRoutine, setAllRoutine] = useState([]);
    const [getLoading, setGetLoading] = useState(true);
    useEffect(() => {

        axios
            .get(`https://shielded-dusk-65695.herokuapp.com/routine`)
            .then((res) => {
                setAllRoutine(res.data);
                setGetLoading(false);
            });
    }, []);
    return (
        <div>
            <div className="text-center">

                <>
                    <h1 className="text-xl font-bold text-ellipsis text-slate-600">
                        All Routines
                    </h1>
                </>

            </div>
            <Grid
                container
                spacing={4}
                sx={{
                    marginTop: "10px",
                    justifyContent: "center",
                    display: "flex",
                }}
            >
                {(getLoading ? Array.from(new Array(8)) : allRoutine).map(
                    (single, i) => (
                        <Grid item lg={3} md={6} xs={12} key={i}>
                            {single ? (
                                <>
                                    <DemoCard item={single} setData={setAllRoutine} admin updateAble={true} i={i}></DemoCard>
                                </>
                            ) : (
                                <>
                                    <SkeletonDemoCard></SkeletonDemoCard>
                                </>
                            )}
                        </Grid>
                    )
                )}
            </Grid>
        </div>
    );
};

export default ManageRoutine;