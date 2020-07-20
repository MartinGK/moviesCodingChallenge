import React from 'react';
import { mount, shallow } from 'enzyme';
import Modal from 'components/Modal';
import StarsRating from 'components/StarsRating';

let wrapped;

it('amount of stars in filter mode false', () => {
    
    wrapped = mount(
        <StarsRating filterMode={false} value={6}/>
    )

    expect(wrapped.find("div.star").length).toEqual(10)
    expect(wrapped.find("div.star--right").length).toEqual(5)
    expect(wrapped.find("div.star--left").length).toEqual(5)
    
    wrapped.unmount()
});

it('amount of stars in filter mode true', () => {
    
    wrapped = mount(
        <StarsRating filterMode={true} value={6}/>
    )

    expect(wrapped.find("div.star").length).toEqual(10)
    expect(wrapped.find("div.star--right").length).toEqual(5)
    expect(wrapped.find("div.star--left").length).toEqual(5)
        
    wrapped.unmount()
});
