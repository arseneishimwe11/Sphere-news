import { TableRow, TableCell } from "@mui/material";
import ThreeDotPopover from "./ThreeDotPopOverHighlight";
import { useState } from "react";

function createHighlightData(id, hightlightNum, content, color, status) {
    return { id, hightlightNum, content, color, status };
}

const highlightRows = [
    createHighlightData(0,'Highlight1', 'Elon Musk', '#82E1FF', true),
    createHighlightData(1, 'Highlight2', 'Tesla', '#8BF0E6', false),
    createHighlightData(2, 'Highlight3', 'SpaceX', '#C69FFB', false),
    createHighlightData(3,'Highlight1', 'Elon Musk', '#82E1FF', true),
    createHighlightData(4, 'Highlight2', 'Tesla', '#8BF0E6', false),
    createHighlightData(5, 'Highlight3', 'SpaceX', '#C69FFB', false),
];

const NewHighlightTableContent = () => {
    const [highlightData, setHighlightData] = useState(highlightRows);
    const deleteHighlightData = (id) => {
        setHighlightData([...highlightData].filter((highlight) => highlight.id !== id));
    }
    return (
        <>
            {highlightData.map((row) => (
                <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row" sx={{ width: "0px" }}>
                        <div style={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: `${row.color}`
                        }}></div>
                    </TableCell>
                    <TableCell sx={{ paddingLeft: '0px' }}>
                        <p className='text-[17px]'>{row.hightlightNum}</p>
                        <div className='flex flex-row mt-[5px]'>
                            <p>Applies to:</p>
                            <p style={{
                                backgroundColor: `${row.color}`,
                                fontWeight: 'bold'
                            }}>
                                {row.content}
                            </p>
                        </div>
                    </TableCell>
                    <TableCell align="right">
                        <div className='flex flex-row justify-end'>
                            <p className={`py-[7px] px-[14px] rounded-2xl ${row.status ? 'bg-green-200' : 'bg-gray-200'}`}>
                                {row.status ? "Active" : "Draft"}
                            </p>
                        </div>
                    </TableCell>
                    <TableCell sx={{ width: "15px" }}>
                        <ThreeDotPopover index={row.id} deleteHighlightData={deleteHighlightData} />
                    </TableCell>
                </TableRow>
            ))
            }
        </>
    );
}

export default NewHighlightTableContent;