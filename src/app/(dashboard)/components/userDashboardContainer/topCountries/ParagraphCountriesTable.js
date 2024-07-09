'use client'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ParagraphCountriesTable = (props) => {
    const { rows } = props;
    const { tableHeader } = props;
    return (
        <div id="newsTable">
            <TableContainer>
                <Table /*sx={{ minWidth: 650 }}*/ aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{tableHeader === "" ? "Country" : "Entity"}</TableCell>
                            <TableCell align="left">{tableHeader === "" ? "Views" : "Articles Read"}</TableCell>
                            <TableCell align="left">{tableHeader === "" ? "Percentage" : "Total Articles Available"}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
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

export default ParagraphCountriesTable;