import { TextField, Button, Switch, Slider } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FolderPopOver from "./FolderPopOver";
import usePopup from "@/app/hooks/usePopupState";

const FilterSelect = () => {
  const [filter, setFilter] = useState(0);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <Box sx={{ margin: "5px" }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          onChange={handleChange}
        >
          <MenuItem value={0}>Identical URLs</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

const NewsLetterFeedPage = () => {
  const [checked, setChecked] = useState(true);
  const handleSwitch = (e) => {
    setChecked(e.target.checked);
  };
  const [compareDays, setCompareDays] = useState(10);
  const handleSliderChange = (e, newCompareDays) => {
    setCompareDays(newCompareDays);
  };
  const { anchorEl, handleOpen, handleClose } = usePopup();
  return (
    <div className="max-w-[700px] mx-auto mt-[20px]">
      <div className="flex flex-row">
        <div className="w-[50%]">
          <p className="font-bold text-[30px]">Add Newsletter</p>
          <p className="text-[15px] text-[#555] mt-[10px]">
            Stop flooding your email Inbox! Subscribe to newsletters with a
            unique email addresses and read them as regular feeds
          </p>
        </div>
        <div className="w-[50%]">
          <img src="img/news/newsletter.png" className="rounded-2xl" />
        </div>
      </div>
      <div className="flex flex-col mt-[20px]">
        <label className="font-bold mb-[10px]">Newsletter Name:</label>
        <TextField placeholder="Min. 5 characters. E.g. Stratechery's Daily Update" />
      </div>
      <div className="flex flex-col mt-[20px]">
        <label className="font-bold mb-[10px]">Email address:</label>
        <FormControl variant="outlined">
          <OutlinedInput
            placeholder="startecherrysdaily"
            endAdornment={
              <InputAdornment position="end">
                @sphere.to&nbsp;
                {<ContentCopyIcon />}
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className="flex flex-row items-center mt-[20px]">
        <HelpOutlineIcon sx={{ color: "green" }} />
        <p>&nbsp;Email address will be activated upon saving.</p>
      </div>
      <div className="flex flex-row items-center mt-[30px] justify-between">
        <p className="font-bold text-[27px]">Add to folder</p>
        <Button
          variant="contained"
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            color: "white",
            backgroundColor: "#5A7BA5",
          }}
          onClick={handleOpen}
        >
          Folder
        </Button>
      </div>
      <div className="flex flex-row items-center mt-[30px] justify-between">
        <p className="font-bold text-[22px]">Follow External Links</p>
        <Switch />
      </div>
      <div className="flex flex-row items-center mt-[15px] justify-between">
        <p className="font-bold text-[22px]">Remove Duplicate Articles</p>
        <Switch checked={checked} onChange={handleSwitch} />
      </div>
      <div style={{ display: checked ? "block" : "none", marginTop: "15px" }}>
        <div>
          <p className="font-bold text-[20px] mb-[10px]">
            Filter duplicate articles by
          </p>
          <FilterSelect />
        </div>
        <p className="mt-[20px]">
          New articles will be matched against previous ones and will not be
          shown if they are detected as duplicates. Adjust the detection method
          to the specific case.
        </p>
        <p className="mt-[20px]">COMPARE PERIOD</p>
        <div className="flex flex-row items-center mt-[20px] justify-between">
          <Slider value={compareDays} onChange={handleSliderChange} />
          <p className="w-[90px] text-center">
            {Math.ceil(compareDays * 0.3)} Days
          </p>
        </div>
      </div>
      <Button
        variant="contained"
        sx={{ marginTop: "20px", width: "100%", textTransform: "none" }}
      >
        Save Newsletter
      </Button>
      <FolderPopOver anchorEl={anchorEl} handleClose={handleClose} />
    </div>
  );
};

export default NewsLetterFeedPage;
