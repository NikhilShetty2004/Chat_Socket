import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	
	return (
		<div className='flex-1 overflow-auto'>
			<div className='space-y-2'>
				{conversations.map((conversation, idx) => (
					<Conversation
						key={conversation._id}
						conversation={conversation}
						lastIdx={idx === conversations.length - 1}
					/>
				))}

				{loading && (
					<div className='flex justify-center p-4'>
						<span className='loading loading-spinner text-blue-500'></span>
					</div>
				)}
			</div>
		</div>
	);
};

export default Conversations;