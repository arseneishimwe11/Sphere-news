'use client'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(url, channel, category, views, viewsPercentage) {
    return { url, channel, category, views, viewsPercentage };
}

const rows = [
    createData('img/icons/source/BBC.png', 'Yahoo News', 'Business, Science', 6, 6.0),
    createData('img/icons/source/BBC.png', 'MSNBC News', 'Business & Finance', 9, 37),
    createData('img/icons/source/CNBC.png', 'CNN', 'Business, Science', 16, 24),
    createData('', 'Upgrade your account', 'Business, Science', 23, 67),
    createData('', 'Upgrade your account', 'Business, Science', 45, 49),
];

const ParagraphNewsTable = () => {

    return (
        <div id="newsTable">
            <TableContainer>
                <Table /*sx={{ minWidth: 650 }}*/ aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Channel</TableCell>
                            <TableCell align="left">Website Categories</TableCell>
                            <TableCell align="left">Views</TableCell>
                            <TableCell align="left">View%</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, id) => (
                            <TableRow
                                key={row.channel}
                            >
                                <TableCell component="th" scope="row">
                                    <div className="flex items-center">
                                        <img src={row.url} />
                                        &nbsp;&nbsp;
                                        <span>{row.channel}</span>
                                    </div>
                                </TableCell>
                                <TableCell align="left">{row.category}</TableCell>
                                <TableCell align="left">
                                    <div className="flex items-center justify-between">
                                        <p>{row.views}</p>
                                        &nbsp;&nbsp;
                                        <div className="w-[100%] mx-auto bg-[#E6E8EC] rounded-[3px] h-[0.5rem]">
                                            {/* <div className={`bg-[#272727] h-1.5 rounded-full transition-width duration-500 ease-in-out ${viewsList[id]}`}></div> */}
                                            <div style={{
                                                backgroundColor: '#272727',
                                                height: '0.5rem',
                                                borderRadius: '3px',
                                                width: `${row.views}%`
                                            }}>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell align="left">
                                    {/* {row.viewsPercentage} */}
                                    {/* <div className="w-[100%] mx-auto bg-[#E6E8EC] rounded-xl flex h-[1rem] items-center">
                                        <div style={{
                                            backgroundColor: '#272727',
                                            height: '1rem',
                                            borderRadius: '9999px',
                                            width: `${row.viewsPercentage}%`
                                        }}>
                                        </div>
                                        <p>{row.viewsPercentage}%</p>
                                    </div> */}

                                    <div className="w-full bg-gray-200 rounded-sm dark:bg-gray-700">
                                        <div className="bg-[#272727] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-sm" style={{width: `${row.viewsPercentage}%`}}>{} {row.viewsPercentage}%</div>
                                    </div>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ParagraphNewsTable;