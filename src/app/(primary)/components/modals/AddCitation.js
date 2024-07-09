import { Button, Modal, Box } from '@mui/material';

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 380,
    p: 0,
};

export function AddCitationModal(props) {
    const { modalOpen, setModalOpen } = props;

    return (
        <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalContentStyle}>
                <div className='p-4 flex flex-col gap-2 rounded-lg bg-white overflow-hidden'>
                    <div className='flex flex-col gap-2 text-[12px]'>
                        <p className='text-lg text-black font-bold'>Add Citation</p>
                    </div>
                    <div className='flex flex-col gap-2 text-[12px]'>
                        <p className='text-md text-black font-bold'>URL</p>
                        <input className='w-full p-2 outline-none border border-1 border-gray-400 rounded-md'/>
                    </div>
                    <div className='flex flex-row justify-end gap-2'>
                        <Button size='small' variant='contained' onClick={() => {setModalOpen(false);}} >Save Citation</Button>
                        <Button size='small' variant='outlined' onClick={() => {setModalOpen(false);}}>Cancel</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
