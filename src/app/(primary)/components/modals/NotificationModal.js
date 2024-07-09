import { useState } from 'react';
import { Button, Modal, Box, Checkbox } from '@mui/material';

const modalContentStyle = {
    width: 320,
    /* For styling scroll bar */
    'div.overflow-y-auto::-webkit-scrollbar': {
        width: '4px'
    },

    'div.overflow-y-auto::-webkit-scrollbar-track': {
        background: '#CFDBE3'
    },

    'div.overflow-y-auto::-webkit-scrollbar-thumb': {
        backgroundColor: '#2EA9DF',
    }
};

const NotifyItem = (props) => {
    const { item: { category, title, notify_at } } = props;
    return (
        <div className='text-[12px]'>
            <p>{category}</p>
            <p>{title}</p>
            <p>{notify_at}</p>
        </div>
    )
}

const data = [
    { 
        category: 'LIKE',
        title: 'Joe liked your comment "I think tesla is undervalued"',
        notify_at: 'now'
    },
    { 
        category: 'COMMENT',
        title: 'Joe liked your comment "I think tesla is undervalued"',
        notify_at: '42m ago'
    },
    { 
        category: 'CONNECTION',
        title: 'Joe liked your comment "I think tesla is undervalued"',
        notify_at: 'Apr 15, 2024 - 9:39PM'
    }
]

export function NotificationModal(props) {

    return (
        <Box sx={modalContentStyle}>
            <div className='flex flex-col rounded-lg bg-white overflow-hidden'>
                <div className='flex flex-row items-center p-4 gap-2 bg-gray-100'>
                    <p>Hi, <b>Joe</b></p>
                </div>
                <div className='flex flex-col gap-4 p-4 max-h-[240px] overflow-y-auto'>
                    <p className='text-black font-bold'>Notifications</p>
                    {
                        data.map((item) => (
                            <NotifyItem 
                                key = {item.title}
                                item = {item}
                            />
                        ))
                    }
                </div>
                <div className='flex flex-row items-center p-4 gap-2 bg-gray-100'>
                    <Button onClick={() => setModalOpen(false)} sx={{textTransform: 'none'}}>My Account</Button>
                </div>
            </div>
        </Box>
    )
}
