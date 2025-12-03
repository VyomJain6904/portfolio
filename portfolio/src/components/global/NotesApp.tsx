import { useState } from "react";
import { FaGraduationCap, FaChevronLeft, FaBookOpen, FaCode } from "react-icons/fa";
import { userConfig } from "../../config/userConfig";
import DraggableWindow from "./DraggableWindow";

interface NotesAppProps {
	isOpen: boolean;
	onClose: () => void;
}

type Section = "menu" | "education" | "courses" | "skills" | "blogs";

// Type for storing image indices per item
type ImageIndicesState = Record<string, number>;

interface Image {
	url: string;
	alt?: string;
	description?: string;
}

const NotesApp = ({ isOpen, onClose }: NotesAppProps) => {
	const [activeSection, setActiveSection] = useState<Section>("menu");
	// Store image indices in an object: { 'itemId': index }
	const [activeImageIndices, setActiveImageIndices] = useState<ImageIndicesState>({});

	const handleSectionClick = (section: Section) => {
		setActiveSection(section);
		// No need to reset image indices globally here,
		// they are per-item now and will default to 0 if not set
	};

	const handleBackClick = () => {
		setActiveSection("menu");
	};

	// Update image index for a specific item
	const handleNextImage = (itemId: string, images: readonly Image[]) => {
		setActiveImageIndices((prevIndices) => ({
			...prevIndices,
			[itemId]: ((prevIndices[itemId] ?? -1) + 1) % images.length,
		}));
	};

	// Update image index for a specific item
	const handlePrevImage = (itemId: string, images: readonly Image[]) => {
		setActiveImageIndices((prevIndices) => ({
			...prevIndices,
			[itemId]: ((prevIndices[itemId] ?? 0) - 1 + images.length) % images.length,
		}));
	};

	if (!isOpen) return null;

	const education = userConfig.education || [];
	const courses = userConfig.courses || [];
	const skills = userConfig.skills || [];
	const blogs = userConfig.blogs || [];

	const renderBackButton = () => (
		<button
			onClick={handleBackClick}
			className="flex items-center gap-2 text-gray-300 hover:text-gray-100 mb-4 cursor-pointer"
		>
			<FaChevronLeft />
			<span>Back to Menu</span>
		</button>
	);

	// Accepts itemId to manage state correctly
	const renderImageCarousel = (itemId: string, images: readonly Image[]) => {
		const currentIndex = activeImageIndices[itemId] ?? 0;
		if (!images || images.length === 0 || currentIndex >= images.length) {
			return null;
		}

		return (
			<div className="mt-4">
				<div className="rounded-lg overflow-hidden mb-2">
					<img
						src={images[currentIndex].url}
						alt={images[currentIndex].alt}
						className="w-full h-48 object-contain bg-gray-900 rounded-lg"
					/>
				</div>

				<div className="text-sm text-gray-400 mb-3">{images[currentIndex].description}</div>

				{images.length > 1 && (
					<div className="flex justify-between mt-2">
						<button
							onClick={() => handlePrevImage(itemId, images)}
							className="bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
						>
							←
						</button>
						<span className="text-gray-400">
							{currentIndex + 1} / {images.length}
						</span>
						<button
							onClick={() => handleNextImage(itemId, images)}
							className="bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
						>
							→
						</button>
					</div>
				)}
			</div>
		);
	};

	const renderEducation = () => (
		<div className="space-y-6">
			{renderBackButton()}
			<h2 className="text-2xl font-bold text-gray-200 mb-6">Education</h2>
			<div className="grid grid-cols-1 md:grid-cols-1 gap-6">
				{education.map((item, index) => {
					const itemId = `education-${index}`;
					return (
						<div
							key={itemId}
							className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
						>
							<h3 className="text-xl font-semibold text-gray-200 mb-2">
								{item.degree} {item.major && `- ${item.major}`}
							</h3>
							<div className="text-gray-300 mb-2">
								{item.institution}, {item.location}
							</div>
							<div className="text-gray-400 mb-3">{item.year}</div>
							<p className="text-gray-300 mb-4">{item.description}</p>
							{item.images &&
								item.images.length > 0 &&
								renderImageCarousel(itemId, item.images)}
						</div>
					);
				})}
			</div>
		</div>
	);

	const renderCourses = () => (
		<div className="space-y-6">
			{renderBackButton()}
			<h2 className="text-2xl font-bold text-gray-200 mb-6">Courses</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{courses.map((item, index) => {
					const itemId = `courses-${index}`;
					return (
						<div
							key={itemId}
							className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
						>
							<h3 className="text-xl font-semibold text-gray-200 mb-2">
								{item.title}
							</h3>
							<div className="text-gray-300 mb-2">
								{item.institution}, {item.location}
							</div>
							<div className="text-gray-400 mb-3">{item.year}</div>
							<p className="text-gray-300 mb-4">{item.description}</p>
							{item.images &&
								item.images.length > 0 &&
								renderImageCarousel(itemId, item.images)}
						</div>
					);
				})}
			</div>
		</div>
	);

	const renderBlogs = () => (
		<div className="space-y-6">
			{renderBackButton()}
			<h2 className="text-2xl font-bold text-gray-200 mb-6">Blogs</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{blogs.map((item, index) => {
					const itemId = `blogs-${index}`;
					return (
						<div
							key={itemId}
							className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
							onClick={() => window.open(item.url, "_blank")}
						>
							<h3 className="text-xl font-semibold text-gray-200 mb-2">
								{item.title}
							</h3>
							<div className="text-gray-300 mb-2">{item.source}</div>
							<p className="text-gray-300 mb-4">{item.description}</p>
							{item.images &&
								item.images.length > 0 &&
								renderImageCarousel(itemId, item.images)}
						</div>
					);
				})}
			</div>
		</div>
	);

	const renderSkills = () => (
		<div className="space-y-6">
			{renderBackButton()}
			<h2 className="text-2xl font-bold text-gray-200 mb-6">Skills</h2>
			<div className="bg-gray-800/50 p-6 rounded-xl shadow-lg">
				<div className="flex flex-wrap gap-2">
					{skills.map((skill, index) => (
						<span
							key={index}
							className="px-3 py-1 bg-gray-700 rounded text-sm text-gray-300"
						>
							{skill}
						</span>
					))}
				</div>
			</div>
		</div>
	);

	const renderMenu = () => (
		<div>
			<h2 className="text-2xl font-bold text-gray-200 mb-6">My Notes</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{/* Education */}
				<div
					className="bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors"
					onClick={() => handleSectionClick("education")}
				>
					<div className="flex items-center gap-3 mb-2">
						<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
							<FaGraduationCap size={28} className="text-white" />
						</div>
						<h3 className="text-xl font-semibold text-gray-200">Education</h3>
					</div>
					<p className="text-gray-400">
						View my educational background and qualifications
					</p>
				</div>

				{/* Courses */}
				<div
					className="bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors"
					onClick={() => handleSectionClick("courses")}
				>
					<div className="flex items-center gap-3 mb-2">
						<div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
							<FaBookOpen size={28} className="text-white" />
						</div>
						<h3 className="text-xl font-semibold text-gray-200">Courses</h3>
					</div>
					<p className="text-gray-400">Check out courses I have completed</p>
				</div>

				{/* Blogs */}
				<div
					className="bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors"
					onClick={() => handleSectionClick("blogs")}
				>
					<div className="flex items-center gap-3 mb-2">
						<div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
							<FaBookOpen size={28} className="text-white" />
						</div>
						<h3 className="text-xl font-semibold text-gray-200">Blogs</h3>
					</div>
					<p className="text-gray-400">Read my blog posts and Walkthroughs</p>
				</div>

				{/* Skills */}
				<div
					className="bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors"
					onClick={() => handleSectionClick("skills")}
				>
					<div className="flex items-center gap-3 mb-2">
						<div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
							<FaCode size={28} className="text-white" />
						</div>
						<h3 className="text-xl font-semibold text-gray-200">Skills</h3>
					</div>
					<p className="text-gray-400">See my technical skills and expertise</p>
				</div>
			</div>
		</div>
	);

	const getWindowTitle = () => {
		switch (activeSection) {
			case "menu":
				return "Notes";
			case "education":
				return "Education Notes";
			case "courses":
				return "Courses Notes";
			case "skills":
				return "Skills Notes";
			case "blogs":
				return "Blogs Notes";
			default:
				return "Notes";
		}
	};

	return (
		<DraggableWindow
			title={getWindowTitle()}
			onClose={onClose}
			initialPosition={{
				x: Math.floor(window.innerWidth * 0.3),
				y: Math.floor(window.innerHeight * 0.2),
			}}
			className="w-[93vw] md:max-w-4xl max-h-[90vh] flex flex-col"
			initialSize={{ width: 1000, height: 600 }}
		>
			<div className="flex flex-col flex-grow min-h-0 h-full">
				<div className="overflow-y-auto flex-grow min-h-0 p-4 md:p-6">
					{activeSection === "menu" && renderMenu()}
					{activeSection === "education" && renderEducation()}
					{activeSection === "courses" && renderCourses()}
					{activeSection === "blogs" && renderBlogs()}
					{activeSection === "skills" && renderSkills()}
				</div>
			</div>
		</DraggableWindow>
	);
};

export default NotesApp;
