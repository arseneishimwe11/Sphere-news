import { Divider, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const TagDropdown = ({ handleClose }) => {
  const tags = ["Tag 99", "Tag 98", "Tag 97"];
  return (
    <>
      <div className="flex flex-row items-center justify-between min-w-[300px] m-2">
        <b className="pl-2">Tags</b>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      {tags.map((tag, index) => (
        <div key={index}>
          <div className="flex flex-row items-center pl-2 pb-2 gap-2">
            <Checkbox />
            <p>{tag}</p>
          </div>
        </div>
      ))}
      <Divider />
      <Button
        variant="contained"
        sx={{ width: "97%", margin: "5px", textTransform: "none" }}
      >
        Filter
      </Button>
    </>
  );
};

export default TagDropdown;
