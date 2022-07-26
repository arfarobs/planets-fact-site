import { Provider } from 'react-redux';
import { store } from '../../app/store';

import InfoNav from './InfoNav';

export default {
	title: 'Information Navigation',
	component: InfoNav
};

const Story = (args) => 
	<Provider store={store} >
		<InfoNav {...args} />
	</Provider>;

export const Default = Story.bind({});

