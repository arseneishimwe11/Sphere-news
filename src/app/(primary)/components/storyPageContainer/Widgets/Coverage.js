import { useRouter } from "next/navigation";

import { Button } from "@mui/material";

const MoreCoverageItem = (props) => {
    const { supporter_logo, supporter_name, time, title, img_src } = props;

    return (
        <div className="flex flex-row">
            <div className="w-[75%]">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <img 
                            src={supporter_logo}
                        />
                        <h6 className="mx-2 text-[12px] text-gray-500">{supporter_name} - {time}</h6>
                    </div>
                    <h6 className="mt-2 text-[14px] text-[#000]">{title}</h6>
                </div>
            </div>
            <div className="w-[25%]">
                <img 
                    src={img_src}
                    className="w-full h-full rounded-xl"
                />
            </div>
        </div>
    )
}

export const MoreCoverageComponent = () => {
    const router = useRouter();

    return (
        <div className="w-full p-[1px] bg-gradient-to-b from-[#F7AF64] to-[#6FC2E3] rounded-xl">
            <div className="flex flex-col gap-4 p-4 pb-8 bg-gradient-to-b from-[#FBE2C8] to-[#C9EEFE] rounded-xl">
                <div className="flex flex-row items-center">
                    <img 
                        src="/img/icons/sbook.svg"
                    />
                    <h4 className="flex-grow mx-1 text-lg text-gray-900 font-bold">More Coverage</h4>
                    <Button 
                        variant="contained"
                        sx={{
                            paddingX: '8px',
                            paddingY: '2px',
                            backgroundColor: 'white',
                            color: 'black',
                            borderRadius: '100px',
                            fontSize: '10px',
                            textTransform: 'none',
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#efefef'
                            }
                        }}
                        onClick={() => router.push('/Coverage')}
                    >
                        Full Coverage
                    </Button>
                </div>
                <div className="w-full rounded-xl overflow-hidden bg-[#000] relative">
                    <img 
                        src="/img/news/discussion.png"
                        className="opacity-[0.9]"
                    />
                    <div className="flex flex-col w-full p-4 text-[#fff] absolute bottom-0">
                        <h6 className="text-[12px]">
                            <span className="p-1 px-2 bg-[#F9871A] rounded-[4px]">S</span>
                            <span className="mx-2">The Comeback • 2 Hours Ago</span>
                        </h6>
                        <p className="text-[14px] my-2">Abgelenkt wird, wenn er sich ein Lay ansieht Der Punkt Lorem Abgele wird ansieht Der Punkt Lorem</p>
                        <div className="flex flex-row items-center gap-4">
                            <div className="flex flex-row items-center">
                                <img 
                                    src="/img/icons/thumbs_up_white.svg"
                                />
                                <span className="text-[12px] mx-2">425</span>
                            </div>
                            <div className="flex flex-row items-center">
                                <img 
                                    src="/img/icons/thumbs_down_white.svg"
                                />
                                <span className="text-[12px] mx-2">236</span>
                            </div>
                            <div className="flex flex-row items-center">
                                <img 
                                    src="/img/icons/message.svg"
                                />
                                <span className="text-[12px] mx-2">63</span>
                            </div>
                        </div>
                    </div>
                </div>
                <MoreCoverageItem 
                    supporter_logo="/img/icons/source/ap.png"
                    supporter_name="The Associated Press"
                    time="4h ago"
                    title="Abgelenkt wird, wenn er sich Lay ansient Der Punkt Lorem..."
                    img_src="/img/news/discussion.png"
                />
                <MoreCoverageItem 
                    supporter_logo="/img/icons/source/ustoday.png"
                    supporter_name="USA Today"
                    time="4h ago"
                    title="Handvoll Kunstsaten welche das Lorem Ipsum glaubw..."
                    img_src="/img/news/discussion2.png"
                />
                <MoreCoverageItem 
                    supporter_logo="/img/icons/source/ustoday.png"
                    supporter_name="USA Today"
                    time="4h ago"
                    title="Abgelenkt wird, wenn er sich Lay ansient Der Punkt Lorem..."
                    img_src="/img/news/gig.png"
                />
            </div>
        </div>
    )
}
