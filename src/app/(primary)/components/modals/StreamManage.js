import { useState } from 'react';

import { Modal, Box, Tab, IconButton } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { SystemStream } from './ManageTabContents/SystemStream';
import { Tags } from './ManageTabContents/Tags';
import { Streams } from './ManageTabContents/Streams';
import { Folders } from './ManageTabContents/Folders';
import { Feeds } from './ManageTabContents/Feeds';

import CloseIcon from '@mui/icons-material/Close';

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1080,
    p: 0,
};

export function StreamManageModal(props) {
    const { modalOpen, handleCloseModal } = props;

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Modal
            open={modalOpen}
            onClose={() => handleCloseModal('stream_manage')}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalContentStyle}>
                <div className='rounded-lg overflow-hidden'>
                    <div className='flex flex-row items-center justify-between px-8 py-4 bg-[#003E6D] text-white'>
                        <p className='text-[20px]'>Manage Streams & Folders</p>
                        <IconButton onClick={() => handleCloseModal('stream_manage')}>
                            <CloseIcon fontSize='small' sx={{color: 'white'}}/>
                        </IconButton>
                    </div>
                    <div className='p-8 py-4 bg-white'>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="STREAMS" value="1" sx={{ fontSize: '12px', padding: '8px' }} />
                                    <Tab label="FOLDERS" value="2" sx={{ fontSize: '12px', padding: '8px' }} />
                                    <Tab label="FEEDS" value="3" sx={{ fontSize: '12px', padding: '8px' }} />
                                    <Tab label="TAGS" value="4" sx={{ fontSize: '12px', padding: '8px' }} />
                                    <Tab label="SYSTEM STREAMS" value="5" sx={{ fontSize: '12px', padding: '8px' }} />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Streams />
                            </TabPanel>
                            <TabPanel value="2">
                                <Folders />
                            </TabPanel>
                            <TabPanel value="3">
                                <Feeds />
                            </TabPanel>
                            <TabPanel value="4">
                                <Tags />
                            </TabPanel>
                            <TabPanel value="5">
                                <SystemStream />
                            </TabPanel>
                        </TabContext>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
