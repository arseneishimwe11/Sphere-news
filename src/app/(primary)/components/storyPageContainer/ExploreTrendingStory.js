import './ExploreTrendingStory.css';
import { Grid, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const BackgroundComponent = () => {
    return (
        <div className="background">
            <h2>Explore trending stories</h2>
            <p>
                Variation der Passages des Lorem Ipsum, aber der Haupttei erlitt Anderungen in irgendeiner Form, durch.
            </p>
        </div>
    )
}

const StoryComponent = (props) => {
    const router = useRouter();

    const { img_src, author, title } = props.data;
    return (
        <div className='storycomponentcontainer'>
            <img src={img_src} className="w-[50%]" />
            <div className='componentcontent' >
                {/* <div className="flex flex-row items-center gap-2"> */}
                <Grid container className="items-center">
                    <Grid item sm={12} md={3}>
                        <img src={author.avartar} />
                    </Grid>
                    <Grid item sm={12} md={9}>
                        <div className="flex flex-col items-start">
                            <h6>{author.name}</h6>
                            <span>{author.time}</span>
                        </div>
                    </Grid>
                </Grid>
                <h4>{title}</h4>
                <Button variant="outlined" sx={{textTransform: 'none'}} className="rounded-full border-gray-400 text-gray-400" onClick={() => router.push('/Story')}>
                    Read More
                </Button>
            </div>
        </div>
    )
}

const ExploreTrendingStory = () => {
    const data = {
        img_src: '/img/avatar/Image 172.png',
        author: {
            name: 'NATAILIE DIGRAFFINRIED',
            time: '23 AUG 2022 • 4 MIN READ',
            avartar: '/img/avatar/5.svg'
        },
        title: 'Mitterweile Lorem Ipsum Standar auch neigen dazu vorge'
    }
    return (
        <div id="exploretrendingstorypanel">
            <BackgroundComponent />
            <div className='storycomponentpanel'>
                <StoryComponent 
                    data = {data}
                />
                <StoryComponent 
                    data = {data}
                />
            </div>
        </div>
    )
}

export default ExploreTrendingStory;