import { useRouter } from 'next/navigation';
import './CreateComment.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Login from '@/app/(Login)/Login/page';
import { useState } from 'react';

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 560,
    p: 0,
};
const AttachButton = (props) => {
    const { img_url, title } = props;

    return (
        <div className="flex flex-row items-center gap-2 text-gray-600 dark:text-gray-400 hover:cursor-pointer">
            <img src={img_url} className="dark:invert" />
            <span>{title}</span>
        </div>
    )
}

const CreateComment = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);

    const handleCloseModal = () => {
        setModalOpen(false);
    }

    return (
        <div className="createcomponentcontainer">
            <div id="title">
                <img src="/img/icons/bell.svg" />
                <a onClick={()=>router.push('/Login')}>Sign In</a>
                <span>•</span>
                <a onClick={()=>router.push('/Register')}>Create an Account</a>
            </div>
            <div id="body">
                <div className="panel">
                    <div className="flex flex-wrap items-start gap-2">
                        <img 
                            src="/img/avatar/8.png"
                            className="w-[66px] rounded-full"
                        />
                        <div className="flex-grow flex flex-col bg-[#E7F0F5] rounded-xl">
                            <textarea 
                                className="p-4 bg-[#E7F0F5] rounded-t-xl" 
                                placeholder="Share Something..."
                                onClick={() => setModalOpen(true)}
                            />
                            <div className="flex flex-row items-center justify-end px-4 py-2 gap-4 rounded-b-xl">
                                <img 
                                    src="/img/icons/smile_blue.svg"
                                    className="hover:cursor-pointer"
                                />
                                <img 
                                    src="/img/icons/send_blue.svg"
                                    className="hover:cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[1px] mt-4 bg-gray-400"/>
                    <div className="flex flex-wrap gap-4 justify-start">
                        <AttachButton img_url='/img/icons/image.svg' title='Image'/>
                        <AttachButton img_url='/img/icons/camera.svg' title='Video'/>
                        <AttachButton img_url='/img/icons/pinner.svg' title='Attachment'/>
                        <AttachButton img_url='/img/icons/hash.svg' title='Hashtag'/>
                        <AttachButton img_url='/img/icons/@.svg' title='Mention'/>
                    </div>
                </div>
            </div>
            <Modal
                open={modalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalContentStyle}>
                    <Login />
                </Box>
            </Modal>
        </div>            
    )
}

export default CreateComment;