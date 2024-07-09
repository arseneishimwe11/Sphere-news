import { Button, Modal, Box, TextField } from '@mui/material';

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 320,
    p: 0,
};

export function StreamRenameModal(props) {
    const { modalOpen, handleCloseModal } = props;

    return (
        <Modal
            open={modalOpen}
            onClose={() => handleCloseModal('stream_rename')}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalContentStyle}>
                <div className='flex flex-col gap-4 rounded-lg bg-white overflow-hidden'>
                    <div className='p-8'>
                        <p>Custom title:</p>
                        <TextField id="outlined-basic" variant="outlined" sx={{ width: '100%'}} size='small'/>
                    </div>
                    <div className='flex flex-row px-8 py-4 justify-end gap-2 bg-gray-100'>
                        <Button variant='contained' onClick={() => handleCloseModal('stream_rename')}>Save</Button>
                        <Button onClick={() => handleCloseModal('stream_rename')}>Cancel</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
