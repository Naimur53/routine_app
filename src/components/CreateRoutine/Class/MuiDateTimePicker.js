import { Stack, TextField } from "@mui/material";
import { MobileTimePicker } from "@mui/x-date-pickers";
const MuiDateTimePicker = ({
  setValue,
  name,
  errors,
  label,
  watch,
  register,
}) => {
  return (
    <Stack spacing={0} sx={{ width: "100%" }}>
      <MobileTimePicker
        label={label}
        value={watch(name) ? watch(name) : null}
        variant="standard"
        onChange={(newValue) => {
          console.log(newValue.toString());
          setValue(name, newValue.toString());
        }}
        renderInput={(params) => (
          <TextField
            color="primary"
            {...register(name, {
              required: true,
            })}
            {...params}
          />
        )}
      />
      <div>
        <span className="text-red-700">
          {watch(name)?.length
            ? ""
            : errors[name]?.type === "required" && `* ${label} is required`}
        </span>
      </div>
    </Stack>
  );
};

export default MuiDateTimePicker;
