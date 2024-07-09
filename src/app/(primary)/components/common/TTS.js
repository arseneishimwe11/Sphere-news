import React, { useState, useEffect } from "react";

import IconButton from '@mui/material/IconButton';

import {
    PlayCircle as PlayCircleIcon,
    PauseCircle as PauseCircleIcon
} from '@mui/icons-material';

export const TextToSpeech = (props) => {
    const {text, ...restProps} = props;

    const [isStartReading, setIsStartReading] = useState(false);
    const [utterance, setUtterance] = useState(null);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);
        u.onend = onEnd;

        setUtterance(u);

        return () => {
            synth.cancel();
        };
    }, [text]);

    const onEnd = () => {
        setIsStartReading(false);
    }

    const handlePlay = () => {
        const synth = window.speechSynthesis;

        if (!isStartReading) {
            synth.speak(utterance);
        }

        setIsStartReading(true);
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;

        synth.cancel();

        setIsStartReading(false);
    };

    return (
        <div {...restProps}>
            {
                !isStartReading && 
                    <IconButton sx={{padding: 0}} onClick={handlePlay} color="primary" size="small">
                        <PlayCircleIcon />
                    </IconButton>
            }
            {
                isStartReading && 
                    <IconButton sx={{padding: 0}} onClick={handleStop} color="primary" size="small">
                        <PauseCircleIcon />
                    </IconButton>
            }
            
        </div>
    );
};

 