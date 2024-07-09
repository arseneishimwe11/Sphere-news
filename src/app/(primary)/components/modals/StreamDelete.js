import { Button, Modal, Box } from '@mui/material';

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 320,
    p: 0,
};

export function StreamDeleteModal(props) {
    const { modalOpen, handleCloseModal } = props;

    return (
        <Modal
            open={modalOpen}
            onClose={() => handleCloseModal('stream_delete')}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalContentStyle}>
                <div className='flex flex-col gap-4 rounded-lg bg-white overflow-hidden'>
                    <div className='flex flex-col gap-2 p-8 text-[12px]'>
                        <p>Are you sure you want to delete this stream?</p>
                        <p className='font-bold'>Stream 1</p>
                        <p>Note: This action cannot be undone. All feeds in this stream will be unfollowed.</p>
                    </div>
                    <div className='flex flex-row px-8 py-4 justify-end gap-2 bg-gray-100'>
                        <Button variant='contained' onClick={() => handleCloseModal('stream_delete')}>Yes</Button>
                        <Button onClick={() => handleCloseModal('stream_delete')}>No</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
