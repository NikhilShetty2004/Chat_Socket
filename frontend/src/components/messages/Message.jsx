import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "items-end" : "items-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-600" : "bg-gray-800";
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`flex flex-col ${chatClassName} space-y-1 mb-4`}>
			<div className='flex items-end gap-2 max-w-[70%]'>
				{!fromMe && (
					<div className='w-8 h-8 rounded-full overflow-hidden flex-shrink-0'>
						<img alt='Profile' src={profilePic} className='w-full h-full object-cover' />
					</div>
				)}
				<div
					className={`${bubbleBgColor} ${shakeClass} px-4 py-2 rounded-lg text-white text-sm`}
				>
					{message.message}
				</div>
				{fromMe && (
					<div className='w-8 h-8 rounded-full overflow-hidden flex-shrink-0'>
						<img alt='Profile' src={profilePic} className='w-full h-full object-cover' />
					</div>
				)}
			</div>
			<span className='text-xs text-gray-500'>{formattedTime}</span>
		</div>
	);
};

export default Message;