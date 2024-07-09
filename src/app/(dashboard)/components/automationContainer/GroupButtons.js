import { useState } from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import { Button } from "@mui/material";

const GroupButtons = (props) => {
    const originalButtons = [
        { label: "Stream", key: "one" },
        { label: "Folder", key: "two" },
        { label: "Feed", key: "three" }
    ];

    const [buttons, setButtons] = useState(props.buttons ?? originalButtons);
    const [selectedButton, setSelectedButton] = useState(null);
    const handleGroupSelect = (index) => {
        setSelectedButton(index);
    };

    return (
        <ButtonGroup size="small" aria-label="small button group">
            {buttons.map((button, index) => (
                <Button
                    key={button.key}
                    onClick={() => handleGroupSelect(index)}
                    sx={selectedButton === index ?
                        { color: "#6A93C3", backgroundColor: "#F2FCFB", borderBlockColor: "#A8B9BC", fontWeight: 'bold', padding: "15px", textTransform: 'none' } :
                        { color: "#444", backgroundColor: "white", borderBlockColor: "#AAA", fontWeight: 'bold', padding: "15px", textTransform: 'none' }
                    }
                >
                    <div>
                        {props.icons && props.icons[index]}
                        {button.label}
                    </div>
                </Button>
            ))}
        </ButtonGroup>
    );
}

export default GroupButtons;