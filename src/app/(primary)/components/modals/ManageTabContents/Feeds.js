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
    IconButton,
    TextField,
    Select,
    MenuItem,
    Checkbox,
    Divider,
    Button
} from '@mui/material';

import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

const SearchCriteriaGroup = () => {

    return (
        <div className='flex flex-row items-center justify-between w-full'>
            <TextField
                sx={{
                    width: '10%',
                    '& .MuiInputBase-input.MuiOutlinedInput-input': {
                        fontSize: '12px',
                        padding: '8px'
                    }
                }}
                size='small'
                placeholder='Search'
            />
            <Select
                value='all'
                size='small'
                sx={{
                    fontSize: '12px'
                }}
            >
                <MenuItem value='all' sx={{ fontSize: '12px' }}>All Streams</MenuItem>
            </Select>
            <Select
                value='all'
                size='small'
                sx={{
                    fontSize: '12px'
                }}
            >
                <MenuItem value='all' sx={{ fontSize: '12px' }}>All Folders</MenuItem>
            </Select>
            <Select
                value='all'
                size='small'
                sx={{
                    fontSize: '12px'
                }}
            >
                <MenuItem value='all' sx={{ fontSize: '12px' }}>All Feed</MenuItem>
            </Select>
            <Select
                value={100}
                size='small'
                sx={{
                    fontSize: '12px'
                }}
            >
                <MenuItem value={100} sx={{ fontSize: '12px' }}>Limit: 100</MenuItem>
            </Select>
            <div className='flex flex-row items-center text-[12px]'>
                <Checkbox />
                <p>Show URL</p>
            </div>
            <div className='flex flex-row justify-end text-[12px] w-[35%]'>
                <div className='p-2 hover:cursor-pointer border border-1 border-gray-400 rounded-l-md'>All</div>
                <div className='p-2 hover:cursor-pointer border border-1 border-gray-400'>Deactivated</div>
                <div className='p-2 hover:cursor-pointer border border-1 border-gray-400'>Filtered</div>
                <div className='p-2 hover:cursor-pointer border border-1 border-gray-400 rounded-r-md'>With issues</div>
            </div>
        </div>
    );
}

const rows = [
    {
        name: '""Nikola Tesla"" - Google News',
        engagement: 1
    },
    {
        name: 'Autoblog Tesla',
        engagement: 8
    },
    {
        name: 'Tesla | Electrek',
        engagement: 1
    }
];

export function Feeds() {
    return (
        <>
            <div className='pb-4'>
                <SearchCriteriaGroup />
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Health</TableCell>
                            <TableCell align="left">Update</TableCell>
                            <TableCell align="center">Active</TableCell>
                            <TableCell align="center">Engagement</TableCell>
                            <TableCell align='right'></TableCell>
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
                                <TableCell sx={{ width: '30%' }} align='left'>
                                    <p>
                                        {row.name}
                                    </p>
                                </TableCell>
                                <TableCell sx={{ width: '15%' }} align='left'>
                                    <div className='mx-auto rounded-full w-[12px] h-[12px] bg-[#33CC33]'></div>
                                </TableCell>
                                <TableCell sx={{ width: '10%' }} align='left'>
                                    <p className='flex flex-row items-center gap-2 text-gray-600'>
                                        <span>60m</span>
                                        <RocketLaunchOutlinedIcon sx={{ fontSize: '16px' }} />
                                    </p>
                                </TableCell>
                                <TableCell sx={{ width: '10%' }} align='left'>
                                    <Switch defaultChecked={true} />
                                </TableCell>
                                <TableCell sx={{ width: '10%' }} align='center'>
                                    {row.engagement}%
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton>
                                        <BorderColorOutlinedIcon sx={{ fontSize: '20px' }} />
                                    </IconButton>
                                    <IconButton>
                                        <BoltOutlinedIcon sx={{ fontSize: '20px' }} />
                                    </IconButton>
                                    <IconButton>
                                        <FilterAltOutlinedIcon sx={{ fontSize: '20px' }} />
                                    </IconButton>
                                    <IconButton>
                                        <DeleteOutlineOutlinedIcon sx={{ fontSize: '20px' }} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Divider sx={{ marginY: '12px' }} />
            <div className='flex flex-row items-center gap-2'>
                <p><i>with selected:</i></p>
                <Select
                    value='bundle'
                    size='small'
                    sx={{
                        fontSize: '12px'
                    }}
                >
                    <MenuItem value='bundle' sx={{ fontSize: '12px' }}>Create bundle</MenuItem>
                </Select>
                <Button variant='contained'>Go</Button>
            </div>
        </>
    );
}