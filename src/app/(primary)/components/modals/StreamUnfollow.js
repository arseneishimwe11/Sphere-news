import { Button, Modal, Box } from '@mui/material';

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 320,
    p: 0,
};

export function StreamUnfollowModal(props) {
    const { modalOpen, handleCloseModal } = props;

    return (
        <Modal
            open={modalOpen}
            onClose={() => handleCloseModal('stream_unfollow')}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalContentStyle}>
                <div className='flex flex-col gap-4 rounded-lg bg-white overflow-hidden'>
                    <p className='text-[12px] p-8'>Unfollow all feeds in this stream?</p>
                    <div className='flex flex-row px-8 py-4 justify-end gap-2 bg-gray-100'>
                        <Button variant='contained' onClick={() => handleCloseModal('stream_unfollow')}>Yes</Button>
                        <Button onClick={() => handleCloseModal('stream_unfollow')}>No</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
