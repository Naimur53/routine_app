import React from 'react';
import { useEffect, useState } from 'react';
import TabPanel from '../../../../../Home/smallCompo/TabPanel/TabPanel';
import RoutineClassCard from '../../../../../ShareComponents/RoutineClassCards/RoutineClassCard';
import ClassUpdateModal from '../../ClassUpdateModal/ClassUpdateModal';
const UpdateRoutineCard = ({ day, value, i, classes, errors, watch, setValue, setMainData, register, mainData, setActiveStep, trigger }) => {
    // const filter=data.filter(single=>single)
    const [filterData, setFilterData] = useState([])
    useEffect(() => {
        let createData = [];
        console.log({ classes });
        classes?.forEach((element, index) => {

            if (element.day === day) {
                const select = { ...element, index: index };
                console.log({ select })
                createData = [...createData, select]

            }
        });
        setFilterData(createData)
        console.log({ createData });
    }, [day, classes])

    return (
        <div>
            <TabPanel value={value} index={i}>
                {
                    filterData.map((single, i) => <ClassUpdateModal
                        errors={errors}
                        watch={watch}
                        setValue={setValue}
                        setMainData={setMainData}
                        register={register}
                        mainData={mainData}
                        trigger={trigger}
                        setActiveStep={setActiveStep} classes={classes} {...single}  >
                        <RoutineClassCard {...single} i={i}></RoutineClassCard>
                    </ClassUpdateModal>)
                }

            </TabPanel>

        </div>
    );
};

export default UpdateRoutineCard;