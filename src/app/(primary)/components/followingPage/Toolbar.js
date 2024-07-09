import { useState } from 'react';

import { IconButton, Menu, MenuItem } from '@mui/material';

import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';

import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { SelectBox } from "../../components/common";

export const ToolBar = (props) => {
	const { isShowSidebar, setIsShowSidebar } = props;
	const { setViewMode } = props;

	const ExpandView = (props) => {
		const [anchorEl, setAnchorEl] = useState(null);
		const open = Boolean(anchorEl);
		const handleClick = (event) => {
			setAnchorEl(event.currentTarget);
		};
		const handleClickItem = (mode) => {
			setViewMode(mode);
			setAnchorEl(null);
		};
		return (
			<div>
				<IconButton
					onClick={handleClick}
					size="small"
					aria-controls={open ? 'expandview-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
				>
					<FormatListBulletedOutlinedIcon />
				</IconButton>
				<Menu
					anchorEl={anchorEl}
					id="expandview-menu"
					className='anchormenu'
					open={open}
					onClose={() => setAnchorEl(null)}
					transformOrigin={{ horizontal: 'right', vertical: 'top' }}
					anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
					sx={{
						fontSize: '12px'
					}}
				>
					<p className="px-4">Layout</p>
					<MenuItem onClick={() => handleClickItem('expand')} sx={{ fontSize: '12px' }}>
						<ViewDayOutlinedIcon sx={{ fontSize: '16px' }} />
						Expanded View
					</MenuItem>
					<MenuItem onClick={() => handleClickItem('card')} sx={{ fontSize: '12px' }}>
						<GridViewOutlinedIcon sx={{ fontSize: '16px' }} />
						Card View
					</MenuItem>
					<MenuItem onClick={() => handleClickItem('magazine')} sx={{ fontSize: '12px' }}>
						<ViewListOutlinedIcon sx={{ fontSize: '16px' }} />
						Magazine View
					</MenuItem>
					<MenuItem onClick={() => handleClickItem('column')} sx={{ fontSize: '12px' }}>
						<ViewSidebarOutlinedIcon sx={{ fontSize: '16px' }} />
						Column View
					</MenuItem>
					<MenuItem onClick={() => handleClickItem('list')} sx={{ fontSize: '12px' }}>
						<ViewAgendaOutlinedIcon sx={{ fontSize: '16px' }} />
						List View
					</MenuItem>
				</Menu>
			</div>
		);
	}

	return (
		<div className="flex flex-row items-center justify-end">
			<SelectBox
				id="time"
				name="time"
				value="usa"
				passStyle={{ height: '100%', marginRight: '12px', padding: '0px 12px 0px 2px', border: '1px solid #ccc', borderRadius: '16px', backgroundColor: 'rgb(238, 242, 245)' }}
				iconStyle={{ color: 'black', right: '-12px', fontSize: '16px' }}
				menuStyle={{ backgroundColor: 'rgb(238, 242, 245)' }}
			>
				<p className='flex flex-row items-center gap-2 text-[12px]'>
					Time: default
				</p>
				<p className='flex flex-row items-center gap-2 text-[12px]'>
					Time: Past day
				</p>
				<p className='flex flex-row items-center gap-2 text-[12px]'>
					Time: Past 3 days
				</p>
				<p className='flex flex-row items-center gap-2 text-[12px]'>
					Time: Past week
				</p>
				<p className='flex flex-row items-center gap-2 text-[12px]'>
					Time: Past month
				</p>
				<p className='flex flex-row items-center gap-2 text-[12px]'>
					Time: Anytime
				</p>
			</SelectBox>
			<SelectBox
				id="sort"
				name="sort"
				value="usa"
				passStyle={{ height: '100%', marginRight: '12px', padding: '2px 12px 2px 2px', border: '1px solid #ccc', borderRadius: '16px', backgroundColor: 'rgb(238, 242, 245)' }}
				iconStyle={{ color: 'black', right: '-12px', fontSize: '16px' }}
				menuStyle={{ backgroundColor: 'rgb(238, 242, 245)' }}
			>
				<p className='flex flex-row items-center gap-2 text-[12px]'>
					Sort: Most Popular
				</p>
				<p className='flex flex-row items-center gap-2 text-[12px]'>
					Sort: Popular + Latest
				</p>
				<p className='flex flex-row items-center gap-2 text-[12px]'>
					Sort: Newest
				</p>
				<p className='flex flex-row items-center gap-2 text-[12px]'>
					Sort: Oldest
				</p>
			</SelectBox>
			<ExpandView />
			<IconButton>
				<ReplayOutlinedIcon />
			</IconButton>
			<IconButton>
				<MoreHorizOutlinedIcon />
			</IconButton>
			<IconButton onClick={() => setIsShowSidebar(!isShowSidebar)}>
				<ViewSidebarOutlinedIcon />
			</IconButton>
		</div>
	)
}
