import { useState } from "react";
import { Button } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

const StartStop = ({ process }) => {
    const [status, setStatus] = useState(process);
    const handleClick = () => {
        setStatus(!status);
    }
    return (
        <Button
            onClick={handleClick}
            sx={{
                textTransform: 'none',
                color: '#333'
            }}
        >
            {status ? <PauseIcon /> : <PlayArrowOutlinedIcon />}
            {status ? "Pause" : "Resume"}
        </Button>
    );
}

export default StartStop;