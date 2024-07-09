import { useState } from 'react';
import { Button, Modal, Box, MenuItem, Select, Slider } from '@mui/material';

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    p: 0,
};

export function StreamFilterDuplicate(props) {
    const { modalOpen, handleCloseModal } = props;

    const [filterBy, setFilterBy] = useState('URL');

    const handleChange = (event) => {
        setFilterBy(event.target.value);
    };

    return (
        <Modal
            open={modalOpen}
            onClose={() => handleCloseModal('stream_filter_duplicate')}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalContentStyle}>
                <div className='flex flex-col gap-4 rounded-lg bg-gray-100 overflow-hidden'>
                    <div className='p-8 pb-0'>
                        <div className='flex flex-row items-center gap-2 p-2'>
                            <img
                                src='/img/icons/stream.png'
                            />
                            <p className='text-xl font-bold'>Stream 1</p>
                        </div>
                        <div className='flex flex-col gap-2 p-8 bg-white rounded-md'>
                            <p className='font-bold text-[12px]'>Filter duplicate articles by</p>
                            <Select
                                value={filterBy}
                                onChange={handleChange}
                                sx={{ width: '100%' }}
                                size='small'
                            >
                                <MenuItem value='URL'>Identical URLs</MenuItem>
                                <MenuItem value='identicaltitle'>Identical Title</MenuItem>
                                <MenuItem value='similartitle'>Similar Titles</MenuItem>
                                <MenuItem value='similarcontent'>Similar Content</MenuItem>
                            </Select>
                            <p className='text-gray-600 text-[12px]'>New articles will be matched against previous ones and will not be shown if they are detected as duplicates. Adjust the detection method to the spcific case. The safest option is to use the article URL.</p>
                            <div>
                                <p className='text-gray-600 text-[10px]'>COMPARE PERIOD:</p>
                                <div className='flex flex-row items-center gap-4'>
                                    <Slider defaultValue={1} valueLabelDisplay="auto" max={7}/>
                                    <p className='text-[12px] w-[52px] font-bold'>7 Days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row px-8 py-4 justify-end gap-2 bg-gray-100'>
                        <Button variant='contained' onClick={() => handleCloseModal('stream_filter_duplicate')}>Save Filter</Button>
                        <Button onClick={() => handleCloseModal('stream_filter_duplicate')}>Cancel</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
