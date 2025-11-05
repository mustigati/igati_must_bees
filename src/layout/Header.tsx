import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, ShoppingCart, X } from "lucide-react";
import igatiLogo from "../assets/images/projects/partners/IGATI LOGO-01 1.png";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/stores";
import { toggleStatusTab } from "@/stores/cart";
import UserMenu from "./UserMenu";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const dispatch = useDispatch();
	const [totalQuantity, setTotalQuantity] = useState(0);
	const carts = useSelector((store: RootState) => store.cart.items);
	const { isAuthenticated, user, logout } = useAuth();

	useEffect(() => {
		const total = carts.reduce((sum, item) => sum + item.quantity, 0);
		setTotalQuantity(total);
	}, [carts]);

	const handleOpenTabCart = () => dispatch(toggleStatusTab());

	// Set defaults for user details
	const firstName = user?.firstName || "User";
	const lastName = user?.lastName || "";
	const email = user?.email || "user@example.com";

	const links = [
		{ to: "/", label: "Home" },
		{ to: "/projects", label: "Projects" },
		{ to: "/products", label: "Products" },
		{ to: "/about", label: "About" },
		{ to: "/contact", label: "Contact" },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-[#2d4a2b] shadow-lg border-b border-[#1f3a1d] transition-all duration-300">
			<div className="container items-center mx-auto px-4">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo */}
					<Link
						to="/"
						className="flex items-center gap-3 hover:opacity-80 transition-opacity"
					>
						<img
							src={igatiLogo}
							alt="Igati Logo"
							className="size-30 object-contain"
						/>
						<div className="hidden lg:block">
							<h3 className="text-lg font-bold text-white">IGATI/MUST</h3>
							<p className="text-sm text-amber-300 font-medium">
								One Million Bee Initiative
							</p>
						</div>
					</Link>

					{/* Desktop Nav */}
					<nav className="hidden md:flex items-center gap-6">
						{links.map((link) => (
							<NavLink
								key={link.to}
								to={link.to}
								className={({ isActive }) =>
									`text-white font-medium hover:text-amber-300 transition-all duration-300 ${
										isActive
											? "text-amber-300 border-b-2 border-amber-300 pb-1"
											: ""
									}`
								}
							>
								{link.label}
							</NavLink>
						))}

						{/* Desktop Auth / Cart */}
						<div className="flex items-center gap-3 ml-2 pl-6 border-l border-[#1f3a1d]">
							{/* Cart */}
							<Button
								onClick={handleOpenTabCart}
								variant="outline"
								className="hover:bg-amber-600 hover:text-white outline-none cursor-pointer transition-all duration-300 border-none relative"
							>
								<ShoppingCart className="w-4 h-4" />
								<span className="ml-2 hidden sm:inline">Cart</span>
								{totalQuantity > 0 && (
									<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
										{totalQuantity}
									</span>
								)}
							</Button>

							{/* Auth area */}
							{isAuthenticated ? (
								<UserMenu />
							) : (
								<div className="flex items-center gap-3">
									<NavLink
										to="/signin"
										className={({ isActive }) =>
											`text-white hover:text-amber-300 transition-colors ${
												isActive ? "text-amber-300" : ""
											}`
										}
									>
										Sign In
									</NavLink>
									<NavLink to="/signup">
										{({ isActive }) => (
											<Button
												className={`bg-amber-500 hover:bg-amber-600 text-white ${
													isActive ? "bg-amber-600" : ""
												}`}
											>
												Sign Up
											</Button>
										)}
									</NavLink>
								</div>
							)}
						</div>
					</nav>

					{/* Mobile top-bar buttons (always visible) */}
					<div className="flex items-center gap-3 md:hidden">
						{/* Cart */}
						<Button
							onClick={handleOpenTabCart}
							variant="outline"
							className="hover:bg-amber-600 hover:text-white outline-none cursor-pointer transition-all duration-300 border-none relative"
						>
							<ShoppingCart className="w-4 h-4" />
							{totalQuantity > 0 && (
								<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
									{totalQuantity}
								</span>
							)}
						</Button>

						{/* Auth / User */}
						{isAuthenticated ? (
							<UserMenu />
						) : (
							<NavLink to="/signin">
								{({ isActive }) => (
									<Button
										size="sm"
										className={`bg-amber-500 hover:bg-amber-600 text-white ${
											isActive ? "bg-amber-600" : ""
										}`}
									>
										Sign In
									</Button>
								)}
							</NavLink>
						)}

						{/* Hamburger */}
						<Button
							variant="outline"
							size="icon"
							className="border-[#1f3a1d] bg-[#243c22] hover:bg-[#1f3a1d] transition-colors"
							onClick={() => setIsMenuOpen((s) => !s)}
						>
							{isMenuOpen ? (
								<X className="h-4 w-4 text-white" />
							) : (
								<Menu className="h-4 w-4 text-white" />
							)}
						</Button>
					</div>
				</div>
			</div>

			{/* Mobile slide-down panel */}
			{isMenuOpen && (
				<div className="md:hidden bg-[#2d4a2b] border-t border-[#1f3a1d] shadow-lg px-4 py-6">
					<nav className="flex flex-col gap-4">
						{links.map((link) => (
							<NavLink
								key={link.to}
								to={link.to}
								className={({ isActive }) =>
									`text-white hover:text-amber-300 transition-colors ${
										isActive ? "text-amber-300 font-semibold" : ""
									}`
								}
								onClick={() => setIsMenuOpen(false)}
							>
								{link.label}
							</NavLink>
						))}

						{/* Mobile auth / cart links */}
						<div className="mt-4 space-y-4 border-t border-[#1f3a1d] pt-4">
							<button
								onClick={() => {
									handleOpenTabCart();
									setIsMenuOpen(false);
								}}
								className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all"
							>
								<ShoppingCart className="w-5 h-5" />
								Cart ({totalQuantity})
							</button>

							{isAuthenticated ? (
								<>
									<div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
										<p className="text-white font-semibold">
											{firstName} {lastName}
										</p>
										<p className="text-amber-300 text-sm">{email}</p>
									</div>
									<Link
										to="/profile"
										className="block w-full py-2 px-4 text-center text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all"
										onClick={() => setIsMenuOpen(false)}
									>
										My Profile
									</Link>
									<button
										onClick={() => {
											logout();
											setIsMenuOpen(false);
										}}
										className="w-full py-2 px-4 text-center text-red-400 border border-red-400/30 rounded-lg hover:bg-red-500/10 transition-all"
									>
										Logout
									</button>
								</>
							) : (
								<>
									<NavLink
										to="/signin"
										className="block w-full py-2 px-4 text-center text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all"
										onClick={() => setIsMenuOpen(false)}
									>
										Sign In
									</NavLink>
									<NavLink
										to="/signup"
										className="block w-full"
										onClick={() => setIsMenuOpen(false)}
									>
										<Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
											Sign Up
										</Button>
									</NavLink>
								</>
							)}
						</div>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
