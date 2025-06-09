import { useState, useEffect, useRef } from "react";
import { BsGithub, BsFilePdf, BsStickyFill, BsLinkedin, BsCalendar } from "react-icons/bs";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import { RiTerminalFill } from "react-icons/ri";
import {
	AnimatePresence,
	MotionValue,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from "motion/react";
import ResumeViewer from "./ResumeViewer";
import { userConfig } from "../../config/userConfig";

interface DesktopDockProps {
	onTerminalClick: () => void;
	onNotesClick: () => void;
	onGitHubClick: () => void;
	activeApps: {
		terminal: boolean;
		notes: boolean;
		github: boolean;
		resume: boolean;
	};
}

interface DockIconProps {
	mouseX: MotionValue;
	onClick: () => void;
	icon: React.ReactNode;
	title: string;
	gradient: string;
	isActive?: boolean;
}

const DockIcon = ({ mouseX, onClick, icon, title, gradient, isActive }: DockIconProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const [hovered, setHovered] = useState(false);

	const distance = useTransform(mouseX, (val) => {
		const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
		return val - bounds.x - bounds.width / 2;
	});

	const widthTransform = useTransform(distance, [-150, 0, 150], [48, 80, 48]);
	const heightTransform = useTransform(distance, [-150, 0, 150], [48, 80, 48]);

	const width = useSpring(widthTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});
	const height = useSpring(heightTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	return (
		<motion.div
			ref={ref}
			style={{ width, height }}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onClick={onClick}
			className="relative cursor-pointer"
		>
			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0, y: 10, x: "-50%" }}
						animate={{ opacity: 1, y: 0, x: "-50%" }}
						exit={{ opacity: 0, y: 2, x: "-50%" }}
						className="absolute -top-8 left-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm whitespace-nowrap z-50"
					>
						{title}
					</motion.div>
				)}
			</AnimatePresence>
			<motion.div
				className={`w-full h-full ${gradient} rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out active:scale-95 ${
					isActive ? "ring-2 ring-white/50" : ""
				}`}
			>
				{icon}
			</motion.div>
		</motion.div>
	);
};

const DesktopDock = ({
	onTerminalClick,
	onNotesClick,
	onGitHubClick,
	activeApps,
}: DesktopDockProps) => {
	const [showResume, setShowResume] = useState(false);
	const [showLinksPopup, setShowLinksPopup] = useState(false);
	const linksPopupRef = useRef<HTMLDivElement>(null);
	const mouseX = useMotionValue(Infinity);

	const handleLinksClick = () => {
		setShowLinksPopup(!showLinksPopup);
	};

	const handleCalendarClick = () => {
		window.open(userConfig.contact.calendly, "https://calendly.com/vyom-malo6904");
	};

	const handleResumeClick = () => {
		setShowResume(true);
	};

	const handleCloseResume = () => {
		setShowResume(false);
	};

	const handleEmailClick = () => {
		window.open(`mailto:${userConfig.contact.email}`, "vyom.malo6904@gmail.com");
	};

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (linksPopupRef.current && !linksPopupRef.current.contains(event.target as Node)) {
				setShowLinksPopup(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const LinksPopup = () => (
		<div
			ref={linksPopupRef}
			className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800/90 w-30 backdrop-blur-sm rounded-lg p-4 shadow-xl z-50"
		>
			<div className="grid grid-cols-1 gap-y-2">
				<a
					href={userConfig.social.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 text-gray-300 hover:text-white"
				>
					<BsLinkedin size={20} />
					<span>LinkedIn</span>
				</a>
				<a
					href={userConfig.social.github}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 text-gray-300 hover:text-white"
				>
					<BsGithub size={20} />
					<span>GitHub</span>
				</a>
				<a
					href={`mailto:${userConfig.contact.email}`}
					className="flex items-center gap-2 text-gray-300 hover:text-white"
				>
					<IoIosMail size={20} />
					<span>Email</span>
				</a>
				<a
					href={`tel:${userConfig.contact.phone}`}
					className="flex items-center gap-2 text-gray-300 hover:text-white"
				>
					<IoIosCall size={20} />
					<span>Call</span>
				</a>
			</div>
		</div>
	);

	return (
		<>
			<div className="fixed bottom-0 left-0 right-0 hidden md:flex justify-center pb-4 z-100">
				<motion.div
					onMouseMove={(e) => mouseX.set(e.pageX)}
					onMouseLeave={() => mouseX.set(Infinity)}
				>
					<div className="flex space-x-2 items-end">
						{/* GitHub */}
						<DockIcon
							mouseX={mouseX}
							onClick={onGitHubClick}
							icon={<BsGithub size={35} className="text-gray-100" />}
							title="My Projects"
							gradient="bg-gradient-to-t from-black to-black/60"
							isActive={activeApps.github}
						/>

						{/* Notes */}
						<DockIcon
							mouseX={mouseX}
							onClick={onNotesClick}
							icon={<BsStickyFill size={35} className="text-white" />}
							title="Notes"
							gradient="bg-gradient-to-t from-yellow-600 to-yellow-400"
							isActive={activeApps.notes}
						/>

						{/* Resume */}
						<DockIcon
							mouseX={mouseX}
							onClick={handleResumeClick}
							icon={<BsFilePdf size={35} className="text-white" />}
							title="View Resume"
							gradient="bg-gradient-to-t from-red-600 to-red-400"
							isActive={activeApps.resume}
						/>

						{/* Calendar */}
						<DockIcon
							mouseX={mouseX}
							onClick={handleCalendarClick}
							icon={<BsCalendar size={30} className="text-white" />}
							title="Schedule a Call"
							gradient="bg-gradient-to-t from-blue-600 to-blue-400"
						/>

						{/* Email */}
						<DockIcon
							mouseX={mouseX}
							onClick={handleEmailClick}
							icon={<IoIosMail size={40} className="text-white" />}
							title="Email"
							gradient="bg-gradient-to-t from-blue-600 to-blue-400"
						/>

						{/* Links */}
						<div className="relative">
							<DockIcon
								mouseX={mouseX}
								onClick={handleLinksClick}
								icon={<FaLink size={30} className="text-white" />}
								title="Contact Links"
								gradient="bg-gradient-to-t from-purple-600 to-purple-400"
							/>
							{showLinksPopup && <LinksPopup />}
						</div>

						{/* Terminal */}
						<DockIcon
							mouseX={mouseX}
							onClick={onTerminalClick}
							icon={<RiTerminalFill size={35} className="text-white" />}
							title="Terminal"
							gradient="bg-gradient-to-t from-black to-black/60"
							isActive={activeApps.terminal}
						/>
					</div>
				</motion.div>
			</div>
			<ResumeViewer isOpen={showResume} onClose={handleCloseResume} />
		</>
	);
};

export default DesktopDock;
