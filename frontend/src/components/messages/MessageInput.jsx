import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className='p-4 border-t border-gray-800' onSubmit={handleSubmit}>
			<div className='flex items-center space-x-2'>
				<input
					type='text'
					className='flex-1 bg-gray-800 border border-gray-600 text-white text-sm rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none'
					placeholder='Type something...'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>

				<button
					type='submit'
					className='p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors'
					disabled={loading}
				>
					{loading ? (
						<div className='loading loading-spinner loading-sm'></div>
					) : (
						<BsSend className='w-5 h-5' />
					)}
				</button>
			</div>
		</form>
	);
};

export default MessageInput;