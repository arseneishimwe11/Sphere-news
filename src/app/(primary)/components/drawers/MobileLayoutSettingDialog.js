import { useState, useContext } from "react";

import { MainContext } from "../../layout";

import { Divider, Drawer, IconButton } from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined';

const SelectOne = (props) => {
    const {data, active, setActive} = props;

    return (
        <div className="flex flex-wrap gap-1">
            {
                data.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setActive(item.value)}
                        className="flex flex-col items-center text-[12px]"
                    >
                        <p className={`p-2 ${active === item.value ? "bg-[#425BFD] text-[#FFFFFF]" : "bg-[#EDEDEF] text-[#97979B]"} hover:cursor-pointer font-bold rounded-full`}>
                            {item.icon ? item.icon : item.label}
                            {
                                item.value==='magic' && <span className="text-[12px] text-[#D8A66D]"> PRO</span>
                            }
                        </p>
                        {
                            item.icon &&
                                <p className={`p-2 ${active === item.value ? "text-[#3E5CFB]" : "text-[#97979B]"} hover:cursor-pointer font-bold`}>{item.label}</p>
                        }
                    </div>
                ))
            }
        </div>
    )
}

const sort_data = [
    {
        label: 'Most Popular',
        value: 'popular'
    },
    {
        label: 'Newest first',
        value: 'newest'
    },
    {
        label: 'Oldest first',
        value: 'oldest'
    },
    {
        label: 'Magic',
        value: 'magic'
    }
];

const filter_data = [
    {
        label: 'All articles',
        value: 'all'
    },
    {
        label: 'Unread',
        value: 'unread'
    },
    {
        label: 'Starred',
        value: 'starred'
    },
    {
        label: 'Annotated',
        value: 'annotated'
    }
];

const group_data = [
    {
        label: 'None',
        value: null
    },
    {
        label: 'By topic',
        value: 'topic'
    },
    {
        label: 'By feed',
        value: 'feed'
    },
    {
        label: 'By date',
        value: 'date'
    }
];

const channel_layout = [
    {
        label: 'List',
        value: 'list'
    },
    {
        label: 'Card',
        value: 'card'
    }
];

const layout_data = [
    {
        label: 'Expanded 1',
        value: 'expanded1',
        icon: <ViewAgendaOutlinedIcon />
    },
    {
        label: 'Expanded 2',
        value: 'expanded2',
        icon: <ViewAgendaOutlinedIcon />
    },
    {
        label: 'Expanded 3',
        value: 'expanded3',
        icon: <ViewAgendaOutlinedIcon />
    },
    {
        label: 'Magazine L',
        value: 'magazineleft',
        icon: <ViewListOutlinedIcon />
    },
    {
        label: 'Magazine R',
        value: 'magazineright',
        icon: <ViewListOutlinedIcon sx={{transform: 'rotate(180deg)'}}/>
    },
    {
        label: 'Card',
        value: 'card',
        icon: <ViewDayOutlinedIcon />
    }
];
const MobileLayoutSettingDialog = (props) => {
    const { isLayoutSettingDialogOpen, setIsLayoutSettingDialogOpen } = props;

    const { 
        listNewsCardViewMode, 
        setListNewsCardViewMode,
        mobileNewsListGroupBy,
        setMobileNewsListGroupBy,
        mobileChannelLayout,
        setMobileChannelLayout
    } = useContext(MainContext);

    const [sortBy, setSortBy] = useState('newest');
    const [filterBy, setFilterBy] = useState('unread');
    const [groupBy, setGroupBy] = useState('date');

    return (
        <Drawer
            anchor='bottom'
            open={isLayoutSettingDialogOpen}
            onClose={() => setIsLayoutSettingDialogOpen(false)}
            PaperProps={{
                style: {
                    borderRadius: '12px 12px 0 0'
                }
            }}
        >
            <div className='flex flex-col rounded-t-xl bg-white p-4 gap-4'>
                <div className='flex w-full justify-between items-start'>
                    <p className="text-[20px] text-black"></p>
                    <IconButton onClick={() => setIsLayoutSettingDialogOpen(false)}>
                        <CloseOutlinedIcon />
                    </IconButton>
                </div>
                <div>
                    <p className="text-[20px] font-bold mb-2">Sorting</p>
                    <SelectOne data={sort_data} active={sortBy} setActive={setSortBy}/>
                </div>
                <Divider />
                <div>
                    <p className="text-[20px] font-bold mb-2">Filtering</p>
                    <SelectOne data={filter_data} active={filterBy} setActive={setFilterBy}/>
                </div>
                <Divider />
                <div>
                    <p className="text-[20px] font-bold mb-2">Grouping</p>
                    <SelectOne data={group_data} active={mobileNewsListGroupBy} setActive={setMobileNewsListGroupBy}/>
                </div>
                <Divider />
                <div>
                    <p className="text-[20px] font-bold mb-2">Channel Layout</p>
                    <SelectOne data={channel_layout} active={mobileChannelLayout} setActive={setMobileChannelLayout}/>
                </div>
                <Divider />
                <div>
                    <p className="text-[20px] font-bold mb-2">Layout</p>
                    <SelectOne data={layout_data} active={listNewsCardViewMode} setActive={setListNewsCardViewMode}/>
                </div>
            </div>
        </Drawer>
    )
};

export default MobileLayoutSettingDialog;