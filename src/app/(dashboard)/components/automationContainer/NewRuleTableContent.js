import { TableRow, TableCell } from "@mui/material";
import ThreeDotPopover from "./ThreeDotPopOverRule";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";

function createData(id, ruleNum, content, yesterday, today, thisWeek, status) {
    return { id, ruleNum, content, yesterday, today, thisWeek, status };
}

const rows = [
    createData(0, "Rule1", "Tags articles that mention 'tesla' in title", 5, 0, 13, true),
    createData(1, "Rule3", "New article in folder: Folder X", 5, 0, 13, false),
    createData(2, "Rule5", "New article in folder: Folder X", 5, 0, 13, false),
    createData(3, "Rule1", "Tags articles that mention 'tesla' in title", 5, 0, 13, true),
    createData(4, "Rule3", "New article in folder: Folder X", 5, 0, 13, false),
    createData(5, "Rule5", "New article in folder: Folder X", 5, 0, 13, false),
];

const CustomTableCell = ({ value, label, icon }) => {
    return (
        <TableCell align="right">
            <div className='flex flex-col items-center'>
                <p>{value}</p>
                <div className='flex flex-row items-center'>
                    <p>{label}&nbsp;</p>
                    {icon}
                </div>
            </div>
        </TableCell>
    );
};

const NewRuleTableContent = () => {
    const [ruleData, setRule] = useState(rows);
    let unique = rows.length;
    const duplicateRuleData = (id) => {
        setRule([...ruleData, {...ruleData.find(rule => rule.id === id), id: unique++}]);
    }
    const deleteRuleData = (id) => {
        console.log([...ruleData].filter((rule) => rule.id !== id));
        setRule([...ruleData].filter((rule) => rule.id !== id));
    }
    return (
        <>
            {ruleData.map((row) => (
                <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        <SettingsSuggestOutlinedIcon />
                    </TableCell>
                    <TableCell sx={{ paddingLeft: '0px' }}>
                        <p>{row.ruleNum}</p>
                        <p>{row.content}</p>
                    </TableCell>
                    <CustomTableCell value={row.yesterday} label="Yesterday" icon={<HelpOutlineIcon />} />
                    <CustomTableCell value={row.today} label="Today" icon={<HelpOutlineIcon />} />
                    <CustomTableCell value={row.thisWeek} label="This Week" icon={<HelpOutlineIcon />} />
                    <CustomTableCell value={<PlayArrowIcon />} label="" icon="Run Now" />
                    <TableCell align="right">
                        <div className='flex flex-row justify-end'>
                            <p className={`p-[7px] rounded-full ${row.status ? 'bg-green-200' : 'bg-gray-200'}`}>
                                {row.status ? "Active" : "Disabled"}
                            </p>
                        </div>
                    </TableCell>
                    <TableCell>
                        <ThreeDotPopover duplicateRuleData={duplicateRuleData} deleteRuleData={deleteRuleData} index={row.id} />
                    </TableCell>
                </TableRow>
            ))}
        </>
    )
}

export default NewRuleTableContent;