import React from 'react';
import Carousel from 'react-material-ui-carousel'

import './Carousel.css';

import { Paper, Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

function Item(props)
{
    const {item} = props;
    return (
        <Paper>
            <img 
                src={item.img_src}
                className='w-full aspect-[2/1]'
            />
            <div 
                className='w-full h-full absolute top-0 left-0 bg-gradient-to-r from-[#006ABD] to-[transparent] z-[1]'
            />
            <div className='flex flex-col p-8 pr-[50%] w-full h-full gap-2 z-[2] text-[#fff] top-0 absolute'>
                <h6 className='text-[18px]'>{item.location}</h6>
                <h6 className='text-[20px]'>{item.title}</h6>
                <div className='flex flex-row justify-between'>
                    <span className='my-2'>{item.time}</span>
                </div>
            </div>
        </Paper>
    )
}

export function CustomCarousel(props)
{
    var items = [
        {
            location: "AMERICAS",
            title: "Probably, Certainly this is the most random thing you have ever seen!",
            time: '50 minutes ago',
            img_src: 'img/news/meeting2.png'
        },
        {
            location: "EUROPE",
            title: "Supertanker chartered by Polish firm to load Venezuelan oil for China",
            time: '48 minutes ago',
            img_src: 'img/news/meeting3.png'
        },
        {
            location: "AMERICAS",
            title: "Probably, Certainly this is the most random thing you have ever seen!",
            time: '50 minutes ago',
            img_src: 'img/news/meeting2.png'
        },
        {
            location: "EUROPE",
            title: "Supertanker chartered by Polish firm to load Venezuelan oil for China",
            time: '48 minutes ago',
            img_src: 'img/news/meeting3.png'
        }
    ]

    return (
        <Carousel
            fullHeightHover={true}
            navButtonsAlwaysVisible={true}
            autoPlay={false}
            navButtonsWrapperProps={{ 
                style: {
                    bottom: '12px',
                    height: 'unset',
                    left: 'unset',
                    right: '28px',
                    top: 'unset',
                }
            }} 
            NavButton={({onClick, className, style, next, prev}) => {
                return (
                    <Button onClick={onClick} sx={{
                        marginRight: `${prev && "48px"}`,
                        zIndex: `${next && 10}`,
                        borderRadius: '200px',
                        padding: '8px',
                        minWidth: 'unset',
                        backgroundColor: '#000',
                        opacity: 0.7
                    }}>
                        {next && <ArrowForwardIosIcon sx={{color: '#fff', fontSize: '16px'}}/>}
                        {prev && <ArrowBackIosNewIcon sx={{color: '#fff', fontSize: '16px'}}/>}
                    </Button>
                )
            }}
            IndicatorIcon={<HorizontalRuleIcon sx={{fontSize: '32px'}}/>}
            indicatorContainerProps={{
                style: {
                    position: 'absolute',
                    zIndex: 100,
                    bottom: '0',
                    left: '28px',
                    width: 'unset'
                }
            }}
            indicatorIconButtonProps={{
                style:{
                    color: '#afafaf'
                }
            }}
            activeIndicatorIconButtonProps={{
                style:{
                    color: '#fff'
                }
            }}
            sx={{
                borderRadius: '12px'
            }}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
