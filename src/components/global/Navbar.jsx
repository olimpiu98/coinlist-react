import React from "react";
import { GiTwoCoins } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Globaldata from "../global/Globaldata";
import Styles from "../Styles";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
	const activLink = `btn btn-ghost btn-active text-sm font-medium`;
	const defaultLink = `btn btn-ghost text-sm font-medium`;
	return (
		<Disclosure as='nav' className='bg-neutral z-10'>
			{({ open }) => (
				<>
					<Globaldata />
					<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
						<div className='relative flex items-center justify-between h-16'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<MenuIcon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='logo flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
								<NavLink to='/' className='flex-shrink-0 flex items-center'>
									<GiTwoCoins className='icon ' />
									<h1>
										Coin <span className='purple'>Statistics</span>
									</h1>
								</NavLink>
								<div className='hidden sm:block sm:ml-6'>
									<div className='flex space-x-4'>
										<NavLink
											key='dashboard'
											to='/'
											className={({ isActive }) => (isActive ? activLink : defaultLink)}
										>
											Dashboard
										</NavLink>
										<NavLink
											key='exchanges'
											to='/exchanges'
											className={({ isActive }) => (isActive ? activLink : defaultLink)}
										>
											Exchanges
										</NavLink>
										<NavLink
											key='projects'
											to='/projects'
											className={({ isActive }) => (isActive ? activLink : defaultLink)}
										>
											Projects
										</NavLink>
										<NavLink
											key='calendar'
											to='/calendar'
											className={({ isActive }) => (isActive ? activLink : defaultLink)}
										>
											Calendar
										</NavLink>
									</div>
								</div>
							</div>
							<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
								<button
									type='button'
									className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
								>
									<span className='sr-only'>View notifications</span>
									<BellIcon className='h-6 w-6' aria-hidden='true' />
								</button>

								{/* Profile dropdown */}
								<Menu as='div' className='ml-3 relative z-10'>
									<div>
										<Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
											<span className='sr-only'>Open user menu</span>
											<img
												className='h-8 w-8 rounded-full'
												src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
												alt=''
											/>
										</Menu.Button>
									</div>
									<Transition
										enter='transition ease-out duration-100'
										enterFrom='transform opacity-0 scale-95'
										enterTo='transform opacity-100 scale-100'
										leave='transition ease-in duration-75'
										leaveFrom='transform opacity-100 scale-100'
										leaveTo='transform opacity-0 scale-95'
									>
										<Menu.Items className={Styles.nvBar.menu}>
											<Menu.Item>
												{({ active }) => (
													<NavLink
														to='#'
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Your Profile
													</NavLink>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<NavLink
														to='#'
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Settings
													</NavLink>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<NavLink
														to='#'
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Sign out
													</NavLink>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='grid justify-items-stretch p-3 space-y-4 '>
							<Disclosure.Button>
								<NavLink
									key='dashboard'
									to='/'
									className={({ isActive }) =>
										isActive
											? " bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
											: " text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
									}
								>
									Dashboarddsa
								</NavLink>
								<NavLink
									key='exchanges'
									to='/exchanges'
									className={({ isActive }) =>
										isActive
											? "bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
											: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									}
								>
									Exchanges
								</NavLink>
								<NavLink
									key='projects'
									to='/projects'
									className={({ isActive }) =>
										isActive
											? "bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
											: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									}
								>
									Projects
								</NavLink>
								<NavLink
									key='calendar'
									to='/calendar'
									className={({ isActive }) =>
										isActive
											? "bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium text-a"
											: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									}
								>
									Calendar
								</NavLink>
							</Disclosure.Button>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
