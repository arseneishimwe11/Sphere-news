import { Divider, IconButton } from "@mui/material";
import Popover from "@mui/material/Popover";
import { Button } from "@mui/material";

const ThreeDotPopOverContact = ({
  anchorEl,
  handleClose,
  index,
  deleteEmailData,
}) => {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className="flex flex-col w-[250px] items-start">
          <Button
            sx={{
              textTransform: "none",
              fontSize: "20px",
              color: "black",
              width: "100%",
              justifyContent: "flex-start",
            }}
          >
            Unsubscribe
          </Button>
          <Divider sx={{ width: "100%" }} />
          <Button
            sx={{
              textTransform: "none",
              fontSize: "20px",
              color: "red",
              width: "100%",
              justifyContent: "flex-start",
            }}
            onClick={() => {
              deleteEmailData(index);
              handleClose();
            }}
          >
            Delete
          </Button>
        </div>
      </Popover>
    </>
  );
};

export default ThreeDotPopOverContact;
