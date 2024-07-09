import { useRouter } from "next/navigation";

import { Button } from "@mui/material";

import { TextToSpeech } from "../../common";

export const SummaryTabContent = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1">
                <div className="flex flex-row items-center gap-1 p-[4px] rounded-sm bg-[#EBF5FB]">
                    <img 
                        src="/img/avatar/Image_332.png"
                        className="w-[17px] h-[17px] rounded-sm"
                    />
                    <h6 className="text-[10px] text-gray-600">John Agger</h6>
                </div>
                <TextToSpeech className='w-[24px] h-[24px] rounded-sm' text='6 practical tips for amazon shoppers this Earth Month and beyond'/>
                <div className="p-[4px] rounded-sm bg-[#EBF5FB]">
                    <img 
                        src="/img/icons/earphone_blue.svg"
                        className="w-[17px] rounded-sm"
                    />
                </div>
                <div 
                    className="flex flex-row items-center gap-1 p-[4px] rounded-sm bg-[#EBF5FB]"
                    onClick={() => router.push('/Story/Comment')}
                >
                    <img 
                        src="/img/icons/chats_blue.svg"
                        className="w-[17px] h-[17px] rounded-sm"
                    />
                    <span className="text-[10px] text-gray-600">234</span>
                </div>
            </div>
            <h6 className="">Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</h6>
            <p className=" text-gray-600">Ungewollten Wörter stehen. Viele der Gener atoren im Internet neigen dazu, vorgefertigte Stücke zu wiede rholen was es nötig machte einen richtigen Generator entwickeln.</p>
            <p className=" text-gray-900">Dicta sunt explicabo. Nemo enim ipsam volup tatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.</p>
            <div className="flex flex-row gap-2 justify-between">
                <Button 
                    variant="outlined" 
                    sx={{
                        borderRadius: '4px',
                        border: '1px solid #CACACA',
                        color: '#4FBAE9',
                        textTransform: 'none'
                    }}
                    className="flex flex-row flex-grow items-center gap-2"
                    onClick={() => {
                        router.push('/Story/Full');
                    }}
                >
                    <img 
                        src="/img/icons/go_deeper_blue.svg"
                        className="w-[15px]"
                    />
                    Go Deeper
                </Button>
                <Button 
                    variant="outlined" 
                    sx={{
                        borderRadius: '4px',
                        border: '1px solid #CACACA',
                        minWidth: '0px'
                    }}
                >
                    <img 
                        src="/img/icons/upload.png"
                        className="w-[15px]"
                    />
                </Button>
                <Button 
                    variant="outlined" 
                    sx={{
                        borderRadius: '4px',
                        border: '1px solid #CACACA',
                        minWidth: '0px'
                    }}
                >
                    <img 
                        src="/img/icons/star.svg"
                        className="w-[15px]"
                    />
                </Button>
            </div>
            <Related_Story_Panel />
        </div>
    )
}

const Related_Story_item = (props) => {
    const {title, img_src} = props;

    return (
        <div className="flex flex-row justify-between gap-4">
            <h6 className="text-[#fff]">{title}</h6>
            <img 
                src={img_src}
                className="w-[60px] h-[60px] border border-[2px] border-[#70BFE3] rounded-xl"
            />
        </div>
    )
}

const Related_Story_Panel = () => {
    return (
        <div className="p-4 -mb-4 bg-[#4FBAE9] rounded-t-2xl relative">
            <img 
                src="/img/others/mobile_pinner.svg"
                className="top-0 left-[50%] transform translate-x-[-50%] absolute"
            />
            <Related_Story_item 
                title='Layout ansieht De Passages des Lorem Ipsum erlitt...'
                img_src='/img/news/sports.png'
            />
        </div>
    )
}
