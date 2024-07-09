import { TableRow, TableCell } from "@mui/material";
import { Checkbox } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import usePopup from "@/app/hooks/usePopupState";
import ThreeDotPopOverContact from "./ThreeDotPopOverContact";

const ContactMembers = ({ contactData, deleteEmailData }) => {
  const { anchorEl, handleClose, handleOpen } = usePopup();
  return (
    <>
      {contactData.map((row) => (
        <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell>
            <AccountCircleOutlinedIcon
              sx={{
                backgroundColor: "#E8EDF2",
                color: "#5A6D7E",
                fontSize: "27px",
                borderRadius: "100%",
              }}
            />
            &nbsp;&nbsp;&nbsp;
            {row.fullName}
          </TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.status}</TableCell>
          <TableCell>
            <IconButton onClick={handleOpen}>
              <MoreHorizIcon />
            </IconButton>
          </TableCell>
          <ThreeDotPopOverContact
            handleClose={handleClose}
            anchorEl={anchorEl}
            index={row.id}
            deleteEmailData={deleteEmailData}
          />
        </TableRow>
      ))}
    </>
  );
};

export default ContactMembers;
