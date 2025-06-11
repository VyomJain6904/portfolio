import auth from "./projects/auth.json";
import networkScanner from "./projects/network-scanner.json";
import findit from "./projects/findit.json";
import finditWebFrontend from "./projects/findit-web.json";
import vdShoppers from "./projects/vd-shoppers.json";
import portfolio from "./projects/portfolio.json";

export const userConfig = {
	// Personal Information
	name: "Vyom Maloo",
	role: "Cyber Security - Full-Stack Developer",
	location: "India",
	email: "vyom.malo6904@gmail.com",
	website: "Vyom Jain",
	roleFocus:
		"Web & Mobile Application Penetration Testing, Network Security, Cloud Security (AWS), Full-Stack Development (Next.js, React, Node.js), Backend APIs (Express, FastAPI), DevOps (Docker), Cybersecurity Automation (Python, Go)",
	age: 20,

	// Social Links
	social: {
		github: "https://github.com/VyomJain6904",
		linkedin: "https://www.linkedin.com/in/vyom-jain/", // Add your LinkedIn URL
	},

	// Contact Information
	contact: {
		email: "vyom.malo6904@gmail.com",
		phone: "+91 7069775137", // Add your phone number
		calendly: "",
	},

	// Resume Configuration
	resume: {
		url: "https://drive.google.com/file/d/1noGfpDxnMTXNrdMHb3i3_wnv_Na4ewOL/view?usp=drive_link",
		localPath: "/resume.pdf",
	},

	// Education Background
	education: [
		{
			degree: "Bachelor of Computer Science",
			major: "Cyber Security",
			institution: "Parul University",
			location: "Vadodara , India",
			year: "2022-2026",
			description:
				"Relevant coursework: Data Structures, Algorithms, Operating Systems, Computer Networks, Web Development, Database Management Systems, Software Engineering, Cloud Security, Cryptography, Vulnerability Assessment & Penetration Testing (VAPT), Digital Forensics & Incident Response, Cybersecurity, Ethical Hacking, Computer Architecture, Linux System Programming.",
			images: [
				{
					url: "https://paruluniversity.ac.in/pu-web/images/logo.png",
					alt: "vyom",
					description: "Parul University",
				},
			],
		},
	],

	courses: [
		{
			title: "Quick Heal Certified VAPT & Web VAPT Professional",
			description:
				"Certified in Vulnerability Assessment & Penetration Testing (VAPT) and Web Application Security.",
			institution: "Quick Heal Academy",
			location: "India",
			year: "2024",
			images: [
				{
					url: "https://www.quickheal.co.in/pub/static/frontend/quickheal/quickheal-v2/en_US/images/logo.svg",
					alt: "Quick Heal Academy",
				},
			],
		},
		{
			title: "Quick Heal Certified Cloud Infrastructure & Security Analyst",
			description:
				"Certification covering AWS cloud security and managing secure cloud infrastructure.",
			institution: "Quick Heal Academy",
			location: "India",
			year: "2024",
			images: [
				{
					url: "https://www.quickheal.co.in/pub/static/frontend/quickheal/quickheal-v2/en_US/images/logo.svg",
					alt: "Quick Heal Academy",
				},
			],
		},
		{
			title: "Quick Heal Certified Mobile Application Penetration Testing Analyst",
			description:
				"Training and certification in security testing of Android mobile applications.",
			institution: "Quick Heal Academy",
			location: "India",
			year: "2024",
			images: [
				{
					url: "https://www.quickheal.co.in/pub/static/frontend/quickheal/quickheal-v2/en_US/images/logo.svg",
					alt: "Quick Heal Academy",
				},
			],
		},
		{
			title: "Quick Heal Certified System & Server Administration",
			description:
				"Certified skills in managing and securing Linux and Windows-based servers and systems.",
			institution: "Quick Heal Academy",
			location: "India",
			year: "2024",
			images: [
				{
					url: "https://www.quickheal.co.in/pub/static/frontend/quickheal/quickheal-v2/en_US/images/logo.svg",
					alt: "Quick Heal Academy",
				},
			],
		},
		{
			title: "Quick Heal Certified in Cyber Security Fundamentals",
			description:
				"Fundamental concepts of cybersecurity including network security, malware analysis, and ethical hacking.",
			institution: "Quick Heal Academy",
			location: "India",
			year: "2024",
			images: [
				{
					url: "https://www.quickheal.co.in/pub/static/frontend/quickheal/quickheal-v2/en_US/images/logo.svg",
					alt: "Quick Heal Academy",
				},
			],
		},
		{
			title: "Quick Heal Certified in Digital Forensics & Incident Response",
			description:
				"Skilled in identifying, analyzing, and mitigating cyber incidents with forensic techniques.",
			institution: "Quick Heal Academy",
			location: "India",
			year: "2024",
			images: [
				{
					url: "https://www.quickheal.co.in/pub/static/frontend/quickheal/quickheal-v2/en_US/images/logo.svg",
					alt: "Quick Heal Academy",
				},
			],
		},
		{
			title: "TryHackMe Web Application Pentesting Path",
			description:
				"Focused path covering OWASP Top 10, SQL injection, XSS, and advanced web exploitation techniques.",
			institution: "TryHackMe",
			location: "Online",
			year: "2024",
			images: [
				{
					url: "https://assets.tryhackme.com/img/logo/tryhackme_logo_full.svg",
					alt: "TryHackMe",
				},
			],
		},
		{
			title: "TryHackMe Jr Penetration Tester Path",
			description:
				"Hands-on training in penetration testing, including network and web application exploitation.",
			institution: "TryHackMe",
			location: "Online",
			year: "2024",
			images: [
				{
					url: "https://assets.tryhackme.com/img/logo/tryhackme_logo_full.svg",
					alt: "TryHackMe",
				},
			],
		},
	],

	blogs: [
		{
			title: "Port Swigger Labs Walkthrough",
			description: "Detailed Walkthrough of Port Swigger Labs",
			source: "Notion",
			url: "https://vyomjain.notion.site/Port-Swigger-Labs-1bcc8de778828008b9f1f5fdfa2d229c",
			images: [
				{
					url: "https://external-preview.redd.it/opinions-on-portswigger-academy-v0-T-t_fiSO-Z2tmGSjAuIKTXl3pu9wEAYHXRaeL9TvRgA.jpg?width=1080&crop=smart&auto=webp&s=916881908dcf2b3dbcbfed6843c00d31d4ff6ca7",
					alt: "PortSwigger",
				},
			],
		},
		{
			title: "Pwned Labs Walkthrough",
			description: "Detailed Walkthrough of Pwned Labs",
			source: "Notion",
			url: "https://vyomjain.notion.site/PWNED-Labs-14ac8de7788280a58245e041484727a8",
			images: [
				{
					url: "https://i.ibb.co/F4hVQSm5/Screenshot-2024-12-16-112828.png",
					alt: "Pwned Labs",
				},
			],
		},
		{
			title: "Amazon Web Services (AWS)",
			description: "Deep dive into Amazon Web Services (AWS) Services",
			source: "Notion",
			url: "https://vyomjain.notion.site/AWS-145c8de7788280599f67d6d11ab45df4",
			images: [
				{
					url: "https://pendulum-it.com/wp-content/uploads/2020/05/AWS-logo.png",
					alt: "AWS",
				},
			],
		},
	],

	skills: [
		// Programming Languages
		"Python",
		"JavaScript",
		"TypeScript",
		"Go (Golang)",
		"Java",

		// Web & Frameworks
		"Next.js",
		"React",
		"Node.js",
		"Express.js",
		"Django",
		"FastAPI",
		"Tailwind CSS",
		"HTML",
		"CSS",

		// Backend & Database
		"PostgreSQL",
		"MySQL",
		"MongoDB",
		"NeonDB",
		"Prisma ORM",
		"Mongoose",

		// Cybersecurity Tools & Concepts
		"VAPT",
		"Web VAPT",
		"Burp Suite",
		"Nmap",
		"Wireshark",
		"Metasploit",
		"Kali Linux",
		"Digital Forensics",
		"Incident Response",
		"Linux System Administration",

		// DevOps & Deployment
		"Docker",
		"Git",
		"AWS",
		"Linux Servers",
	],

	// SEO Configuration
	seo: {
		title: "Vyom Maloo - Cyber security & Full Stack Developer",
		description:
			"Cyber security & Full Stack Developer based in India, specializing in Web & Mobile Pentesting, React, Next.js, Node.js, Python, and Cloud Security.",
		keywords: [
			"Cybersecurity",
			"Penetration Testing",
			"Full Stack Developer",
			"React",
			"Next.js",
			"Node.js",
			"Python",
			"Web Development",
			"Cloud Security",
			"AWS",
			"Vyom Maloo",
			"India",
		],
	},

	// Theme Configuration
	theme: {
		primaryColor: "#1ED760", // Spotify green
		secondaryColor: "#1d1d1f",
		accentColor: "#007AFF",
	},

	// Projects Configuration
	projects: [auth, finditWebFrontend, findit, networkScanner, portfolio, vdShoppers],
} as const;
