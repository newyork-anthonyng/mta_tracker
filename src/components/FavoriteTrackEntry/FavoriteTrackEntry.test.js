import React from 'react';
import { shallow, mount } from 'enzyme';
import FavoriteTrackEntry from './FavoriteTrackEntry';

it('renders without crashing', () => {
	shallow(<FavoriteTrackEntry />);
});

it('renders an input field and button', () => {
	const wrapper = shallow(<FavoriteTrackEntry />);

	expect(wrapper.find('input').length).toEqual(1);
	expect(wrapper.find('button').length).toEqual(1);
});

it('runs callback with input field text when button is clicked', () => {
	let callbackInvoked = false;
	let cb = (text) => { callbackInvoked = text };
	const wrapper = mount(<FavoriteTrackEntry onSubmit={cb} />);

	wrapper.find('input').simulate('change', {target: { value: 'Hello World' }});
	wrapper.find('button').simulate('click');
	expect(callbackInvoked).toEqual('Hello World');
});
