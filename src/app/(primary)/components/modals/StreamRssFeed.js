import { Button, Modal, Box, TextField } from '@mui/material';

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    p: 0,
};

export function StreamRssFeedModal(props) {
    const { modalOpen, handleCloseModal } = props;

    return (
        <Modal
            open={modalOpen}
            onClose={() => handleCloseModal('stream_rss_feed')}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalContentStyle}>
                <div className='flex flex-col rounded-lg bg-white overflow-hidden'>
                    <div className='flex flex-col gap-2 p-8 text-[12px]'>
                        <p className='my-2 text-[16px] font-bold'>Stream 1 - RSS Feed</p>
                        <div>
                            <p className='font-bold'>RSS Feed</p>
                            <TextField id="outlined-basic" variant="outlined" sx={{ width: '100%'}} size='small'/>
                        </div>
                        <div>
                            <p className='font-bold'>JSON Feed*</p>
                            <TextField id="outlined-basic" variant="outlined" sx={{ width: '100%'}} size='small'/>
                        </div>
                        <p>Copy this URL to your clipboard and paste it into your RSS enabled application</p>
                        <p>*JSON Feed is relatively new standard. Check if it is supported by your application.</p>
                    </div>
                    <div className='flex flex-row px-8 py-4 justify-end gap-2 bg-gray-100'>
                        <Button variant='contained' onClick={() => handleCloseModal('stream_rss_feed')}>Cancel</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
