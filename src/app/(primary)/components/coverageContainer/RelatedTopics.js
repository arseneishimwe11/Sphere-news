import './RelatedTopics.css';
import { Button } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const QueryItem = ({label}) => {
    return (
        <Button
            variant="contained"
            sx={{
                borderRadius: '100px',
                backgroundColor: '#E7F1F4',
                textTransform: 'none',
                color: 'black',
                fontSize: '12px',
                boxShadow: 'none',
                '&:hover': {
                    backgroundColor: '#efefef'
                }
            }}
        >
            <SearchIcon sx={{color:'#4FBAE9'}}/>
            <span>{label}</span>
        </Button>
    )
}

const q_list = ['mobile phone', 'latest computer', 'recent world', 'house renting price', 'music', 'cryptocurrency transfer fee', 'school', 'camera', 'traffic', 'war'];

export const RelatedTopics = () => {
    return (
        <div id='relatedtopicscontainer' className='cardcomponent p-4 ' className2="w-full p-4 text-black bg-white border border-gray-300 rounded-lg">
            <p className="text-[20px]">Related Topics</p>
            <div className="flex flex-wrap w-full">
                {
                    q_list.map((item, index) => (
                        <div className="m-1">
                            <QueryItem key={item} label={item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}