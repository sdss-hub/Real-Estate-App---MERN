import React from 'react';
import { useCookies } from 'react-cookie';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
	const navigate = useNavigate();
	const [cookies, setCookies] = useCookies(['access_token']);

	const clickHandler = () => {
		setCookies('access_token', '');
		navigate('/signin');
	};

	return (
		<header className="bg-slate-200 shadow-md">
			<div className="flex justify-between items-center max-w-6xl mx-auto p-3">
				<h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
					<span className="text-slate-500">Maverick</span>
					<span className="text-slate-700">Estate</span>
				</h1>
				<form className="bg-slate-100 p-3 rounded-lg flex items-center">
					<input
						type="text"
						placeholder="Search..."
						className="bg-transparent focus:outline-none w-24 sm:w-64"
					/>
					<FaSearch className="text-slate-600" />
				</form>
				<ul className="flex gap-4 ">
					<li className="hidden sm:inline text-slate-700 hover:underline">
						<Link to="/">Home</Link>
					</li>
					<li className="hidden sm:inline text-slate-700 hover:underline">
						<Link to="/about">About</Link>
					</li>
					<li className="text-slate-700 hover:underline">
						{cookies.access_token ? (
							<a onClick={clickHandler}>Sign Out</a>
						) : (
							<Link to="/signin">Sign in</Link>
						)}
					</li>
				</ul>
			</div>
		</header>
	);
}
