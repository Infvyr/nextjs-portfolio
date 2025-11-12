import { AiFillGithub, AiFillGitlab, AiFillHtml5, AiOutlineAntDesign } from "react-icons/ai";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { FaBitbucket, FaFigma, FaReact, FaTrello, FaWordpressSimple } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiFlutterFill } from "react-icons/ri";
import {
	SiAdobexd,
	SiAndroidstudio,
	SiChakraui,
	SiFirebase,
	SiJira,
	SiMui,
	SiStyledcomponents,
	SiWebstorm,
	SiXcode
} from "react-icons/si";
import { TbBrandHeadlessui, TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";

export const TECHNOLOGIES = [
	{
		category: "Mobile",
		items: [
			{ name: "Flutter", icon: <RiFlutterFill size={32} /> },
			{ name: "Firebase", icon: <SiFirebase size={32} /> }
		]
	},
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "MUI", icon: <SiMui size={32} /> },
			{ name: "AntD", icon: <AiOutlineAntDesign size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			{ name: "Chakra", icon: <SiChakraui size={32} /> },
			{ name: "styled components", icon: <SiStyledcomponents size={32} /> },
			{ name: "HeadlessUI", icon: <TbBrandHeadlessui size={32} /> }
		]
	},
	{
		category: "UI tools",
		items: [
			{ name: "Figma", icon: <FaFigma size={32} /> },
			{ name: "Adobe XD", icon: <SiAdobexd size={32} /> }
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Android Studio", icon: <SiAndroidstudio size={32} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> },
			{ name: "WebStorm", icon: <SiWebstorm size={32} /> },
			{ name: "Xcode", icon: <SiXcode size={32} /> },
			{ name: "Jira", icon: <SiJira size={32} /> },
			{ name: "Trello", icon: <FaTrello size={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "Gitlab", icon: <AiFillGitlab size={32} /> },
			{ name: "Bitbucket", icon: <FaBitbucket size={32} /> },
			{ name: "WordPress CMS", icon: <FaWordpressSimple size={32} /> }
		]
	}
];
