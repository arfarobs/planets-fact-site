

export const changePageColor = (index) => {
	const pageColors = ['#419EBB', '#EDA249', '#6D2ED5', '#D14C32', '#D83A34', '#CD5120', '#1EC1A2', '#2D68F0'];
	document.documentElement.style.setProperty('--pageColor', pageColors[index]);
};
