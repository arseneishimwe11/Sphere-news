import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import { Button, Paper } from '@mui/material';
import { useState } from 'react';
import ElonMusk from './ElonMusk';

const AiFeedSearch = ({ searchText }) => {
    const CustomDiv = ({ content, setShowElonMusk }) => {
        const [hoverStatus, setHoverStatus] = useState(false);
        return (
            <div className='flex flex-row gap-[10px] items-start px-1 py-3' style={{ cursor: "pointer", backgroundColor: hoverStatus ? "#AAA" : "#FFF" }} onClick={() => { !!setShowElonMusk && setShowElonMusk(true) }} onMouseEnter={() => setHoverStatus(true)} onMouseLeave={() => setHoverStatus(false)}>
                {content}
            </div>
        );
    }
    const [showElonMusk, setShowElonMusk] = useState(false);
    return (
        <>
            {!showElonMusk &&
                <Paper elevation={3} sx={{ borderTopColor: "green", borderTopWidth: "5px", maxHeight: "500px", overflowY: 'scroll' }}>
                    <CustomDiv content={
                        <>
                            <TaskAltOutlinedIcon />
                            <p className='font-bold flex-grow'>elo</p>
                            <Button variant='outlined' sx={{ borderRadius: "20px", color: "black", borderColor: "black", padding: "1px 20px" }}>Basic Keyword match</Button>
                        </>
                    }
                        setShowElonMusk={setShowElonMusk}

                    />
                    <CustomDiv content={
                        <>
                            <img src='img/icons/feed/company.svg' />
                            <div className='flex-grow'>
                                <p>Twitter, Inc. (Alias: <span className='font-bold'>Elo</span>n Musk's X)</p>
                                <p>social media company formerly in the United States</p>
                            </div>
                            <Button variant='outlined' sx={{ borderRadius: "20px", color: "black", borderColor: "black", padding: "1px 20px" }}>Ai Model</Button>
                        </>
                    }
                        setShowElonMusk={setShowElonMusk}

                    />
                    <CustomDiv content={
                        <>
                            <PersonOutlinedIcon />
                            <div className='flex-grow'>
                                <p><span className='font-bold'>Elo</span>n Musk</p>
                                <p>American business magnate</p>
                            </div>
                            <Button variant='outlined' sx={{ borderRadius: "20px", color: "black", borderColor: "black", padding: "1px 20px" }}>Ai Model</Button>
                        </>
                    }
                        setShowElonMusk={setShowElonMusk}
                    />
                    <CustomDiv content={
                        <>
                            <ViewInArOutlinedIcon />
                            <div className='flex-grow'>
                                <p>Oxaliplatin (Alias: <span className='font-bold'>Elo</span>xatin)</p>
                                <p>pharmaceutical drug</p>
                            </div>
                            <Button variant='outlined' sx={{ borderRadius: "20px", color: "black", borderColor: "black", padding: "1px 20px" }}>Ai Model</Button>
                        </>
                    }
                        setShowElonMusk={setShowElonMusk}

                    />
                    <CustomDiv content={
                        <>
                            <img src='img/icons/feed/company.svg' />
                            <div className='flex-grow'>
                                <p><span className='font-bold'>Elo</span>n University</p>
                                <p>private liberal arts university in Elon, North Carolina, United States</p>
                            </div>
                            <Button variant='outlined' sx={{ borderRadius: "20px", color: "black", borderColor: "black", padding: "1px 20px" }}>Ai Model</Button>
                        </>
                    }
                        setShowElonMusk={setShowElonMusk}

                    />
                    <CustomDiv content={
                        <>
                            <img src='img/icons/feed/company.svg' />
                            <div className='flex-grow'>
                                <p><span className='font-bold'>Elo</span></p>
                                <p>American business magnate</p>
                            </div>
                            <Button variant='outlined' sx={{ borderRadius: "20px", color: "black", borderColor: "black", padding: "1px 20px" }}>Ai Model</Button>
                        </>
                    }
                        setShowElonMusk={setShowElonMusk}

                    />
                    <CustomDiv content={
                        <>
                            <ViewInArOutlinedIcon />
                            <div className='flex-grow'>
                                <p>Oxaliplatin (Alias: <span className='font-bold'>Elo</span>xatin)</p>
                                <p>pharmaceutical drug</p>
                            </div>
                            <Button variant='outlined' sx={{ borderRadius: "20px", color: "black", borderColor: "black", padding: "1px 20px" }}>Ai Model</Button>
                        </>
                    }
                        setShowElonMusk={setShowElonMusk}

                    />
                    <CustomDiv content={
                        <>
                            <img src='img/icons/feed/company.svg' />

                            <div className='flex-grow'>
                                <p><span className='font-bold'>Elo</span>n University</p>
                                <p>private liberal arts university in Elon, North Carolina, United States</p>
                            </div>
                            <Button variant='outlined' sx={{ borderRadius: "20px", color: "black", borderColor: "black", padding: "1px 20px" }}>Ai Model</Button>
                        </>
                    }
                        setShowElonMusk={setShowElonMusk}

                    />
                    <CustomDiv content={
                        <>
                            <img src='img/icons/feed/company.svg' />

                            <div className='flex-grow'>
                                <p><span className='font-bold'>Elo</span></p>
                                <p>American business magnate</p>
                            </div>
                            <Button variant='outlined' sx={{ borderRadius: "20px", color: "black", borderColor: "black", padding: "1px 20px" }}>Ai Model</Button>
                        </>
                    }
                        setShowElonMusk={setShowElonMusk}

                    />
                    <CustomDiv content={
                        <>
                            <ViewInArOutlinedIcon />
                            <div className='flex-grow'>
                                <p>Oxaliplatin (Alias: <span className='font-bold'>Elo</span>xatin)</p>
                                <p>pharmaceutical drug</p>
                            </div>
                            <Button variant='outlined' sx={{ borderRadius: "20px", color: "black", borderColor: "black", padding: "1px 20px" }}>Ai Model</Button>
                        </>
                    }
                        setShowElonMusk={setShowElonMusk}

                    />
                    <CustomDiv content={
                        <>
                            <img src='img/icons/feed/company.svg' />

                            <div className='flex-grow'>
                                <p><span className='font-bold'>Elo</span>n University</p>
                                <p>private liberal arts university in Elon, North Carolina, United States</p>
                            </div>
                            <Button variant='outlined' sx={{ borderRadius: "20px", color: "black", borderColor: "black", padding: "1px 20px" }}>Ai Model</Button>
                        </>
                    }
                        setShowElonMusk={setShowElonMusk}
                    />
                    <CustomDiv content={
                        <>
                            <img src='img/icons/feed/company.svg' />
                            <div className='flex-grow'>
                                <p><span className='font-bold'>Elo</span></p>
                                <p>American business magnate</p>
                            </div>
                            <Button variant='outlined' sx={{ borderRadius: "20px", color: "black", borderColor: "black", padding: "1px 20px" }}>Ai Model</Button>
                        </>
                    }
                        setShowElonMusk={setShowElonMusk}
                    />
                </Paper>
            }
            {showElonMusk && <ElonMusk />}
        </>
    );
}

export default AiFeedSearch;