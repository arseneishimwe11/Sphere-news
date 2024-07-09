import DoneIcon from '@mui/icons-material/Done';

const CheckmarkDropdown = () => {
  const tags = ["All articles", "Older than one day", "Older than one week"];
  return (
    <>
      <div className="flex flex-row m-2">
        <b className="text-[gray] text-[12px] pt-2">MARK AS READ</b>
      </div>
      {tags.map((tag, index) => (
        <div key={index}>
          <div className="flex flex-row items-center pl-2 pb-3 gap-2 text-[12px]">
            {index === 0 ? <DoneIcon /> : index === 1 ? <p className='mr-1'>1d</p> : <p className='mr-1'>7d</p>}
            <p className='pr-2'>{tag}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CheckmarkDropdown;
