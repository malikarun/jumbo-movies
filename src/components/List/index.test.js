import React from 'react';
import List from './index';
import renderer from 'react-test-renderer';

test('Should create a list of items', () => {
    const items = [];

    const component = renderer.create(
        <List header="haha" path="tv" items={items}></List>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});