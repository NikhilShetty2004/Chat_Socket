import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<div
			className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors
				${isSelected ? "bg-gray-800" : ""}`}
			onClick={() => setSelectedConversation(conversation)}
		>
			<div className='relative flex-shrink-0'>
				<img 
					src={conversation.profilePic} 
					alt='user avatar'
					className='w-12 h-12 rounded-full object-cover'
				/>
				{isOnline && (
					<span className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900'></span>
				)}
			</div>

			<div className='flex-1 min-w-0'>
				<div className='flex justify-between items-center'>
					<p className='text-white font-medium truncate'>{conversation.fullName}</p>
					
				</div>
			</div>
		</div>
	);
};

export default Conversation;