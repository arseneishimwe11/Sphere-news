import { Button, Modal, Box, Divider } from '@mui/material';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DescriptionIcon from '@mui/icons-material/Description';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MicNoneIcon from '@mui/icons-material/MicNone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 360,
    p: 0,
};

export function PreviewArticleModal(props) {
    const { isPreviewModalOpen, setIsPreviewModalOpen } = props;

    return (
        <Modal
            open={isPreviewModalOpen}
            onClose={() => setIsPreviewModalOpen(false)}
        >
            <Box sx={modalContentStyle}>
                <div className='flex flex-col rounded-lg bg-white overflow-hidden'>
                    <div className='p-4 pb-0'>
                        <div className='flex flex-row gap-2 items-start'>
                            <img 
                                src='/img/news/sports.png'
                                alt=''
                                className='border border-1 border-gray-800 rounded-md w-[40%]'
                            />
                            <div className='text-[14px] font-bold w-[60%]'>
                                <p className='text-[16px]'>BloombergBusinessweek</p>
                                <p>Fake Meat Was Supposed to Save the World. It Became Just Another Fad</p>
                                <p className='text-gray-500 text-[12px]'>
                                    <HeadphonesIcon sx={{fontSize: '16px'}}/>
                                    <span>29 Mins</span>
                                </p>
                            </div>
                        </div>
                        <Divider sx={{marginY: '8px'}}/>
                        <p>Beyond Meat and Impossible Foods wanted to upend the world's $1 trillion meat industry. But plant-based meat is turning out to be a flop.</p>
                        <Divider sx={{marginY: '8px'}}/>
                            <p className='text-[14px]'>
                                <MicNoneIcon />
                                Narrated by Lauren Fortgang
                            </p>
                            <p className='text-[14px]'>
                                <AccessTimeIcon />
                                Published 1y ago
                            </p>
                        <Divider sx={{marginY: '8px'}}/>
                    </div>
                    <div className='flex flex-row p-4 pt-0 justify-between gap-2'>
                        <Button 
                            variant='contained' 
                            sx={{
                                backgroundColor: '#eee',
                                color: '#4FBAE9',
                                width: '45%',
                                textTransform: 'none'
                            }} 
                            onClick={() => setIsPreviewModalOpen(false)}
                        >
                            <PlayArrowIcon />
                            Preview
                        </Button>
                        <Button 
                            variant='contained' 
                            sx={{
                                backgroundColor: '#eee',
                                color: '#4FBAE9',
                                width: '45%',
                                textTransform: 'none'
                            }} 
                            onClick={() => setIsPreviewModalOpen(false)}
                        >
                            <DescriptionIcon />
                            Read Stories
                        </Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
