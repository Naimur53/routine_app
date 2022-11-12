import { Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react';

const EditProfileLayout = ({ title, Element }) => {
    const [edit, setEdit] = useState({ loading: false, status: false });
    const [updatable, setUpdatable] = useState({ click: false, disabled: true })
    // children.props = { edit, setEdit }
    const handleUpdate = () => {
        setEdit({ status: true, loading: true })
        setUpdatable({ click: true, disabled: true })
    }
    return (
        <div className='py-5'>
            <div className='flex justify-between'>
                <h2 className='text-xl'>{title}</h2>
                <div>
                    {
                        edit.loading ? <CircularProgress></CircularProgress>
                            :
                            edit.status ? <div className='flex gap-4'>
                                <Button variant='contained' onClick={() => handleUpdate()} disabled={updatable.disabled} >Update</Button>
                                <Button variant='outlined' onClick={() => setEdit({ loading: false, status: false })}>Cancel</Button>
                            </div> : <Button onClick={() => setEdit({ loading: false, status: true })}>edit</Button>
                    }

                </div>
            </div>
            <div className='mt-5'>
                <Element edit={edit} setEdit={setEdit} updatable={updatable} setUpdatable={setUpdatable} />

            </div>

        </div>
    );
};

export default EditProfileLayout;