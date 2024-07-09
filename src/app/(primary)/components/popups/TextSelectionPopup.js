import React, { useState, useEffect } from 'react';

import { AddCitationModal } from '../modals';

import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import DoDisturbAltOutlinedIcon from '@mui/icons-material/DoDisturbAltOutlined';
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import HighlightAltOutlinedIcon from '@mui/icons-material/HighlightAltOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import ViewHeadlineOutlinedIcon from '@mui/icons-material/ViewHeadlineOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Divider } from '@mui/material';

const TextSelectionPopup = (props) => {
  const { setIsShowSideTab } = props;

  const [selectedText, setSelectedText] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const [isAddCitationModalOpen, setIsAddCitationModalOpen] = useState(false);

  const handleMouseUp = (event) => {
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
      const range = selection.getRangeAt(0);
      
      // Check if the event target is within a text-containing element
      const textContainingElements = document.querySelectorAll('.text-container');
      let isWithinTextContainer = false;
      textContainingElements.forEach(element => {
        if (element.contains(event.target)) {
          isWithinTextContainer = true;
        }
      });

      if (isWithinTextContainer) {
        let posX = event.pageX - (window.innerWidth - 1080) / 2;
        let posY = event.pageY + 380 < window.innerHeight ? event.pageY : window.innerHeight - 392;
        setPopupPosition({ x: posX, y: posY });
        setSelectedText(selection.toString());
        setPopupVisible(true);
      } else {
        setPopupVisible(false);
      }
    } else {
      setPopupVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handlePopupAction = (e) => {
    // console.log(selectedText);
    console.log(e.target.innerText);
    switch (e.target.innerText.trim()) {
      case "Annotate":
        console.log(123);
        break;
      
      case "Add Citation":
        setIsAddCitationModalOpen(true);
        break;

      case "Chat with AI":
        setIsShowSideTab(true);
        break;
    
      default:
        break;
    }
    setPopupVisible(false);
  };

  return (
    <div>
      {popupVisible && (
        <div
          style={{
            position: 'absolute',
            top: popupPosition.y,
            left: popupPosition.x,
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '1px 2px 4px 2px rgba(0,0,0,0.3)',
            padding: '8px',
            width: '160px',
            height: '380px',
            maxHeight: '380px',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            color: '#555',
            fontSize: '12px',
            justifyContent: 'space-between'
          }}
        >
          <button className='w-full flex hover:bg-[#eee]' onClick={handlePopupAction}><DriveFileRenameOutlineOutlinedIcon sx={{fontSize: 16}} />&nbsp;Highlight<span className='flex-grow' /></button>
          <button className='w-full flex hover:bg-[#eee]' onClick={handlePopupAction}><DoDisturbAltOutlinedIcon sx={{fontSize: 16}} />&nbsp;Mute<span className='flex-grow' /></button>
          <button className='w-full flex hover:bg-[#eee]' onClick={handlePopupAction}><TrendingFlatOutlinedIcon sx={{fontSize: 16}} />&nbsp;Track<span className='flex-grow' /></button>
          <button className='w-full flex hover:bg-[#eee]' onClick={handlePopupAction}><BrushOutlinedIcon sx={{fontSize: 16}} />&nbsp;Annotate<span className='flex-grow' /></button>
          <button className='w-full flex hover:bg-[#eee]' onClick={handlePopupAction}><HighlightAltOutlinedIcon sx={{fontSize: 16}} />&nbsp;Create Highlighter<span className='flex-grow' /></button>
          <button className='w-full flex hover:bg-[#eee]' onClick={handlePopupAction}><SettingsApplicationsOutlinedIcon sx={{fontSize: 16}} />&nbsp;Create Rule<span className='flex-grow' /></button>
          <button className='w-full flex hover:bg-[#eee]' onClick={handlePopupAction}><ViewHeadlineOutlinedIcon sx={{fontSize: 16}} />&nbsp;Add Citation<span className='flex-grow' /></button>
          <button className='w-full flex hover:bg-[#eee]' onClick={handlePopupAction}><AutoAwesomeOutlinedIcon sx={{fontSize: 16}} />&nbsp;Chat with AI<span className='flex-grow' /></button>
          <Divider sx={{width: '100%'}}/>
          <button className='w-full flex hover:bg-[#eee]' onClick={handlePopupAction}><SearchOutlinedIcon sx={{fontSize: 16}} />&nbsp;Search Sphere<span className='flex-grow' /></button>
          <button className='w-full flex hover:bg-[#eee]' onClick={handlePopupAction}><GoogleIcon sx={{fontSize: 16}} />&nbsp;Search Google<span className='flex-grow' /></button>
          <button className='w-full flex hover:bg-[#eee]' onClick={handlePopupAction}><TwitterIcon sx={{fontSize: 16}} />&nbsp;Tweet<span className='flex-grow' /></button>
          <button className='w-full flex hover:bg-[#eee]' onClick={handlePopupAction}><GoogleIcon sx={{fontSize: 16}} />&nbsp;Post to WordPress<span className='flex-grow' /></button>
          <button className='w-full flex hover:bg-[#eee]' onClick={handlePopupAction}><TwitterIcon sx={{fontSize: 16}} />&nbsp;Clip to Evernote<span className='flex-grow' /></button>
          <button className='w-full flex hover:bg-[#eee]' onClick={handlePopupAction}><GoogleIcon sx={{fontSize: 16}} />&nbsp;Save to OneNote<span className='flex-grow' /></button>
        </div>
      )}
      <AddCitationModal modalOpen={isAddCitationModalOpen} setModalOpen={setIsAddCitationModalOpen}/>
    </div>
  );
};

export default TextSelectionPopup;
