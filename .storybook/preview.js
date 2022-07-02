import '../src/reset.css';
import '../src/app/fonts.css';

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '100%',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '100%',
    },
  },
	desktop: {
		name: 'Desktop',
		styles: {
			width: '1440px',
			height: '100%'
		}
	}
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
	viewport: {
		viewports: customViewports
	}
}

