export interface ProjectImage {
	src: string;
	fallback: string;
	alt: string;
	width: number;
	height: number;
}

export interface Project {
	slug: string;
	eyebrow: string;
	title: string;
	summary: string;
	highlights: string[];
	stack: string[];
	href: string;
	linkText: string;
	image: ProjectImage;
}
