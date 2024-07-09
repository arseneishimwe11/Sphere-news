import React, { useState } from 'react';
import styled from 'styled-components';
import HelpIcon from '@mui/icons-material/Help';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th, td {
    border-bottom: 1px solid #dddddd;
    padding: 15px;
  }

  th {
    color: #1C1C1C;
    text-align: left;
  }

  td {
    text-align: center;
  }

  @media (max-width: 1370px) {
    /* Adjust the breakpoint as needed */
    th,
    td {
      padding: 10px;
      font-size: 14px;
    }
  }

  @media (max-width: 552px) {
    /* Adjust the breakpoint as needed */
    th,
    td {
      padding: 5px;
      font-size: 10px;
    }
  }
`;

const PricingPlanTable = () => {
    const [showAllRows, setShowAllRows] = useState(false);

    const data = [
        // Your table data here
        // Assuming you have an array of 20 rows
        {
            column1: <p className='items-center flex flex-row'>Search Type</p>,
            column2: 'Keyword Search',
            column3: 'Keyword Search',
            column4: 'Keyword Search',
            column5: 'Neutal Search',
        },
        {
            column1: <p className='items-center flex flex-row'>Free Usage Tier&nbsp;<span><HelpIcon className='text-[#9FCDE3]' /></span></p>,
            column2: <div className='flex flex-col'>
                <p>10k requests/mo</p>
                <p>1 million records</p>
            </div>,
            column3: <div className='flex flex-col'>
                <p>10k requests/mo</p>
                <p>100k records</p>
            </div>,
            column4: <p className='text-[#2F97D2] text-[16px]'>Contact Sales</p>,
            column5: <p className='text-[#006BBC] text-[16px]'>Contact Sales</p>,
        },
        {
            column1: <p className='items-center flex flex-row'>Additional records</p>,
            column2: <CloseIcon />,
            column3: <p>$040/1,000 records/mo</p>,
            column4: <p className='text-[#2F97D2] text-[16px]'>Contact Sales</p>,
            column5: <p className='text-[#006BBC] text-[16px]'>Contact Sales</p>,
        },
        {
            column1: <p className='items-center flex flex-row'>Primary Hosting Location Availability</p>,
            column2: 'US, UK, EU West',
            column3: 'US, UK, EU West',
            column4: 'Global',
            column5: 'Global',
        },
        {
            column1: <p className='items-center flex flex-row'>Pre-built UI Libraries</p>,
            column2: <DoneIcon className='text-[#848887]' />,
            column3: <DoneIcon className='text-[#6CCB7F]' />,
            column4: <DoneIcon className='text-[#2F97D2]' />,
            column5: <DoneIcon className='text-[#006BBC]' />,
        },
        {
            column1: <p className='items-center flex flex-row'>Pre-built UI Libraries</p>,
            column2: <DoneIcon className='text-[#848887]' />,
            column3: <DoneIcon className='text-[#6CCB7F]' />,
            column4: <DoneIcon className='text-[#2F97D2]' />,
            column5: <DoneIcon className='text-[#006BBC]' />,
        },
        {
            column1: <p className='items-center flex flex-row'>Pre-built UI Libraries</p>,
            column2: <DoneIcon className='text-[#848887]' />,
            column3: <DoneIcon className='text-[#6CCB7F]' />,
            column4: <DoneIcon className='text-[#2F97D2]' />,
            column5: <DoneIcon className='text-[#006BBC]' />,
        },
        {
            column1: <p className='items-center flex flex-row'>Pre-built UI Libraries</p>,
            column2: <DoneIcon className='text-[#848887]' />,
            column3: <DoneIcon className='text-[#6CCB7F]' />,
            column4: <DoneIcon className='text-[#2F97D2]' />,
            column5: <DoneIcon className='text-[#006BBC]' />,
        },
        {
            column1: <p className='items-center flex flex-row'>Pre-built UI Libraries</p>,
            column2: <DoneIcon className='text-[#848887]' />,
            column3: <DoneIcon className='text-[#6CCB7F]' />,
            column4: <DoneIcon className='text-[#2F97D2]' />,
            column5: <DoneIcon className='text-[#006BBC]' />,
        },
        {
            column1: <p className='items-center flex flex-row'>Pre-built UI Libraries</p>,
            column2: <DoneIcon className='text-[#848887]' />,
            column3: <DoneIcon className='text-[#6CCB7F]' />,
            column4: <DoneIcon className='text-[#2F97D2]' />,
            column5: <DoneIcon className='text-[#006BBC]' />,
        },
        {
            column1: <p className='items-center flex flex-row'>Pre-built UI Libraries</p>,
            column2: <DoneIcon className='text-[#848887]' />,
            column3: <DoneIcon className='text-[#6CCB7F]' />,
            column4: <DoneIcon className='text-[#2F97D2]' />,
            column5: <DoneIcon className='text-[#006BBC]' />,
        },
        {
            column1: <p className='items-center flex flex-row'>Pre-built UI Libraries</p>,
            column2: <DoneIcon className='text-[#848887]' />,
            column3: <DoneIcon className='text-[#6CCB7F]' />,
            column4: <DoneIcon className='text-[#2F97D2]' />,
            column5: <DoneIcon className='text-[#006BBC]' />,
        },
        {
            column1: <p className='items-center flex flex-row'>Pre-built UI Libraries</p>,
            column2: <DoneIcon className='text-[#848887]' />,
            column3: <DoneIcon className='text-[#6CCB7F]' />,
            column4: <DoneIcon className='text-[#2F97D2]' />,
            column5: <DoneIcon className='text-[#006BBC]' />,
        },
    ];

    const visibleRows = showAllRows ? data : data.slice(0, 7);

    return (
        <div className='flex flex-col gap-[14px] xl:gap-[28px] items-center justify-center'>
            <TableWrapper>
                <Table>
                    <thead>
                        <tr>
                            <th><span className='text-[15px] sm:text-[20px] lg:text-[32px] 2xl:text-[42px]'>Core Features</span></th>
                            <th><span className='text-[15px] sm:text-[20px] lg:text-[25px] 2xl:text-[32px]'>Free</span></th>
                            <th><span className='text-[15px] sm:text-[20px] lg:text-[25px] 2xl:text-[32px]'>$0.50</span><span>/1000</span></th>
                            <th><span className='text-[15px] sm:text-[20px] lg:text-[25px] 2xl:text-[32px]'>Custom</span></th>
                            <th><span className='text-[15px] sm:text-[20px] lg:text-[25px] 2xl:text-[32px]'>Custom</span></th>
                            {/* Add more headers as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {(showAllRows ? data : visibleRows).map((row, index) => (
                            <tr key={index} style={!showAllRows && index > 3 ? { opacity: ((7 - index) / 4) } : {}}>
                                <td>{row.column1}</td>
                                <td>{row.column2}</td>
                                <td>{row.column3}</td>
                                <td>{row.column4}</td>
                                <td>{row.column5}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableWrapper>
            <button onClick={() => setShowAllRows(!showAllRows)}>
                <div className='flex flex-row text-[#4FBAE9] text-[26px] items-center'>
                    <p>{showAllRows ? 'Show Less' : 'Show More'}</p>&nbsp;
                    {showAllRows ? <RemoveCircleOutlineIcon className='text-[26px]' /> : <AddCircleOutlineIcon className='text-[26px]' />}
                </div>
            </button>
        </div>
    );
};

export default PricingPlanTable;