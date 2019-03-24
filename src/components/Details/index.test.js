import React from 'react';
import Details from '.';
import renderer from 'react-test-renderer';
import { BrowserRouter, Route } from 'react-router-dom';

test('Should show an item', () => {
    const match = { params: { id: 1, type: 'tv' } };

    const component = renderer.create(
        <BrowserRouter>
            <Route>
                <Details match={match}></Details>
            </Route>
        </BrowserRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});