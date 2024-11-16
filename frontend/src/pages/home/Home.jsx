import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
<div className="flex m-4 w-full h-screen rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
	<div className="w-1/3 bg-gray-800">
		<Sidebar />
	</div>
	<div className="w-2/3 bg-gray-100">
		<MessageContainer />
	</div>
</div>

	);
};
export default Home;
