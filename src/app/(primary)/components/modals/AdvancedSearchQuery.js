import { useEffect, useState } from 'react';
import { Button, Modal, Box, Checkbox, IconButton } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 780,
    p: 0,
    'div > select': {
        padding: '4px',
        border: '1px solid #666',
        borderRadius: '4px',
        outline: 'none'
    },
};

const SearchQueryRow = (props) => {
    const { query, handleInputChange, handleAddORClick, handleDeleteRowClick, removable } = props;

    const { id, op, keywords } = query;

    return (
        <>
            {
                removable &&
                <hr />
            }
            <div className='flex flex-wrap items-center gap-2'>
                {
                    op &&
                    <p className='font-bold text-black'>
                        {
                            op == 'add' ? 'ADD' : 'NOT'
                        }
                    </p>
                }
                {
                    keywords.map((item, idx) => (
                        <input
                            className='px-2 py-1.5 border border-1 border-gray-400 rounded-md outline-none'
                            placeholder='Type keyword or phrase'
                            defaultValue={item}
                            value={item}
                            onChange={(e) => handleInputChange(id, idx, e.target.value)}
                        />
                    ))
                }
                <Button sx={{ border: '1px solid' }} onClick={() => handleAddORClick(id)}>OR</Button>
                {
                    removable &&
                    <div className='self-end'>
                        <IconButton onClick={() => handleDeleteRowClick(id)}>
                            <DeleteOutlineOutlinedIcon />
                        </IconButton>
                    </div>
                }
            </div>
        </>
    );
}

export function AdvancedSearchQuery(props) {
    const { modalOpen, setModalOpen } = props;
    const [ queries, setQueries ] = useState([{id: 0, keywords: [''], op: undefined}]);
    const [ searchable, setSearchable ] = useState(false);
    const [ finalQuery, setFinalQuery ] = useState('');

    useEffect(() => {
        for(let keyword of queries[0].keywords) {
            if (keyword != '') {
                setSearchable(true);
                buildQuery();
                return;
            }
        }
        setSearchable(false);
    }, [queries]);

    const buildQuery = () => {
        let rlt = [];
        for(let query of queries) {
            rlt.push(query.keywords.join(', '));
        }
        setFinalQuery(`search-query: ${rlt.join(', ')}`);
    }

    const handleInputChange = (queryID, tagID, val) => {
        const idx = queries.findIndex((query) => query.id == queryID);
        const originalQuery = queries[idx];
        
        setQueries([
            ...queries.slice(0, idx),
            {
                ...originalQuery,
                keywords: [
                    ...originalQuery.keywords.slice(0,tagID), 
                    val,
                    ...originalQuery.keywords.slice(tagID + 1)
                ]
            },
            ...queries.slice(idx + 1),
        ])
    }

    const handleAddORClick = (id) => {
        const idx = queries.findIndex((query) => query.id == id);
        const originalQuery = queries[idx];

        for (let keyword of originalQuery.keywords) {
            if (keyword == '') return;
        }

        setQueries([
            ...queries.slice(0, idx),
            {
                ...originalQuery,
                keywords: [...originalQuery.keywords, '']
            },
            ...queries.slice(idx + 1),
        ])
    }

    const handleAddANDorNOTClick = (op) => {

        // check if it is possible to add new row
        for (let query of queries) {
            for(let keyword of query.keywords){
                if (keyword == '') return;
            }
        }

        const newID = findNewID();
        setQueries([
            ...queries,
            {
                id: newID,
                keywords: [''],
                op: op
            }
        ])
    }

    const handleDeleteRowClick = (id) => {
        const idx = queries.findIndex((query) => query.id == id);

        setQueries([
            ...queries.slice(0, idx),
            ...queries.slice(idx + 1)
        ])
    }

    const handleClearClick = () => {
        setQueries([{id: 0, keywords: [''], op: undefined}]);
        setFinalQuery('');
    }

    const findNewID = () => {
        return queries[queries.length - 1].id + 1;
    }

    return (
        <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalContentStyle}>
                <div className='flex flex-col gap-4 rounded-lg bg-white overflow-hidden'>
                    <div className='flex flex-col p-8 gap-4'>
                        <p className='text-xl text-black font-bold'>Build your search query</p>
                        <div className='flex flex-row gap-2'>
                            <input 
                                className='flex-grow p-1 border border-1 border-gray-400 rounded-md outline-none' 
                                value={finalQuery}    
                            />
                            <Button 
                                sx={{ border: '1px solid', textTransform: 'none' }}
                                onClick={() => setModalOpen(false)}
                            >
                                Search
                            </Button>
                        </div>
                        <div>
                            <p className='font-bold text-black'>Search in</p>
                            <div className='flex flex-wrap gap-2'>
                                <select name="category" >
                                    <option value="all">All Public Articles</option>
                                </select>
                                <select name="language" >
                                    <option value="all">All Languages</option>
                                    <option value="english">English</option>
                                </select>
                                <select name="find_in" >
                                    <option value="all">Title & Content</option>
                                    <option value="title">Title</option>
                                    <option value="content">Content</option>
                                </select>
                                <select name="sort_by" >
                                    <option value="match">Best Match</option>
                                    <option value="popularity">Popularity</option>
                                    <option value="newest">Newest</option>
                                    <option value="oldest">Oldest</option>
                                </select>
                                <select name="time" >
                                    <option value="today">Today</option>
                                    <option value="week">Past 7 days</option>
                                    <option value="month">Past 30 days</option>
                                    <option value="year">Past year</option>
                                    <option value="all">All Time</option>
                                    <option value="custom">Custom Range</option>
                                </select>
                                <select name="content" >
                                    <option value="all">Any Content</option>
                                    <option value="article">Articles</option>
                                    <option value="video">Videos</option>
                                    <option value="image">Images</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold text-black'>Search for</p>
                            <div className='flex flex-col gap-2'>
                                {
                                    queries.map((query, idx) => (
                                        <SearchQueryRow 
                                            query={query} 
                                            handleInputChange={handleInputChange}
                                            handleAddORClick={handleAddORClick} 
                                            handleDeleteRowClick={handleDeleteRowClick}
                                            removable={idx > 0}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <Button sx={{ border: '1px solid' }} onClick={() => handleAddANDorNOTClick('add')}>+ AND</Button>
                            <Button sx={{ border: '1px solid' }} onClick={() => handleAddANDorNOTClick('not')}>- NOT</Button>
                            <hr className='flex-grow' />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center px-8 py-4 gap-2 bg-gray-100'>
                        <Button 
                            onClick={handleClearClick} 
                            sx={{ textTransform: 'none' }}
                        >Clear All</Button>
                        <Button 
                            variant='contained' 
                            onClick={() => setModalOpen(false)} 
                            sx={{ textTransform: 'none' }}
                            disabled={!searchable}
                        >Search</Button>
                    </div>
                </div>
            </Box>
        </Modal >
    )
}
