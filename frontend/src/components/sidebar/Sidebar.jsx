import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
<div className='w-[300px] bg-gray-800 border-r border-gray-700 flex flex-col h-full'>
  <div className='p-4 flex flex-col h-full'>
    <SearchInput className='mb-4' />
    <div className='h-[1px] bg-gray-700 my-4'></div>
    <Conversations className='flex-grow' />
    <LogoutButton className='mt-4' />
  </div>
</div>
	);
};

export default Sidebar;