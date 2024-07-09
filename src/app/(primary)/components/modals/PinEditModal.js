import { useState } from 'react';
import { Button, Modal, Box, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 380,
    p: 0,
};

const renameModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


export function PinEditModal(props) {
    const { modalOpen, setModalOpen } = props;
    const { pinnedChannels, setPinnedChannels } = props;
    
    const [tmpChannels, setTmpChannels] = useState(pinnedChannels);
    const [editingIdx, setEditingIdx] = useState(null);
    const [editingValue, setEditingValue] = useState("");
    const [renameModalOpen, setRenameModalOpen] = useState(false);

    const handleDelete = (idx) => {
        setTmpChannels([
            ...tmpChannels.slice(0, idx),
            ...tmpChannels.slice(idx + 1)
        ]);
    };

    const handleRename = (idx, value) => {
        const updatedChannels = [...tmpChannels];
        updatedChannels[idx].label = value;
        setTmpChannels(updatedChannels);
    };

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(tmpChannels);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTmpChannels(items);
    };

    return (
        <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalContentStyle}>
                <div className='flex flex-col rounded-lg bg-white overflow-hidden'>
                    <div className='flex flex-col gap-2 p-4 text-[12px]'>
                        <p className='text-xl text-black font-bold'>EDIT PINNED</p>
                    </div>
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <Droppable droppableId="channels">
                            {(provided) => (
                                <div
                                    className='px-4 mb-4'
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {
                                        tmpChannels.map((channel, idx) => (
                                            <Draggable key={channel.label} draggableId={channel.label} index={idx}>
                                                {(provided) => (
                                                    <div
                                                        className='flex justify-between border-b border-b-1 border-gray-200 py-1'
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                    >
                                                        <div {...provided.dragHandleProps}>
                                                            <DragIndicatorIcon sx={{ fontSize: 18, color: '#808080' }} />
                                                        </div>
                                                        <div className="flex-grow text-left">
                                                            {editingIdx === idx ? (
                                                                <Modal
                                                                    open={renameModalOpen}
                                                                    onClose={() => setRenameModalOpen(false)}
                                                                    aria-labelledby="rename-modal-title"
                                                                    aria-describedby="rename-modal-description"
                                                                >
                                                                    <Box sx={renameModalStyle} className="rounded-[7px]">
                                                                        <h3 className="font-bold text-[16px] relative bottom-2">Rename</h3>
                                                                        <TextField
                                                                            size="small"
                                                                            value={editingValue}
                                                                            onChange={(e) => setEditingValue(e.target.value)}
                                                                            fullWidth
                                                                        />
                                                                        <div className='flex flex-row justify-start gap-2 mt-2'>
                                                                            <Button
                                                                                variant="contained"
                                                                                onClick={() => {
                                                                                    handleRename(editingIdx, editingValue);
                                                                                    setEditingIdx(null);
                                                                                    setRenameModalOpen(false);
                                                                                }}
                                                                            >Save</Button>
                                                                            <Button
                                                                                variant="outlined"
                                                                                onClick={() => setRenameModalOpen(false)}
                                                                            >Cancel</Button>
                                                                        </div>
                                                                    </Box>
                                                                </Modal>
                                                            ) : (
                                                                <p>{channel.label}</p>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <IconButton size='small' onClick={() => {
                                                                setEditingIdx(idx);
                                                                setEditingValue(channel.label);
                                                                setRenameModalOpen(true);
                                                            }}>
                                                                <EditIcon sx={{ fontSize: 14 }} />
                                                            </IconButton>
                                                            <IconButton size='small' onClick={() => handleDelete(idx)}>
                                                                <DeleteIcon sx={{ fontSize: 14 }} />
                                                            </IconButton>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))
                                    }
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    <div className='flex flex-row p-4 justify-end gap-2 bg-gray-100'>
                        <Button
                            sx={{ width: '100%', border: '1px solid' }}
                            onClick={() => { setPinnedChannels(tmpChannels); setModalOpen(false); }}
                        >Done</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
