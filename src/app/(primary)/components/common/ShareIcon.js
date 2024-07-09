import { useState } from 'react';
import './ShareIcon.css';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    p: 0,
};

export function ShareIcon(props) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
    }

    return(
        <>
        <Tooltip title="..." enterDelay={300} leaveDelay={0}>
            <IconButton aria-label="delete" className="p-1" onClick={handleOpenModal}>
                <img 
                    src='img/icons/upload.png'
                    className='transition duration-300 hover:cursor-pointer dark:invert'
                />
            </IconButton>
        </Tooltip>
        <Modal
            open={modalOpen}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ShareModalContent
                img_src='/img/news/meeting4.png'
                title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                channel='POLITICO'
                reporter="Meridith"
                share_link='http://www.google.com'
                setModalOpen={setModalOpen}
            />
        </Modal>
        </>
    )
}

const ShareModalContent = (props) => {
    const {img_src, title, channel, reporter, share_link} = props;
    
    const [isLinkCopied, setIsLinkCopied] = useState(false);

    const handleCopyLink = () => {
        setIsLinkCopied(true);
        navigator.clipboard.writeText(share_link);
    }

    return (
        <Box sx={modalContentStyle}>
            <div className='sharemodalcontent'>
                <h4>SHARE</h4>
                <div className='flex gap-2'>
                    <div className='w-[30%]'>
                        <img src={img_src} className='w-full' />
                    </div>
                    <div className='flex flex-col gap-2 w-[70%]'>
                        <h6 className='sharetitle'>{title}</h6>
                        <p className='sharechannelreporter'><span>{channel} - By {reporter}</span></p>
                    </div>
                </div>
                <Button 
                    sx={{
                        textTransform: 'none', backgroundColor: '#4167B2', color: '#fff', justifyContent: 'left',
                        '&:hover' : {
                            backgroundColor: "#ccc"
                        }
                    }} 
                    className='w-full'
                >
                    <FacebookOutlinedIcon sx={{ marginX: '16px'}}/>
                    <span>Share on Facebook</span>
                </Button>
                <Button 
                    sx={{
                        textTransform: 'none', backgroundColor: '#1DA1F3', color: '#fff', justifyContent: 'left',
                        '&:hover' : {
                            backgroundColor: "#ccc"
                        }
                    }} 
                    className='w-full'
                >
                    <TwitterIcon sx={{ marginX: '16px'}}/>
                    <span>Share on Twitter</span>
                </Button>
                <div className='sharelink'>
                    <h6>or share the link below:</h6>
                    <div>
                        <input disabled defaultValue={share_link}/> 
                        <Button sx={{textTransform:'none'}} onClick={() => handleCopyLink()}>
                            {isLinkCopied && 'Copied!'}
                            {!isLinkCopied && 'Copy Link'}
                        </Button>
                    </div>
                </div>
                <Button 
                    variant='outlined' 
                    onClick={() => props.setModalOpen(false)}
                    sx={{
                        color: '#333',
                        borderColor: '#333',
                        '&:hover': {
                            borderColor: '#ccc'
                        }
                    }}    
                    className='self-end'
                >
                    Cancel
                </Button>
            </div>
        </Box>
    )
}