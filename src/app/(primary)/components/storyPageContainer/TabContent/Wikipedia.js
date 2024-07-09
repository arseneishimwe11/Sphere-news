import { Grid } from "@mui/material"

const PhotoCard = (props) => {
    return (
        <>
            <img 
                src="/img/news/Image3.png"
                className="w-full"
            />
            <p className="text-[10px] my-2">By Great Landscape</p>
        </>
    )
}

export const Wikipedia = () => {
    return (
        <div className="w-full text-[#fff] bg-[#fff] rounded-lg overflow-hidden">
            <div className="w-full aspect-[3/1] bg-[url('/img/news/Image3.png')] relative">
                <div className="bg-[rgb(0,0,0,0.3)] w-full h-full absolute"></div>
                <div className="text-center top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] absolute">
                    <p className="text-[32px] font-bold">Nature</p>
                    <p className="text-[12px]">See the first five lego sets designer in a competition anyone can enter lego sets designer five lego sets designer in a competition</p>
                </div>
                <div className="flex flex-row justify-between px-2 w-full bottom-2 absolute">
                    <p className="text-[12px]">Underhill, England</p>
                    <p className="text-[10px]">Photo by Great Landscape</p>
                </div>
            </div>
            <Grid container className="p-4 text-[#000] text-[12px]" spacing={2}>
                <Grid item xs={12} md={4} className="text-[12px]">
                    <p>See the first five lego sets designer in a competition anyone sets designer in a competition anyon can enter lego sets designer five lego sets designer in a competition</p>
                    <p className="mt-2">Competition anyone sets designer in a competition See the first five lego sets designer in a  anyon can enter lego sets designer five lego sets designer in a competition</p>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img 
                        src="/img/news/Image3.png"
                        className="w-full"
                    />
                    <p className="text-[10px] my-2">Photo by Great Landscape</p>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="flex flex-col w-full gap-2">
                        <p>Did you mean?</p>
                        <div className="flex flex-col">
                            <a href="#" className="underline text-blue-900">Nature, disambiguation</a>
                            <a href="#" className="underline text-blue-900">Nature magazine</a>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="w-[50%]">
                                <PhotoCard />
                            </div>
                            <div className="w-[50%]">
                                <PhotoCard />
                            </div>
                        </div>
                        <p>See the first five lego sets designer in a competition anyone.</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}