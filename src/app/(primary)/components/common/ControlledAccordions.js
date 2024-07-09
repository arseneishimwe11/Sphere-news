import { useState } from 'react';

import { styled } from '@mui/material/styles';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: '0',
    backgroundColor: 'transparent',
    color: '#cbd5e1',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    '& .MuiAccordionSummary-root': {
        padding: '0 !important'
    }
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        {...props}
        expandIcon={<ArrowDropUpIcon sx={{ fontSize: '1rem', color: '#000' }} />}
    />
))(({ theme }) => ({
    flexDirection: 'row',
    justifyContent: 'start',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
    },
    '& .MuiTypography-root': {
        fontSize: '12px',
        color: '#000'
    },
    '& .MuiAccordionSummary-content': {
        flexGrow: 0,
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: '0',
}));


export function ControlledAccordions(props) {
    const [expanded, setExpanded] = useState(true);

    const { headTitle } = props;

    return (
        <Accordion expanded={expanded} onChange={() => {setExpanded(!expanded)}}>
            <AccordionSummary>
                <Typography>{headTitle}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                { props.children }
            </AccordionDetails>
        </Accordion>
    );
}
