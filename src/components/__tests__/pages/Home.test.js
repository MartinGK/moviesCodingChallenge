import React from 'react';
import { mount } from 'enzyme';
import Home from 'components/pages/Home';
import Root from 'Root';

let wrapped;

it('contain rendered', () => {

    wrapped = mount(
        <Root >
            <Home />
        </Root>
    )

    expect(wrapped.find("section.movieListContainer").length).toEqual(1)

    wrapped.unmount()
});
