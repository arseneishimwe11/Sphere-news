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

import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';

const rows = [
    {
        name: 'My Folder 2',
        isOutput: false,
        opml: 'Private OPML'
    },
    {
        name: 'My Folder X',
        isOutput: true,
        opml: 'Public OPML'
    }
];

export function Folders() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Output feeds</TableCell>
                        <TableCell></TableCell>
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
                                    <FolderOutlinedIcon />
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
                            <TableCell align="left" sx={{width: '20%'}}>
                                <p>{row.opml}</p>
                            </TableCell>
                            <TableCell align="right">
                                <IconButton>
                                    <BorderColorOutlinedIcon sx={{fontSize: '20px'}}/>
                                </IconButton>
                                <IconButton>
                                    <FileDownloadOutlinedIcon sx={{fontSize: '20px'}}/>
                                </IconButton>
                                <IconButton>
                                    <BoltOutlinedIcon sx={{fontSize: '20px'}}/>
                                </IconButton>
                                <IconButton>
                                    <FilterAltOutlinedIcon sx={{fontSize: '20px'}}/>
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