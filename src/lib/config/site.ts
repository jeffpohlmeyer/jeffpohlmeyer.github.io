interface Links {
	github: string;
	/** Hidden until set. */
	linkedin?: string;
	email: string;
	/** Path under static/, hidden until set. */
	resume?: string;
}

export const site = {
	name: 'Jeff Pohlmeyer',
	role: 'Full-stack developer',
	location: 'Based near Morristown, NJ',
	url: 'https://jeffpohlmeyer.dev'
};

export const links: Links = {
	github: 'https://github.com/jeffpohlmeyer',
	linkedin: 'https://www.linkedin.com/in/jeffrey-pohlmeyer/',
	email: 'jeff@jvpdesign.co',
	resume: '/Jeffrey_Pohlmeyer_Resume.pdf'
};
