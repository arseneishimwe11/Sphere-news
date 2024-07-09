'use client'

import { useState } from "react";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

const ParagraphTableHeaderGroupButton = () => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        setSelectedButton(button);
    }
    return (
        <div className="m-4 flex items-center">
            <ButtonGroup color='primary' className="mr-4">
                <Button
                    variant={selectedButton === 'button1' ? 'contained' : 'outlined'}
                    onClick={() => handleButtonClick('button1')}
                >
                    D
                </Button>
                <Button
                    variant={selectedButton === 'button2' ? 'contained' : 'outlined'}
                    onClick={() => handleButtonClick('button2')}
                >
                    W
                </Button>
                <Button
                    variant={selectedButton === 'button3' ? 'contained' : 'outlined'}
                    onClick={() => handleButtonClick('button3')}
                >
                    M
                </Button>
            </ButtonGroup>
            <IconButton className="mr-4">
                <ShareOutlinedIcon />
            </IconButton>
        </div>
    );
}

export default ParagraphTableHeaderGroupButton;