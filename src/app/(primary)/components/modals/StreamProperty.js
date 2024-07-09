import { useState } from 'react';

import { Divider, Slider, Switch, Tab, Button, Modal, Box } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ParagraphTableBarChart = () => {
    const totalSeries = {
        series: [{
            name: 'Articles Posted',
            data: [44, 55, 57, 56, 61, 58, 63, 44, 55, 57, 56, 61, 58, 63, 44, 55, 57, 56, 61, 58, 63, 44, 55, 57, 56, 61, 58, 63, 14, 24, 11]
        }, {
            name: 'Articles Read',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 15, 3, 2, 0, 5, 0, 0, 0]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 120,
                toolbar: {
                    show: false
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    endingShape: 'rounded',
                    columnWidth: '100%',
                    // borderRadius: 5
                },
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['16/11', '', '18/11', '', '20/11', '', '22/11', '', '24/11', '', '26/11', '', '28/11', '', '30/11', '', '2/12', '', '4/12', '', '6/12', '', '8/12', '', '10/12', '', '12/12', '', '14/12', '', '16/12'],
            },
            yaxis: {
                tickAmount: 3,
                labels: {
                    formatter: (val) => { return val },
                },
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val;
                    }
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left',
                fontSize: '12px',
                markers: {
                    width: 10,
                    height: 10,
                },
            },
            colors: ['#425993', '#4BBBEB'],
            stroke: {
                colors: ["transparent"],
                width: 10
            }
        }
    };
    return (
        <div id="chart">
            <ApexChart
                options={totalSeries.options}
                series={totalSeries.series}
                type="bar"
                height={240}
            />
        </div>
    );
}

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 536,
    p: 0,
};

export function StreamPropertyModal(props) {
    const { modalOpen, handleCloseModal } = props;

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Modal
            open={modalOpen}
            onClose={() => handleCloseModal('stream_property')}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalContentStyle}>
                <div className='flex flex-col gap-4 p-8 rounded-lg bg-white'>
                    <div className='flex flex-row items-center gap-2'>
                        <img
                            src='/img/icons/stream.png'
                        />
                        <p className='text-xl font-bold'>Stream 1</p>
                    </div>
                    <Divider />
                    <div>
                        <p className='text-gray-400 text-[10px]'>FOLDERS:</p>
                        <p>6</p>
                    </div>
                    <Divider />
                    <div>
                        <p className='text-gray-400 text-[10px]'>KEEP UNREAD:</p>
                        <div className='flex flex-row items-center gap-4'>
                            <Slider defaultValue={30} aria-label="Default" valueLabelDisplay="auto" max={30} sx={{ width: '50%' }} />
                            <p>30 days</p>
                            <HelpOutlineOutlinedIcon sx={{ fontSize: '16px' }} />
                        </div>
                    </div>
                    <Divider />
                    <div>
                        <p className='text-gray-400 text-[10px]'>OUTPUT STREAMS:</p>
                        <div className='flex flex-row items-center justify-between text-[12px] font-bold'>
                            <div className='flex flex-row items-center gap-2 text-gray-400'>
                                <Switch />
                                <p>RSS</p>
                                <p>JSON</p>
                                <p>HTML Clip</p>
                            </div>
                            <p>Private OPML</p>
                        </div>
                    </div>
                    <Divider />
                    <div>
                        <div className='flex flex-row items-center gap-2'>
                            <p className='text-gray-400 text-[10px]'>DUPLICATE ARTICLES:</p>
                            <HelpOutlineOutlinedIcon sx={{ fontSize: '16px' }} />
                        </div>
                        <div className='flex flex-row items-center gap-3 text-[14px] font-bold'>
                            <Switch />
                            <p>Remove duplicate articles from this stream</p>
                        </div>
                    </div>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="LAST MONTH" value="1" sx={{fontSize: '12px', padding: '8px'}}/>
                                <Tab label="WEEKDAYS" value="2"  sx={{fontSize: '12px', padding: '8px'}}/>
                                <Tab label="TIME OF DAY" value="3"  sx={{fontSize: '12px', padding: '8px'}}/>
                            </TabList>
                        </Box>
                        <TabPanel value="1" sx={{ paddingY: '0px' }}>
                            <ParagraphTableBarChart />
                        </TabPanel>
                        <TabPanel value="2" sx={{ paddingY: '0px' }}>
                            Item Two
                        </TabPanel>
                        <TabPanel value="3" sx={{ paddingY: '0px' }}>
                            Item Three
                        </TabPanel>
                    </TabContext>
                    <div className='flex flex-row justify-between'>
                        <Button variant='outlined' onClick={() => handleCloseModal('stream_property')}>Cancel</Button>
                        <Button variant='contained' onClick={() => handleCloseModal('stream_property')}>Save</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
