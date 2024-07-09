import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Switch,
    IconButton
} from '@mui/material';

import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const rows = [
    {
        name: 'Tag 1',
        isOutput: false
    },
    {
        name: 'Tag 2',
        isOutput: false
    },
    {
        name: 'Tag 3',
        isOutput: false
    }
];

export function Tags() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Output feeds</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ 
                                '& td': {
                                    paddingY: '4px'
                                },
                                '&:last-child td': { border: 0 }
                            }}
                        >
                            <TableCell sx={{width: '25%'}}>
                                <p className='text-gray-600'>
                                    <SellOutlinedIcon />
                                    {row.name}
                                </p>
                            </TableCell>
                            <TableCell align="left" sx={{width: '30%'}}>
                                <div className='flex flex-row items-center gap-2'>
                                    <div className='flex flex-row items-center gap-2 text-gray-400'>
                                        <Switch defaultChecked={row.isOutput}/>
                                        <p>RSS</p>
                                        <p>JSON</p>
                                        <p>HTML Clip</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="right">
                                <IconButton>
                                    <BorderColorOutlinedIcon sx={{fontSize: '20px'}}/>
                                </IconButton>
                                <IconButton>
                                    <DeleteOutlineOutlinedIcon sx={{fontSize: '20px'}}/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}