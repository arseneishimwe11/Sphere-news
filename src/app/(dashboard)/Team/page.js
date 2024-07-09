'use client'

import { useContext, useState } from 'react';
import { UserDashboardContext } from '../layout';
import { Button } from '@mui/material';
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Pagination from '@mui/material/Pagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchWithIcon from '../components/automationContainer/SearchWithIcon';
import SelectLabels from '../components/automationContainer/SelectLabels';

import { Checkbox } from '@mui/material';
import TeamMembers from '../components/teamContainer/TeamMembers';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import SelectCountNum from '../components/teamContainer/SelectCountNum';
import SelectSortBy from '../components/teamContainer/SelectSortBy';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { IconButton } from '@mui/material';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const useMultipleInputs = (initialState) => {
    const [inputs, setInputs] = useState(initialState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    }
    return {
        inputs,
        setInputs,
        handleInputChange
    };
}

export default function Newsletter() {
    const content = useContext(UserDashboardContext);

    const setHeaderContent = content.setHeaderContent;
    setHeaderContent('Team');

    const setDashboardStyle = content.setDashboardStyle;
    setDashboardStyle(false);
    //////////////////////////////////////////////////////////////////////
    //SET MOCKUP DATA
    function createData(id, firstName, lastName, email, status, role, joined, lastActivity) {
        return { id, firstName, lastName, email, status, role, joined, lastActivity };
    }

    const rows = [
        createData(0, "Joe", "Smith", "joesmith@gmail.com", "Pending", "MEMBER", "Dec 14, 2023", "Dec 15, 2023"),
        createData(1, "James", "Kay", "jamesk@gmail.com", "Accepted", "ADMINISTRATOR", "Dec 14, 2023", "Dec 15, 2023"),
        createData(2, "Josh", "Adams", "joshadams@gmail.com", "Revoked", "MEMBER", "Dec 14, 2023", "Dec 15, 2023"),
        createData(3, "Joe", "Smith", "joesmith@gmail.com", "Pending", "MEMBER", "Dec 14, 2023", "Dec 15, 2023"),
        createData(4, "Joe", "Smith", "joesmith@gmail.com", "Pending", "MEMBER", "Dec 14, 2023", "Dec 15, 2023"),
        createData(5, "James", "Kay", "jamesk@gmail.com", "Accepted", "ADMINISTRATOR", "Dec 14, 2023", "Dec 15, 2023"),
        createData(6, "Josh", "Adams", "joshadams@gmail.com", "Revoked", "MEMBER", "Dec 14, 2023", "Dec 15, 2023"),
        createData(7, "Joe", "Smith", "joesmith@gmail.com", "Pending", "MEMBER", "Dec 14, 2023", "Dec 15, 2023"),
        createData(8, "Joe", "Smith", "joesmith@gmail.com", "Pending", "MEMBER", "Dec 14, 2023", "Dec 15, 2023"),
        createData(9, "James", "Kay", "jamesk@gmail.com", "Accepted", "ADMINISTRATOR", "Dec 14, 2023", "Dec 15, 2023"),
        createData(10, "Josh", "Adams", "joshadams@gmail.com", "Revoked", "MEMBER", "Dec 14, 2023", "Dec 15, 2023"),
        createData(11, "Joe", "Smith", "joesmith@gmail.com", "Pending", "MEMBER", "Dec 14, 2023", "Dec 15, 2023"),
        createData(12, "Joe", "Smith", "joesmith@gmail.com", "Pending", "MEMBER", "Dec 14, 2023", "Dec 15, 2023"),
        createData(13, "James", "Kay", "jamesk@gmail.com", "Accepted", "ADMINISTRATOR", "Dec 14, 2023", "Dec 15, 2023"),
        createData(14, "Josh", "Adams", "joshadams@gmail.com", "Revoked", "MEMBER", "Dec 14, 2023", "Dec 15, 2023"),
        createData(15, "Joe", "Smith", "joesmith@gmail.com", "Pending", "MEMBER", "Dec 14, 2023", "Dec 15, 2023"),
        createData(16, "Joe", "Smith", "joesmith@gmail.com", "Pending", "MEMBER", "Dec 14, 2023", "Dec 15, 2023"),
        createData(17, "James", "Kay", "jamesk@gmail.com", "Accepted", "ADMINISTRATOR", "Dec 14, 2023", "Dec 15, 2023"),
        createData(18, "Josh", "Adams", "joshadams@gmail.com", "Revoked", "MEMBER", "Dec 14, 2023", "Dec 15, 2023"),
        createData(19, "Joe", "Smith", "joesmith@gmail.com", "Pending", "MEMBER", "Dec 14, 2023", "Dec 15, 2023"),
    ];

    const [teamData, setTeamData] = useState([...rows]);
    //////////////////////////////////////////////////////////////////////
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    /////////////////////////////////////////////////////////////////////////
    //SORT AND PAGINATION
    const [sortBy, setSortBy] = useState('');

    const [pagination, setPagination] = useState(5);
    const [page, setPage] = useState(1);

    const handlePageChange = (event, value) => {
        setPage(value);
    }

    const nextPage = () => {
        if (page < Math.ceil(teamData.length / pagination)) {
            setPage(page + 1);
        }
    }
    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }
    //////////////////////////////////////////////////////////////
    //Dialog open and close
    const [openModal, setOpenModal] = useState(false);
    const [memberId, setMemberId] = useState(-1);
    const handleDialogOpen = (id) => {
        setAnchorEl(null);
        setMemberId(id);
        const member = [...teamData].filter((member) => member.id === id)[0];
        id === -1 ? setInputs({ firstName: '', lastName: '', email: '' }) : setInputs({ firstName: member.firstName, lastName: member.lastName, email: member.email });
        id === -1 ? setRoleItem('') : setRoleItem(member.role);
        setOpenModal(true);
    }
    const handleDialogClose = () => {
        // setAnchorEl(null);
        setOpenModal(false);
    }
    /////////////////////////////////////////////////////////
    /// handling member save
    let uniqueId = rows.length;
    const handleSaveClose = () => {
        setOpenModal(false);
        // setAnchorEl(null);
        memberId === -1 ?
            setTeamData([...teamData, { id: uniqueId++, ...inputs, role: roleItem, status: "Pending", joined: "Jan 15, 2024", lastActivity: "Jan 24, 2024" }]) :
            setTeamData([...teamData].map(obj => {
                if (obj.id === memberId) {
                    return { ...obj, ...inputs, role: roleItem }
                } else {
                    return obj;
                }
            }));
    };
    const handleRemoveClose = (id) => {
        setAnchorEl(null);
        setTeamData([...teamData].filter((member) => member.id !== id));
    }
    //Dialog content select form
    const [roleItem, setRoleItem] = useState('');
    const handleRoleChange = (e) => {
        setRoleItem(e.target.value);
    }
    ////////////////////////////////////////////////////////////////
    //to exit edit button
    const [anchorEl, setAnchorEl] = useState(null);
    ////////////////////////////////////
    //handling multiple Inputs
    const { inputs, setInputs, handleInputChange } = useMultipleInputs({
        firstName: '',
        lastName: '',
        email: '',
    });
    return (
        <div className='mt-[50px] sm:mt-[100px]   w-[90%] lg:w-[70%] m-auto'>
            <div className='flex text-[20px] sm:text-[30px] font-bold justify-between'>
                <div className='flex flex-row'>
                    <p>{"Team Members"}&nbsp;</p>
                    <span>
                        <HelpOutlineIcon sx={{ color: "#777" }} />
                    </span>
                </div>
                <Button
                    variant="contained"
                    className="px-4 py-2 text-[20px] font-bold"
                    onClick={() => handleDialogOpen(-1)}
                    style={{ textTransform: 'none', backgroundColor: "#1F232C", borderRadius: '7px' }}
                >
                    + Add Member
                </Button>
                <Dialog
                    fullScreen={fullScreen}
                    open={openModal}
                    onClose={handleDialogClose}
                    aria-labelledby="responsive-dialog-title"
                    sx={{
                        "& .MuiPaper-root": {
                            minWidth: "500px"
                        }
                    }}
                >
                    <DialogTitle id="responsive-dialog-title">
                        <div className='flex flex-row justify-between items-center mt-[20px]'>
                            <p>{`Add Member`}</p>
                            <IconButton onClick={handleDialogClose}>
                                <CloseOutlinedIcon />
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <div className='flex flex-col gap-[10px]'>
                            <div className='flex flex-row justify-between mt-[10px]'>
                                <TextField id="outlined-first" variant="outlined" placeholder='First Name'
                                    defaultValue={inputs.firstName}
                                    onChange={handleInputChange}
                                    name='firstName' />
                                <TextField id="outlined-last" variant="outlined" placeholder='Last Name' defaultValue={inputs.lastName}
                                    onChange={handleInputChange}
                                    name='lastName' />
                            </div>
                            <TextField variant='outlined' type='email' placeholder='Email' style={{ width: "100%" }} defaultValue={inputs.email}
                                onChange={handleInputChange}
                                name='email' />
                            <FormControl>
                                <InputLabel id="demo-select-small-label">Role</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={roleItem}
                                    onChange={handleRoleChange}
                                    label="Role"
                                >
                                    <MenuItem value="OWNER">OWNER</MenuItem>
                                    <MenuItem value="ADMINISTRATOR">ADMINISTRATOR</MenuItem>
                                    <MenuItem value="MEMBER">MEMBER</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField variant='outlined' type='password' placeholder='Password' style={{ width: "100%" }} />
                            <TextField variant='outlined' type='password' placeholder='Confirm Password' style={{ width: "100%" }} />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={() => handleSaveClose()}
                            variant='contained'
                            sx={{ marginBottom: "20px", marginRight: "20px", background: "#4FB9E9" }}
                        >
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={8}>
                                <div className='flex flex-row justify-between items-center'>
                                    <p className='ml-[20px] font-bold text-xl'>Team Members</p>
                                    <div className='flex flex-row items-center'>
                                        <SelectLabels />
                                        <SearchWithIcon concept={"Team Members"} />
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={8}>
                                <div className='flex flex-row justify-between items-center'>
                                    <p className='ml-[20px] font-bold text-[17px] text-[#555]'>Displaying 1-3 of 5 team members</p>
                                    <div className='flex flex-row items-center gap-[15px]'>
                                        <Button onClick={previousPage} variant='outlined' sx={{ borderColor: "gray", width: "50px", height: "50px", minWidth: "0px" }}>
                                            <ArrowBackOutlinedIcon sx={{ color: 'gray' }} />
                                        </Button>
                                        <Button onClick={nextPage} variant='outlined' sx={{ borderColor: "gray", width: "50px", height: "50px", minWidth: "0px" }}>
                                            <ArrowForwardOutlinedIcon sx={{ color: 'gray' }} />
                                        </Button>
                                        <SelectCountNum pagination={pagination} setPagination={setPagination} setPage={setPage} />
                                        <SelectSortBy sortBy={sortBy} setSortBy={setSortBy} teamData={teamData} setTeamData={setTeamData} />
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{<Checkbox />}</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell sx={{ alignItems: "center" }}>
                                {"Status "}
                                <HelpOutlineIcon sx={{ color: "gray" }} />
                            </TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Joined</TableCell>
                            <TableCell>Last Activity</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        {<TeamMembers teamData={[...teamData].splice((page - 1) * pagination, pagination)} handleDialogOpen={handleDialogOpen} anchorEl={anchorEl} setAnchorEl={setAnchorEl} handleRemoveClose = {handleRemoveClose} />}
                        <TableRow>
                            <TableCell colSpan={8}>
                                <div className='flex justify-end mx-[15px] my-[5px] border-[]'>
                                    <Pagination count={Math.ceil(teamData.length / pagination)} page={page} onChange={handlePageChange} variant="outlined" color="primary" size='10' />
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div className='flex flex-row items-center justify-center mb-[20px]'>
                <div></div>
                <Button sx={{
                    marginTop: '20px',
                    borderRadius: '50px',
                    padding: '20px',
                    borderColor: '#F0F0F0'
                }} variant="outlined" >
                    <HelpOutlineIcon sx={{ color: "#88B0B0" }} />&nbsp;
                    <p className='text-[#555]'>Learn more about</p>&nbsp;
                    <p className='text-[#88B0B0]'>Team Members</p>
                </Button>
            </div>
        </div >
    );
}