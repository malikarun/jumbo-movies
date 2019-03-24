import React from 'react';
import Dashboard from '.';
import renderer from 'react-test-renderer';

test('Should show an item', () => {
    const component = renderer.create(
        <Dashboard />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});