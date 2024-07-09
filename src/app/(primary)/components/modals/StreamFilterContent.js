import { useState } from 'react';
import { Button, Modal, Box, MenuItem, Select, TextField, Divider, Checkbox, IconButton } from '@mui/material';

import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const ConditionGroup = (props) => {
    const { index, conditions, setConditions } = props;

    const removeCondition = () => {
        const tmp = [...conditions];
        tmp.splice(index, 1)
        setConditions(tmp);
    }

    return (
        <div className='flex flex-row items-center justify-between gap-1'>
            <div className='w-[13%]'>
                {
                    conditions[index].compare ?
                        <Select
                            value={conditions[index].compare}
                            sx={{ width: '100%' }}
                            size='small'
                        >
                            <MenuItem value='and'>And</MenuItem>
                            <MenuItem value='or'>Or</MenuItem>
                        </Select> :
                        <p className='text-[16px] font-bold'>If</p>
                }
            </div>
            <div className='w-[30%]'>
                <Select
                    value={conditions[index].subject}
                    sx={{ width: '100%' }}
                    size='small'
                >
                    <MenuItem sx={{ fontSize: '12px' }} value='titleorcontent'>Title or Content</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='title'>Title</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='content'>Content</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='author'>Author</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='url'>URL</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='urlwithoutdomain'>URL (without domain)</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='hasattachments'>Has attachments</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='containspictures'>Contains pictures</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='containsvideo'>Contains video</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='notcontainspictures'>Doesn't contain pictures</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='notcontainsvideo'>Doesn't contain video</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='listofrss'>List of RSS categories</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='detectedlanguage'>Detected language</MenuItem>
                </Select>
            </div>
            <div className='w-[25%]'>
                <Select
                    value={conditions[index].operator}
                    sx={{ width: '100%' }}
                    size='small'
                >
                    <MenuItem sx={{ fontSize: '12px' }} value='contains'>contains</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='notcontains'>doesn't contains</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='is'>is</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='isnot'>isn't</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='beginswith'>begins with</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='endswith'>ends with</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='regexp'>matches regular expression</MenuItem>
                    <MenuItem sx={{ fontSize: '12px' }} value='notregexp'>doesn't match regular expression</MenuItem>
                </Select>
            </div>
            <div className='w-[25%]'>
                <TextField id="outlined-basic" variant="outlined" sx={{ width: '100%' }} size='small' />
            </div>
            <div className='w-[5%]'>
                {
                    conditions[index].compare &&
                    <IconButton onClick={removeCondition}>
                        <CancelIcon sx={{ fontSize: '16px' }} />
                    </IconButton>
                }
            </div>
        </div>
    )
}

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 720,
    p: 0,
};

export function StreamFilterContent(props) {
    const { modalOpen, handleCloseModal } = props;

    const [conditions, setConditions] = useState([
        {
            compare: undefined,
            subject: 'titleorcontent',
            operator: 'contains',
            q: ''
        }
    ]);

    const handleAddCondition = () => {
        const newCondition = {
            compare: 'and',
            subject: 'titleorcontent',
            operator: 'contains',
            q: ''
        }
        setConditions([...conditions, newCondition]);
    }

    return (
        <Modal
            open={modalOpen}
            onClose={() => handleCloseModal('stream_filter_content')}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalContentStyle}>
                <div className='flex flex-col gap-4 rounded-lg bg-gray-100 overflow-hidden'>
                    <div className='p-8 pb-0 text-black'>
                        <div className='flex flex-row justify-between items-center p-2'>
                            <div className='flex flex-row items-center gap-2'>
                                <img
                                    src='/img/icons/stream.png'
                                />
                                <p className='text-xl font-bold text-black'>Stream 1</p>
                            </div>
                            <IconButton>
                                <ContentCopyIcon sx={{fontSize: '16px'}}/>
                            </IconButton>
                        </div>
                        <div className='flex flex-col gap-2 p-8 bg-white rounded-md'>
                            <div className='flex flex-row items-center justify-between'>
                                <p className='font-bold'>Filter Level</p>
                                <div className='flex flex-row'>
                                    <p className='p-2 px-4 border border-1 border-gray-300 rounded-l-md'>Stream</p>
                                    <p className='p-2 px-4 border border-1 border-gray-300'>Folder</p>
                                    <p className='p-2 px-4 border border-1 border-gray-300 rounded-r-md'>Feed</p>
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-between'>
                                <p className='font-bold'>Filter Type</p>
                                <div className='flex flex-row'>
                                    <p className='p-2 px-4 border border-1 border-gray-300 rounded-l-md'><VolumeUpOutlinedIcon />Keep only articles</p>
                                    <p className='p-2 px-4 border border-1 border-gray-300 rounded-r-md'><VolumeOffOutlinedIcon />Remove articles</p>
                                </div>
                            </div>
                            <Divider sx={{ paddingY: '8px' }} />
                            <div className='flex flex-col gap-2 my-4'>
                                {
                                    conditions.map((condition, index) => (
                                        <ConditionGroup
                                            conditions={conditions}
                                            setConditions={setConditions}
                                            index={index}
                                        />
                                    ))
                                }
                                <div className='flex flex-row items-center justify-between'>
                                    <Button sx={{ textTransform: 'none' }} onClick={handleAddCondition}>
                                        +Add condition
                                    </Button>
                                    <div className='flex flex-row items-center'>
                                        <Checkbox label />
                                        <p>Match whole words only</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='flex flex-row items-center gap-1 mt-4 text-[12px] text-gray-600'><ErrorOutlineOutlinedIcon sx={{ fontSize: '16px' }} />This change can be reverted at any time. Filtered feeds only show articles from the past 1 month.</p>
                    </div>
                    <div className='flex flex-row px-8 py-4 justify-end gap-2 bg-gray-100'>
                        <Button variant='contained' onClick={() => handleCloseModal('stream_filter_content')}>Save Filter</Button>
                        <Button onClick={() => handleCloseModal('stream_filter_content')}>Cancel</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
