import { Button, Modal, Box, TextField, Divider, Select, MenuItem } from '@mui/material';

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    p: 0,
};

export function StreamCreateRuleModal(props) {
    const { modalOpen, handleCloseModal } = props;

    return (
        <Modal
            open={modalOpen}
            onClose={() => handleCloseModal('stream_create_rule')}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalContentStyle}>
                <div className='flex flex-col rounded-lg bg-white overflow-hidden'>
                    <div className='flex flex-col gap-2 p-8 py-4 text-[12px]'>
                        <p className='my-2 text-[16px] font-bold'>New Rule</p>
                        <div className='flex flex-row items-center justify-between my-2'>
                            <p className='font-bold text-[16px]'>Rule Level</p>
                            <div className='flex flex-row text-[12px]'>
                                <p className='p-2 px-4 border border-1 border-gray-300 rounded-l-md'>Stream</p>
                                <p className='p-2 px-4 border border-1 border-gray-300'>Folder</p>
                                <p className='p-2 px-4 border border-1 border-gray-300 rounded-r-md'>Feed</p>
                            </div>
                        </div>
                        <TextField id="outlined-basic" variant="outlined" sx={{ width: '100%' }} size='small' placeholder='Title' />
                    </div>
                    <Divider />
                    <div className='flex flex-col gap-2 p-8 py-4 text-[12px]'>
                        <p>WHEN</p>
                        <Select
                            sx={{ width: '100%' }}
                            size='small'
                        >
                            <MenuItem sx={{ fontSize: '12px' }} value='contains'>contains</MenuItem>
                        </Select>
                        <p>THEN</p>
                        <Select
                            sx={{ width: '100%' }}
                            size='small'
                        >
                            <MenuItem sx={{ fontSize: '12px' }} value='contains'>contains</MenuItem>
                        </Select>
                        <Button variant='outlined' sx={{ width: '100%', textTransform: 'none', color: '#666', borderColor: '#666' }}>Add Action</Button>
                    </div>
                    <Divider />
                    <div className='flex flex-col gap-2 p-8 py-4 text-[12px]'>
                        <Button variant='outlined' sx={{ width: '100%', textTransform: 'none', color: '#666', borderColor: '#666' }}>Add Condition</Button>
                    </div>
                    <Divider />
                    <div className='flex flex-row px-8 py-4'>
                        <Button variant='contained' onClick={() => handleCloseModal('stream_create_rule')} sx={{ width: '100%' }}>Save</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
