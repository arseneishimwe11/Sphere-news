import { Drawer, IconButton } from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const data = [
    {
        logo_src: '/img/logo/source/bbc.jpg',
        content: 'CoinMarketCap API Pricing Plans'
    },
    {
        logo_src: '/img/logo/source/audio.png',
        content: 'What does it do? - WP Ultimo'
    },
    {
        logo_src: '/img/logo/source/CNN.png',
        content: 'www.nimanlab.org'
    },
    {
        logo_src: '/img/logo/source/aws.png',
        content: 'Amazon.com: flood light bulbs indoor'
    },
];

const MobileFeedDialog = (props) => {
    const { isFeedDialogOpen, setIsFeedDialogOpen } = props;
    const { setFeedSelected } = props;

    const onClickFeed = (feed) => {
        setFeedSelected(feed);
        setIsFeedDialogOpen(false);
    }

    return (
        <Drawer
            anchor='bottom'
            open={isFeedDialogOpen}
            onClose={() => setIsFeedDialogOpen(false)}
            PaperProps={{
                style: {
                    borderRadius: '12px 12px 0 0'
                }
            }}
        >
            <div className='flex flex-col rounded-t-xl bg-white p-4 gap-4'>
                <div className='flex w-full justify-between items-start'>
                    <p className="text-[20px] text-black">Tech News</p>
                    <IconButton onClick={() => setIsFeedDialogOpen(false)}>
                        <CloseOutlinedIcon />
                    </IconButton>
                </div>
                {
                    data.map((item, index) => (
                        <div key={item.content} className='flex flex-row items-center gap-2 hover:bg-gray-200' onClick={() => onClickFeed(item)}>
                            <div className="w-[10%] p-[6px] bg-gray-200 rounded-md">
                                <img 
                                    src={item.logo_src}
                                    className="w-full"
                                />
                            </div>
                            <p className="mx-2 text-[14px] flex-grow">{item.content}</p>
                            <ArrowForwardIosIcon sx={{fontSize: '16px', color: '#aaa'}}/>
                        </div>
                    ))
                }
            </div>
        </Drawer>
    )
};

export default MobileFeedDialog;