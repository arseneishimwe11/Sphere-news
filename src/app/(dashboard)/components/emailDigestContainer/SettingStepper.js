import { TextField, Divider, ButtonGroup, Button } from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const BasicDatePicker = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker sx={{ width: "100px" }} />
      </DemoContainer>
    </LocalizationProvider>
  );
};

const BasicTimePicker = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker"]}>
        <TimePicker sx={{ width: "100px" }} />
      </DemoContainer>
    </LocalizationProvider>
  );
};

const SettingStepper = () => {
  const repeatWords = ["Daily", "Weekly", "Biweekly", "Monthly", "Custom"];
  const daywords = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="mt-[20px]">
      <div>
        <label className="text-[20px] font-bold">Details</label>
      </div>
      <div className="flex flex-col mt-[15px]">
        <label className="font-bold text-[18px] mb-[5px]">Digest Name:</label>
        <TextField placeholder="e.g. Weekly Digest: Top News" />
      </div>
      <div className="flex flex-col mt-[15px]">
        <label className="text-[18px] mb-[5px]">
          <span className="font-bold">Description:</span> Optional
        </label>
        <textarea
          placeholder="Will be displayed in each email above the articles.
        Maximum 500 characters."
          style={{ borderWidth: "1px", minHeight: "100px", padding: "10px" }}
        />
      </div>
      <Divider sx={{ marginY: "30px" }} />
      <div>
        <label className="text-[20px] font-bold">Schedule</label>
      </div>
      <div className="flex flex-row justify-between gap-[10px]">
        <div className="flex flex-col">
          <label className="text-[18px]">start date</label>
          <BasicDatePicker />
        </div>
        <div className="flex flex-col">
          <label className="text-[18px]">Time</label>
          <BasicTimePicker />
        </div>
        <div className="flex flex-col">
          <div style={{ height: "35px" }} />
          <ButtonGroup>
            <Button sx={{ height: "56px" }}>AM</Button>
            <Button sx={{ height: "56px" }}>PM</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="mt-[20px] flex flex-col">
        <div className="mb-[10px]">
          <label className="text-[18px]">Repeat</label>
        </div>
        <ButtonGroup sx={{marginBottom: '10px'}}>
          {repeatWords.map((word) => (
            <Button>{word}</Button>
          ))}
        </ButtonGroup>
        <div className="flex flex-row gap-[5px]">
        {daywords.map((word) => (
          <Button variant="outlined">{word}</Button>
        ))}
        </div>
      </div>
    </div>
  );
};

export default SettingStepper;
