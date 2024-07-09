import { TableRow, TableCell } from "@mui/material";
import ThreeDotPopOver from "./ThreeDotPopOverFilter";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import VolumeMuteOutlinedIcon from "@mui/icons-material/VolumeMuteOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import { Button } from "@mui/material";
import { useState } from "react";
const filterRows = [
    createFilterData(0, "Filter 1", "Removes articles mentioning tesla", 555, 15, "Remove articles", true),
    createFilterData(1, "Filter 2", "Removes duplicate content from Folder X by title", 555, 15, "Remove duplicates", false),
    createFilterData(2, "Filter 3", "Keep articles containing 'tesla' AND 'elon musk' in title", 555, 15, "Keep only articles", false),
    createFilterData(3, "Filter 1", "Removes articles mentioning tesla", 555, 15, "Remove articles", true),
    createFilterData(4, "Filter 2", "Removes duplicate content from Folder X by title", 555, 15, "Remove duplicates", false),
    createFilterData(5, "Filter 3", "Keep articles containing 'tesla' AND 'elon musk' in title", 555, 15, "Keep only articles", false),
    createFilterData(6, "Filter 1", "Removes articles mentioning tesla", 555, 15, "Remove articles", true),
    createFilterData(7, "Filter 2", "Removes duplicate content from Folder X by title", 555, 15, "Remove duplicates", false),
    createFilterData(8, "Filter 3", "Keep articles containing 'tesla' AND 'elon musk' in title", 555, 15, "Keep only articles", false),
];

function createFilterData(id, filterNum, content, totalRemoval, todayRemoval, info, status) {
    return { id, filterNum, content, totalRemoval, todayRemoval, info, status };
}

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

const NewFilterTableContent = () => {
    const [filterData, setFilterData] = useState(filterRows);
    const deleteFilterData = (id) => {
        setFilterData([...filterData].filter((filter) => filter.id !== id));
    }
    return (
        <>
            {filterData.map((row) => (
                <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {row.id}
                        <FilterAltOutlinedIcon />
                    </TableCell>
                    <TableCell sx={{ paddingLeft: '0px' }}>
                        <p>{row.filterNum}</p>
                        <p>{row.content}</p>
                    </TableCell>
                    <CustomTableCell value={row.totalRemoval} label="Removed Total" icon={<ErrorOutlineOutlinedIcon />} />
                    <CustomTableCell value={row.todayRemoval} label="Removed Today" icon={<ErrorOutlineOutlinedIcon />} />
                    <TableCell>
                        <Button style={{ textTransform: 'none' }} sx={row.id % 3 === 0 ? {
                            color: "gray",
                            backgroundColor: "#FCF5F3"
                        } : (
                            row.id % 3 === 1 ? {
                                color: "gray",
                                backgroundColor: "#EEF3F8"
                            } :
                                {
                                    color: "gray",
                                    backgroundColor: "#EAF9F6"
                                }
                        )}>
                            {row.id % 3 === 0 ? <VolumeMuteOutlinedIcon sx={{ color: '#CEB2B4' }} /> : (row.id % 3 === 1 ? <ContentCopyOutlinedIcon /> : <VolumeUpOutlinedIcon sx={{ color: "#BDD1CA" }} />)}
                            &nbsp;{row.info}
                        </Button>
                    </TableCell>
                    <TableCell align="right">
                        <div className='flex flex-row justify-end'>
                            <p className={`p-[7px] rounded-full ${row.status ? 'bg-green-200' : 'bg-gray-200'}`}>
                                {row.status ? "Active" : "Disabled"}
                            </p>
                        </div>
                    </TableCell>
                    <TableCell>
                        <ThreeDotPopOver deleteFilterData={deleteFilterData} index={row.id} />
                    </TableCell>
                </TableRow>
            ))
            }
        </>
    )
}

export default NewFilterTableContent;