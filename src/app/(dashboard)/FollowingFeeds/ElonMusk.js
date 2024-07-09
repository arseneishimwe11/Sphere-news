import { Box, IconButton, Button, Select, ButtonGroup, MenuItem, Checkbox, TextField, Divider, Modal } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GridViewIcon from '@mui/icons-material/GridView';
import CloseIcon from '@mui/icons-material/Close';
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import usePopup from "@/app/hooks/usePopupState";
import { Popover, Typography } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

const ImagePanel = ({ url, content }) => {
    return (
        <div className="flex flex-row items-start gap-[20px] mt-[30px]">
            <img src={url} width="150px" />
            {content}
        </div>
    );
}

const BarChart = () => {
    return (
        <div className="flex flex-row items-end ml-[40px] mt-[30px] relative">
            <div className="w-12 bg-[#4DBAE9] h-[50px] mr-1 rounded-sm"></div>
            <NavigationOutlinedIcon sx={{ position: "absolute", left: "38px", bottom: "-10px", color: "#555" }} />
            <div className="w-12 bg-[#D9D9D9] h-[70px] mr-1"></div>
            <div className="w-12 bg-[#D9D9D9] h-[90px]"></div>
        </div>
    );
};

const BundlePanel = ({ bundleList }) => {
    return (
        <>
            <Box sx={{ border: "solid", borderColor: "#999", padding: "10px", borderWidth: "1px", borderRadius: "5px", marginTop: "10px" }}>
                <div className="flex flex-row items-center">
                    <RssFeedIcon />
                    <p className="ml-2 flex-grow">All Personal Feeds</p>
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </div>
                <p className="text-[#C7B77C] ml-[10px]">5 AI feeds <span className="underline">excluded</span></p>
            </Box>
            <Box sx={{ border: "solid", borderColor: "#999", padding: "10px", borderWidth: "1px", borderRadius: "5px", marginTop: "10px" }}>
                <div className="flex flex-row items-center">
                    <GridViewIcon />
                    <p className="ml-2 flex-grow">Market Intel Bundle</p>
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </div>
                <p className="ml-2 text-[15px]">Trade publications, Business magazines, Strategy magazines, Tech blogs, etc.</p>
                <div></div>
                <BarChart />
                <p className="ml-2 mt-4 text-[#555]">18 articles per week</p>
            </Box>
        </>
    );
}

const ProfileButton = ({ url, name, content, bill }) => {
    ///popover1
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    ///popover2
    const [anchorElN, setAnchorElN] = useState(null);

    const handleOpenN = (event) => {
        setAnchorElN(event.currentTarget);
    };

    const handleCloseN = () => {
        setAnchorElN(null);
    };
    return (
        <p className="flex flex-row items-center border border-gray-400 rounded-[5px] p-[2px] pl-[10px]">
            <img src={url} width="25px" />
            <IconButton onClick={handleOpen}>
                <KeyboardArrowDownIcon />
            </IconButton>
            <p className="font-bold">{name}</p>
            {bill &&
                <IconButton onClick={handleOpenN}>
                    <AutoAwesomeOutlinedIcon />
                </IconButton>
            }
            <IconButton>
                <CloseOutlinedIcon />
            </IconButton>
            <ProductPopOver name={name} content={content} anchorEl={anchorEl} handleClose={handleClose} />
            <BillGatesPopOver anchorEl={anchorElN} handleClose={handleCloseN} />
        </p>
    )
}

const ProductPopOver = ({ content, anchorEl, handleClose, name }) => {
    const [total, setTotal] = useState(true);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const standardContent = [`Articles mentioning '${name}'`, `Articles mentioning '${name}' only`];
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            sx={{ marginTop: "5px" }}
        >
            <div className="flex flex-col gap-[10px] p-[10px] pt-[20px] rounded-md max-w-[300px]">
                <div className="flex flex-row items-start cursor-pointer gap-[5px]" onClick={() => setTotal(true)}>
                    <img className="mt-[5px]" src="img/icons/feed/product_launch.svg" width="25px" />
                    <p className="flex-grow mr-[20px]">{!!content ? content[0] : standardContent[0]}</p>
                    <DoneIcon sx={{ color: "green", visibility: !total && "hidden" }} />
                </div>
                <div className="flex flex-row items-start cursor-pointer gap-[5px]" onClick={() => setTotal(false)}>
                    <TaskAltOutlinedIcon sx={{ fontSize: "20px", marginTop: "5px" }} />
                    <p className="flex-grow mr-[20px]">{!!content ? content[1] : standardContent[1]}</p>
                    <DoneIcon sx={{ color: "green", visibility: total && "hidden" }} />
                </div>
            </div>
        </Popover>
    );
}

function billGatesDataSetter(icon, title, content) {
    return (
        { icon, title, content }
    );
}

const billGatesData = [
    billGatesDataSetter(<ViewInArOutlinedIcon sx={{ marginTop: "7px" }} />, "Philanthropist", "person known for philanthropic work"),
    billGatesDataSetter(<ViewInArOutlinedIcon sx={{ marginTop: "7px" }} />, "Billionaire", "person who has a net worth of at I..."),
    billGatesDataSetter(<ViewInArOutlinedIcon sx={{ marginTop: "7px" }} />, "Philanthropist", "person known for philanthropic work"),
    billGatesDataSetter(<ViewInArOutlinedIcon sx={{ marginTop: "7px" }} />, "Philanthropist", "person known for philanthropic work"),
    billGatesDataSetter(<img className="mt-[5px]" src="img/icons/feed/checked.png" width="30px" />, "Philanthropist", "person known for philanthropic work"),
    billGatesDataSetter(<img className="mt-[5px]" src="img/icons/feed/checked.png" width="30px" />, "Philanthropist", "person known for philanthropic work"),
    billGatesDataSetter(<img className="mt-[5px]" src="img/icons/feed/checked.png" width="30px" />, "Philanthropist", "person known for philanthropic work"),
    billGatesDataSetter(<ViewInArOutlinedIcon sx={{ marginTop: "7px" }} />, "Philanthropist", "person known for philanthropic work"),
    billGatesDataSetter(<ViewInArOutlinedIcon sx={{ marginTop: "7px" }} />, "Philanthropist", "person known for philanthropic work")
];

const BillGatesPopOverItem = ({ icon, title, content }) => {
    return (
        <div className="flex flex-row items-start gap-[5px] p-[10px]">
            {/* <ViewInArOutlinedIcon sx={{ marginTop: "7px" }} /> */}
            {icon}
            <div className="mt-[7px]">
                <p className="font-bold">{title}</p>
                <p>{content}</p>
            </div>
            <Checkbox />
        </div>
    );
}

const BillGatesPopOver = ({ anchorEl, handleClose }) => {
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            sx={{ marginTop: "5px" }}
        >
            <div className="max-h-[400px] overflow-y-scroll">
                {billGatesData.map((data, index) => <BillGatesPopOverItem key={index} icon={data.icon} title={data.title} content={data.content} />)}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: "10px"
            }}>
                <Button variant="contained" sx={{ width: "90%", backgroundColor: "#4FB9E9" }} onClick={handleClose}>Add Suggestions (2)</Button>
            </div>
        </Popover>
    );
}

const AddBundlePopOver = ({ anchorEl, handleClose, setBundleList, bundleList }) => {
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    function createStreamList(id, icon, item) {
        return { id, icon, item };
    }
    const [openModal, setOpenModal] = useState(false);
    const handleModalClose = () => { setOpenModal(false); };
    const handleModalOpen = () => { setOpenModal(true); };

    const streamListOne = [
        createStreamList(0, <img src="img/icons/feed/bundle.svg" />, "Market Intel Bundle"),
        createStreamList(1, <img src="img/icons/feed/bundle.svg" />, "National Newspaper Bundle"),
    ];
    const streamListTwo = [
        createStreamList(2, <RssFeedIcon />, "All personal Feeds"),
        createStreamList(3, <FolderOutlinedIcon />, "Folder X"),
        createStreamList(4, <FolderOutlinedIcon />, "Gossip"),
        createStreamList(5, <FolderOutlinedIcon />, "Media"),
        createStreamList(6, <FolderOutlinedIcon />, "News"),
        createStreamList(7, <FolderOutlinedIcon />, "Politics"),
    ];
    const StreamItem = ({ icon, item, status }) => {
        const [isHover, setIsHover] = useState(false);
        const handleMouseEnter = () => {
            setIsHover(true);
        }
        const handleMouseLeave = () => {
            setIsHover(false);
        }
        const [added, setAdded] = useState(status);
        const handleClick = () => {
            setAdded(!added);
        }
        return (
            <div
                className='flex flex-row items-center'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    backgroundColor: isHover ? "#CCC" : "#FFF"
                }}
            >
                <p className='flex flex-row items-center flex-grow p-4'>
                    {icon}&nbsp;
                    {item}
                </p>
                {added ?
                    <Button className="flex flex-row mr-[2]" sx={{ backgroundColor: "#4CBBE8" }} variant="contained"
                        onClick={() => {
                            handleClick();
                            // setBundleList([...bundleList, { id: item.id, icon: item.icon, item: item.item }])
                        }}
                    >
                        <DoneIcon sx={{ color: "white" }} />
                        <label className="flex-grow">Added</label>
                    </Button>
                    :
                    (isHover &&
                        <Button className="flex flex-row mr-[2]" variant="outlined"
                            onClick={() => {
                                handleClick();
                                // setBundleList([...bundleList].filter((element) => element.id !== item.id));
                                handleModalOpen();
                            }}>
                            Add
                        </Button>
                    )
                }
            </div>
        );
    }
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            PaperProps={{
                style: {
                    maxHeight: '450px',
                    overflowY: 'auto',
                },
            }}
        >
            <div className='min-w-[380px]'>
                <div className='m-[10px]'>
                    <TextField placeholder='Search' sx={{ width: "100%" }} />
                </div>
                <Divider sx={{ marginBottom: "10px" }} />
                <p className='ml-3'>Bundles</p>
                {streamListOne.map((item, index) => <StreamItem key={index} icon={item.icon} item={item.item} status={index % 2 === 0 ? true : false} />)}
                <Divider sx={{ marginBottom: "10px" }} />
                <p className='ml-3'>Folders</p>
                {streamListTwo.map((item, index) => <StreamItem key={index} icon={item.icon} item={item.item} status={index % 2 === 0 ? true : false} />)}
            </div>
            <SaveAiModal open={openModal} handleModalClose={handleModalClose} />
        </Popover>
    );
}

const SaveAiModal = ({ open, handleModalClose }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p className="font-bold text-[22px]">Name the AI Feed</p>
                    <div className="mt-[15px]">
                        <TextField sx={{ width: "100%" }} />
                    </div>
                    <div className="flex flex-row mt-[15px] gap-[5px]">
                        <p className="flex-grow"></p>
                        <Button onClick={handleModalClose} sx={{ width: "70px", color: "gray", borderColor: "gray" }} variant="outlined">Cancel</Button>
                        <Button onClick={handleModalClose} sx={{ width: "120px", backgroundColor: "#50B8EB", fontSize: "12px" }} variant="contained">Save AI Feed</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

const CategorySelect = () => {
    const [category, setCategory] = useState("");
    const handleChange = (e) => {
        setCategory(e.target.value);
    }
    return (
        <Select
            value={category}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{
                minWidth: "230px",
                '& .MuiOutlinedInput-notchedOutline': { borderWidth: "0px" },
                '& .MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline': { borderWidth: "0px" }
            }}
        >
            <MenuItem value="">
                Find in Title & Content
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    );
}
const ElonMusk = () => {
    const [buttonGroupStatus, setButtonGroupStatus] = useState(true);
    const { handleOpen, handleClose, anchorEl } = usePopup();
    const [bundleList, setBundleList] = useState([]);
    return (
        <>
            <div>
                <p className="font-bold text-[20px]">Monitor the web with AI Feeds</p>
            </div>
            <div className="flex flex-row justify-between mt-[20px]">
                <div className="flex flex-wrap w-[70%] gap-[20px]">
                    <ProfileButton url="img/icons/feed/person.svg" name="Elon Musk" />
                    <Button sx={{ color: "green" }}>+ OR</Button>
                </div>
                <div>
                    <CategorySelect />
                    <IconButton>
                        <DeleteOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <div className="flex flex-row items-center mt-[10px]">
                <p>AND</p>
                <div className="ml-3 border-t border-dotted border-gray-300 my-4 w-full"></div>
            </div>
            <div className="flex flex-row justify-between mt-[20px]">
                <div className="flex flex-wrap w-[70%] gap-[20px]">
                    <ProfileButton url="img/icons/feed/person.svg" name="Elon Musk" content={["Articles mentioning 'Elon Reeve Musk FRS', 'Elon Reeve Musk', 'Elon R. Musk' or 2 other aliases", "Articles mentioning 'Elon Musk' only"]} />
                    <ProfileButton url="img/icons/feed/person.svg" name="Tim Cook" />
                    <ProfileButton url="img/icons/feed/person.svg" name="Jeff Bezos" />
                    <ProfileButton url="img/icons/feed/checked.png" name="Bill Gates" bill={true} />
                    <ProfileButton url="img/icons/feed/person.svg" name="Mark Zuckerberg" />
                    <Button sx={{ color: "green" }}>+ OR</Button>
                </div>
                <div>
                    <CategorySelect />
                    <IconButton>
                        <DeleteOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <div className="flex flex-row items-center mt-[10px]">
                <Button sx={{ color: "green" }}>+ And</Button>
                <p>/</p>
                <Button sx={{ color: "green" }}>- Not</Button>
                <div className="border-t border-dotted border-gray-300 my-4 w-full"></div>
            </div>
            <div className="flex flex-row justify-between mt-[20px]">
                <div className="flex flex-wrap w-[70%] gap-[20px]">
                    <ProfileButton url="img/icons/feed/product_launch.svg" name="Product Launches" content={["Articles about Product Launches", "Articles mentioning 'Product Launches' only"]} />
                    <Button sx={{ color: "green" }}>+ OR</Button>
                </div>
                <div>
                    <CategorySelect />
                    <IconButton>
                        <DeleteOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <div className="my-[30px]">
                <Button variant="contained" sx={{ color: "#555", backgroundColor: "#D9D9D9" }} onClick={handleOpen} >
                    Save Ai Feed
                </Button>
                <Button sx={{ color: "#555" }}>
                    clear
                </Button>
            </div>
            <div className="flex flex-row justify-between">
                <div className="w-[50%]">
                    <p className="text-[25px] text-[#555]">Preview</p>
                    <p className="text-[#777] mt-[10px]">1K articles per week</p>
                    <div className="flex flex-row items-center mt-[5px]">
                        <p className="bg-[#FCF5E5] p-[10px] rounded-md">{<ErrorOutlineIcon sx={{ color: "#CFB386" }} />}&nbsp;&nbsp;Too many articles. Refine to less than 500 articles per week. <span className="underline">Learn how</span></p>
                    </div>
                    <ImagePanel
                        url={"img/news/elon_1.png"}
                        content={
                            <>
                                <div className="text-[15px]">
                                    <p className="font-bold text-[17px]">X is <span className="bg-[#E0F4E5]">Elon Musk</span>'s Lonely Party Now</p>
                                    <p><span>Market Intel</span>&middot;The Atlantic / 5 min</p>
                                    <p><span className="bg-[#E0F4E5]">Elon Musk</span>'s reinvention of the platform, from its name down to its core features, has rendered it nearly unrecognizable to users... I think <span className="bg-[#E0F4E5]">Elon Musk</span> is trying to use his billions of dollars to reorient that logic, and it's no...</p>
                                </div>
                            </>
                        }
                    />
                    <ImagePanel
                        url={"img/news/elon_2.png"}
                        content={
                            <>
                                <div className="text-[15px]">
                                    <p className="font-bold text-[17px]">Twitter Takeover: <span className="bg-[#E0F4E5]">Elon Musk</span>Transforms Social Media Landscape - TickerTV News</p>
                                    <p>TickerTV News / 18min</p>
                                    <p><span className="bg-[#E0F4E5]">Elon Musk</span> Transforms Social Media Landscape</p>
                                </div>
                            </>
                        }
                    />
                </div>
                <div className="w-[20%]">
                    <p className="text-[22px] text-[#777] mb-[25px]">Refine Sources</p>
                    <ButtonGroup>
                        <Button onClick={() => setButtonGroupStatus(true)} sx={{ backgroundColor: buttonGroupStatus ? "#D9F0FD" : "white", borderColor: buttonGroupStatus ? "#97AEB5" : "#999", textTransform: 'none', color: "#555" }}>Custom Mode</Button>
                        <Button onClick={() => setButtonGroupStatus(false)} sx={{ backgroundColor: !buttonGroupStatus ? "#D9F0FD" : "white", borderColor: !buttonGroupStatus ? "#97AEB5" : "#999", textTransform: 'none', color: "#555" }}>All Sphere</Button>
                    </ButtonGroup>
                    <BundlePanel bundleList={bundleList} />
                    <Button sx={{ color: "#84BEC6", marginTop: "15px" }} onClick={handleOpen}>{<AddOutlinedIcon />}&nbsp;&nbsp;Add Bundles & Feeds</Button>
                    <Button sx={{ color: "#84BEC6", marginTop: "15px" }}>{<ContentCopyOutlinedIcon />}&nbsp;&nbsp;Copy Url</Button>
                    <AddBundlePopOver handleClose={handleClose} anchorEl={anchorEl} bundleList={bundleList} setBundleList={setBundleList} />
                </div>
            </div >
        </>
    );
}

export default ElonMusk;