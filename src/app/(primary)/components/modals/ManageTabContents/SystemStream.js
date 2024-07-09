import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Switch
} from '@mui/material';

const rows = [
    {
        name: 'News Stream',
        isOutput: true,
        OPML: true
    },
    {
        name: 'Following',
        isOutput: true,
        OPML: true
    },
    {
        name: 'Recently Read',
        isOutput: false
    },
    {
        name: 'Bookmarked',
        isOutput: false
    }
];

export function SystemStream() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Output feeds</TableCell>
                        <TableCell align="left"></TableCell>
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
                                {row.name}
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
                            <TableCell align="left">
                                {
                                    row.OPML &&
                                        <p>OPML</p>
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}