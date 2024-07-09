'use client'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

function createData(item, amount, date) {
    return { item, amount, date };
}

const rows = [
    createData('Pro', '$89.00', 'July 9, 2023'),
    createData('Plus', '$56.00', 'April 18, 2023'),
    createData('Enterprise', '$0.00', 'April 14, 2023'),
];

const InvoiceTable = () => {

    return (
        <div id="newsTable">
            <TableContainer className='border border-[#EEE] rounded-lg'>
                <Table /*sx={{ minWidth: 650 }}*/ aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell align="left">Amount</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Invoice</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, id) => (
                            <TableRow
                                key={row.item}
                            >
                                <TableCell component="th" scope="row">
                                    <div className="flex items-center">
                                        {row.item}
                                    </div>
                                </TableCell>
                                <TableCell align="left">{row.amount}</TableCell>
                                <TableCell align="left">
                                    <div className="flex items-center justify-between">
                                        <p>{row.date}</p>
                                    </div>
                                </TableCell>
                                <TableCell align="left">
                                    <Button variant='outlined' style={{ color:'green', textTransform: 'none', borderRadius: '7px', borderColor: 'green' }} className='px-3 py-2 text-[#73AEAD]'>View</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default InvoiceTable;