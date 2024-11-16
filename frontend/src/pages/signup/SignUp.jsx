import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto bg-gray-900">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-800">
				<h1 className="text-3xl font-semibold text-center text-gray-200">
					Sign Up <span className="text-blue-500"> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base text-gray-400">Full Name</span>
						</label>
						<input
							type="text"
							placeholder="Enter Full Name"
							className="w-full input input-bordered h-10 bg-gray-700 text-gray-200 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className="label p-2">
							<span className="text-base text-gray-400">Username</span>
						</label>
						<input
							type="text"
							placeholder="Enter UserName"
							className="w-full input input-bordered h-10 bg-gray-700 text-gray-200 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className="label">
							<span className="text-base text-gray-400">Password</span>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full input input-bordered h-10 bg-gray-700 text-gray-200 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className="label">
							<span className="text-base text-gray-400">Confirm Password</span>
						</label>
						<input
							type="password"
							placeholder="Confirm Password"
							className="w-full input input-bordered h-10 bg-gray-700 text-gray-200 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<Link
						to="/login"
						className="text-sm text-blue-500 hover:underline hover:text-blue-400 mt-2 inline-block"
					>
						Already have an account?
					</Link>

					<div>
						<button
							className="btn btn-block btn-sm mt-2 bg-blue-500 text-gray-900 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1 disabled:opacity-50"
							disabled={loading}
						>
							{loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
