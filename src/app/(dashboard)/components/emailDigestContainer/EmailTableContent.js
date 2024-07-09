import { TableRow, TableCell } from "@mui/material";
import ThreeDotPopOverEmail from "./ThreeDotPopOverEmail";
import { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

function createHighlightData(id, hightlightNum, content, color, status) {
  return { id, hightlightNum, content, color, status };
}

const StatusTableCell = () => {
  return (
    <div className="flex flex-row items-center gap-[10px]">
      <div className="flex flex-col items-center">
        <p>0</p>
        <p>Sends</p>
      </div>
      <div className="flex flex-col items-center">
        <p>-</p>
        <p>
          Opened
          <ErrorOutlineOutlinedIcon />
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p>-</p>
        <p>Clicked</p>
      </div>
      <div className="flex flex-col items-center">
        <p>-</p>
        <p>Unsubscribed</p>
      </div>
    </div>
  );
};
const highlightRows = [
  createHighlightData(0, "Email 99", "1 email over 1 day", "#82E1FF", true),
  createHighlightData(
    1,
    "Email 97 (Internal Title)",
    "Scheduled for Dec 14, 2023 at 7:00 PM",
    "#8BF0E6",
    false
  ),
  createHighlightData(
    2,
    "Email 101 (Internal Title)",
    "Scheduled for Dec 14, 2023 at 7:30 PM",
    "#C69FFB",
    false
  ),
];

const EmailTableContent = () => {
  const [highlightData, setHighlightData] = useState(highlightRows);
  const deleteHighlightData = (id) => {
    setHighlightData(
      [...highlightData].filter((highlight) => highlight.id !== id)
    );
  };
  return (
    <>
      {highlightData.map((row) => (
        <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row" sx={{ width: "0px" }}>
            <EmailOutlinedIcon />
          </TableCell>
          <TableCell sx={{ paddingLeft: "0px" }}>
            <p className="text-[17px]">{row.hightlightNum}</p>
            <div className="flex flex-row mt-[5px]">
              <p>{row.content}</p>
            </div>
          </TableCell>
          <TableCell align="right">
            <div className="flex flex-row items-center justify-end gap-[30px]">
              {row.id === 0 && <StatusTableCell />}
              <p
                className={`py-[7px] px-[14px] rounded-2xl ${
                  row.status ? "bg-green-200" : "bg-gray-200"
                }`}
              >
                {row.status ? "Active" : "Draft"}
              </p>
            </div>
          </TableCell>
          <TableCell sx={{ width: "15px" }}>
            <ThreeDotPopOverEmail
              index={row.id}
              deleteHighlightData={deleteHighlightData}
            />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default EmailTableContent;
