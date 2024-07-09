import { useState } from 'react';
import { Button, Modal, Box, Checkbox } from '@mui/material';
import Link from 'next/link';

import { ImageUploadPreview } from '../common';

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    p: 0,
};

export function SupportModal(props) {
    const { modalOpen, setModalOpen } = props;

    const [ includeDebugInformation, setIncludeDebugInformation ] = useState(false);
    const [ includeScreenShot, setIncludeScreenShot ] = useState(false);

    return (
        <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalContentStyle}>
                <div className='flex flex-col gap-4 rounded-lg bg-white overflow-hidden'>
                    <div className='flex flex-col p-8'>
                        <div className='flex flex-col'>
                            <p className='font-bold text-black'>Your Message:</p>
                            <textarea 
                                className='p-1 border border-1 border-gray-300 rounded-md outline-none min-h-[120px]'
                            />
                            <p>Please write your message in English and allow us up to 3 business days for a response.</p>
                        </div>
                        <div className='flex flex-col gap-2 text-sm mt-8'>
                            <div className='border border-1 border-gray-200 rounded-md'>
                                <Checkbox checked={includeDebugInformation} onChange={(e) => setIncludeDebugInformation(e.target.checked)}/>Send debug information together with my message.
                                {
                                    includeDebugInformation && 
                                        <div className='bg-gray-100 p-4 text-black'>
                                            <p><b>Using Beta:&nbsp;</b>No</p>
                                            <p><b>Screen Resolution:&nbsp;</b>1920x1200</p>
                                            <p><b>Detected device type:&nbsp;</b>normal</p>
                                            <p><b>User Agent string:&nbsp;</b>Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0</p>
                                        </div>
                                }
                            </div>
                            <div className='border border-1 border-gray-200 rounded-md'>
                                <Checkbox checked={includeScreenShot} onChange={(e) => setIncludeScreenShot(e.target.checked)}/>Include screenshot.
                                {
                                    includeScreenShot &&
                                        <ImageUploadPreview />
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center px-8 py-4 gap-2 bg-gray-100'>
                        <Link className='flex-grow text-blue-500 underline' href='/#'>Check service status</Link>
                        <Button variant='contained' onClick={() => setModalOpen(false)} sx={{textTransform: 'none'}}>Send</Button>
                        <Button onClick={() => setModalOpen(false)} sx={{textTransform: 'none'}}>Close</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
