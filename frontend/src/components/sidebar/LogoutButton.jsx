import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto pt-4 border-t border-gray-800'>
			{!loading ? (
				<button
					onClick={logout}
					className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-3 py-2 w-full rounded-lg hover:bg-gray-800'
				>
					<BiLogOut className='w-5 h-5' />
					<span>Logout</span>
				</button>
			) : (
				<div className='flex justify-center'>
					<span className='loading loading-spinner text-blue-500'></span>
				</div>
			)}
		</div>
	);
};

export default LogoutButton;


