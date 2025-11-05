import { useState, useRef, useEffect } from "react";
import { User, LogOut, ChevronDown, Settings, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

// Generate a consistent random avatar based on user email
const getRandomAvatar = (seed: string = "default") => {
	const styles = [
		"adventurer",
		"avataaars",
		"bottts",
		"fun-emoji",
		"micah",
		"personas",
	];
	const hash = seed
		.split("")
		.reduce((acc, char) => acc + char.charCodeAt(0), 0);
	const style = styles[hash % styles.length];
	return `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(
		seed
	)}`;
};

const UserMenu = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const { user, logout, isAuthenticated } = useAuth();

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsDropdownOpen(false);
			}
		};

		if (isDropdownOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isDropdownOpen]);

	// Debug logging
	useEffect(() => {
		console.log("UserMenu - Auth State:", { isAuthenticated, user });
	}, [isAuthenticated, user]);

	// Don't render if user is not authenticated
	if (!isAuthenticated) {
		return null;
	}

	const handleLogout = () => {
		logout("You have been logged out successfully!");
		setIsDropdownOpen(false);
	};

	// Set defaults for user details - create a default user object if none exists
	const firstName = user?.firstName || "User";
	const lastName = user?.lastName || "";
	const email = user?.email || "user@example.com";
	const phoneNumber = user?.phoneNumber || "";

	// Get user initials for avatar fallback
	const initials = `${firstName[0]}${
		lastName[0] || firstName[1] || ""
	}`.toUpperCase();

	// Generate random avatar URL based on email
	const avatarUrl = getRandomAvatar(email);

	return (
		<div className="relative" ref={dropdownRef}>
			{/* User Avatar Button */}
			<button
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
				className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-amber-500/20 transition-all duration-300 group"
				aria-label="User menu"
			>
				{/* Avatar with random image */}
				<div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md ring-2 ring-amber-300/50 overflow-hidden group-hover:ring-amber-400/70 transition-all">
					<img
						src={avatarUrl}
						alt={`${firstName}'s avatar`}
						className="w-full h-full object-cover"
						onError={(e) => {
							// Fallback to initials if image fails to load
							e.currentTarget.style.display = "none";
							const fallback = e.currentTarget.nextElementSibling;
							if (fallback) fallback.classList.remove("hidden");
						}}
					/>
					<span className="text-white font-bold text-sm hidden">
						{initials}
					</span>
				</div>

				{/* User name - hidden on small screens */}
				<span className="text-white font-semibold hidden lg:block">
					{firstName}
				</span>

				{/* Chevron icon */}
				<ChevronDown
					className={`w-4 h-4 text-amber-300 transition-transform duration-200 ${
						isDropdownOpen ? "rotate-180" : ""
					}`}
				/>
			</button>

			{/* Dropdown Menu */}
			{isDropdownOpen && (
				<div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
					{/* User Info Section with gradient background */}
					<div className="px-5 py-4 bg-gradient-to-br from-amber-50 to-orange-50 border-b border-amber-100">
						<div className="flex items-center gap-3">
							{/* Larger avatar in dropdown */}
							<div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md ring-2 ring-amber-300/50 overflow-hidden">
								<img
									src={avatarUrl}
									alt={`${firstName}'s avatar`}
									className="w-full h-full object-cover"
									onError={(e) => {
										e.currentTarget.style.display = "none";
										const fallback = e.currentTarget.nextElementSibling;
										if (fallback) fallback.classList.remove("hidden");
									}}
								/>
								<span className="text-white font-bold text-lg hidden">
									{initials}
								</span>
							</div>

							<div className="flex-1 min-w-0">
								<p className="text-base font-bold text-gray-900 truncate">
									{firstName} {lastName}
								</p>
								<p className="text-xs text-gray-600 truncate mt-0.5">{email}</p>
								{phoneNumber && (
									<p className="text-xs text-gray-500 truncate mt-0.5">
										{phoneNumber}
									</p>
								)}
							</div>
						</div>
					</div>

					{/* Menu Items */}
					<div className="py-2">
						<Link
							to="/"
							className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-amber-50 transition-colors group"
							onClick={() => setIsDropdownOpen(false)}
						>
							<User className="w-4 h-4 text-gray-400 group-hover:text-amber-600 transition-colors" />
							<span className="font-medium">My Profile</span>
						</Link>

						<Link
							to="/products"
							className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-amber-50 transition-colors group"
							onClick={() => setIsDropdownOpen(false)}
						>
							<Package className="w-4 h-4 text-gray-400 group-hover:text-amber-600 transition-colors" />
							<span className="font-medium">My Orders</span>
						</Link>

						<Link
							to="/"
							className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-amber-50 transition-colors group"
							onClick={() => setIsDropdownOpen(false)}
						>
							<Settings className="w-4 h-4 text-gray-400 group-hover:text-amber-600 transition-colors" />
							<span className="font-medium">Settings</span>
						</Link>
					</div>

					{/* Logout Button */}
					<div className="border-t border-gray-100 p-2">
						<button
							onClick={handleLogout}
							className="w-full px-5 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-3 rounded-lg font-medium group"
						>
							<LogOut className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
							<span>Logout</span>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
