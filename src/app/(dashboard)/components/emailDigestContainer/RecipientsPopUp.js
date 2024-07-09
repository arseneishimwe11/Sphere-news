import Modal from "@mui/material/Modal";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Pagination from "@mui/material/Pagination";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchWithIcon from "../automationContainer/SearchWithIcon";
import SelectLabels from "../automationContainer/SelectLabels";
import { Checkbox } from "@mui/material";
import ContactMembers from "./ContactMember";
import { useState } from "react";

const EmailTableModal = () => {
  function createData(id, fullName, email, status) {
    return {
      id,
      fullName,
      email,
      status,
    };
  }
  const contactData = [
    createData(0, "John Smith", "joesmith@gmail.com", "Subscribed"),
    createData(1, "John Smith", "jamesk@gmail.com", "Never subscribed"),
    createData(2, "John Smith", "joshadams@gmail.com", "Unsubscirbed"),
  ];
  const [emailData, setEmailData] = useState(contactData);
  const deleteEmailData = (id) => {
    setEmailData([...emailData].filter((email) => email.id !== id));
  };
  return (
    <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell colSpan={8}>
              <div className="flex flex-row justify-between items-center">
                <p className="ml-[20px] font-bold text-xl my-[20px]">
                  Recipients
                </p>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={8}>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                  <Checkbox />
                  <p className="ml-[20px] font-bold text-[17px] text-[#555]">
                    Displaying 1-3 of 3 contacts
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <SelectLabels />
                  <SearchWithIcon concept={"Team Members"} />
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ width: "65px" }}></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell sx={{ alignItems: "center" }}>
              {"Status "}
              <HelpOutlineIcon sx={{ color: "gray" }} />
            </TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
          {
            <ContactMembers
              contactData={emailData}
              deleteEmailData={deleteEmailData}
            />
          }
          <TableRow>
            <TableCell colSpan={8}>
              <div className="flex justify-end mx-[15px] my-[5px] border-[]">
                <Pagination
                  count={1}
                  page={1}
                  variant="outlined"
                  color="primary"
                  size="10"
                />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default function BasicModal({ openModal, handleModalClose }) {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ width: "1200px", margin: "auto" }}
      >
        <EmailTableModal />
      </Modal>
    </div>
  );
}
