import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex flex-col h-full bg-gray-800'>
  {!selectedConversation ? (
    <NoChatSelected />
  ) : (
    <>
      {/* Header */}
	<div className='p-4 border-b border-gray-700 flex justify-between items-center'>
        <div className='flex items-center space-x-4 text-gray-300'>
          <span>To:</span>
          <span className='font-semibold text-white'>{selectedConversation.fullName}</span>
        </div>
        <div className='flex gap-4'>
          <button className='text-blue-500 hover:text-blue-400 transition-all duration-200'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path d='M21 3l-6 6m0 0V4m0 5h5M5 21l6-6m0 0v5m0-5H4' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
            </svg>
          </button>
          <button className='text-blue-500 hover:text-blue-400 transition-all duration-200'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
            </svg>
          </button>
        </div>
    </div>
      <Messages />
      <MessageInput />
    </>
  )}
</div>
	);
};

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
<div className='flex items-center justify-center w-full h-full bg-gray-800'>
  <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-4'>
    <p>Welcome 👋 {authUser.fullName} ❄</p>
    <p className='text-gray-400'>Select a chat to start messaging</p>
    <TiMessages className='text-4xl md:text-6xl text-blue-400 mt-2' />
  </div>
</div>
	);
};

export default MessageContainer;