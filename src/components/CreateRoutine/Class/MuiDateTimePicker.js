
import { Stack, TextField } from '@mui/material'
import { MobileTimePicker, } from '@mui/x-date-pickers';
import { useEffect } from 'react';
const MuiDateTimePicker = ({ setValue, name, errors, label, watch, register, defaultValue }) => {

    useEffect(() => {
        if (defaultValue) {
            setValue(name, defaultValue)
        }
    }, [defaultValue])
    return (
        <Stack spacing={0} sx={{ width: '100%' }}>

            <MobileTimePicker
                label={label}
                value={watch(name) ? watch(name) : null}
                variant='standard'

                onChange={newValue => {
                    setValue(name, newValue.toString())
                }}
                renderInput={params => <TextField variant='standard' color="primary"  {...register(name, {
                    required: true,
                })} {...params} />}

            />
            <div>
                <span className="text-red-700">
                    {
                        watch(name)?.length ? '' : errors[name]?.type === "required" &&
                            `* ${label} is required`

                    }
                </span>
            </div>

        </Stack>
    )
}

export default MuiDateTimePicker;
