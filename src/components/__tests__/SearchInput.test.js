import React from 'react';
import { mount } from 'enzyme';
import SearchInput from 'components/SearchInput';

let wrapped;

beforeEach(() => {
    wrapped = mount(
            <SearchInput />
    )

});


afterEach(()=>{
    wrapped.unmount();
})


it('content created', () => {
    expect(wrapped.find('.searchInputContainer').length).toEqual(1);
    expect(wrapped.find('.searchInput').length).toEqual(1);
    expect(wrapped.find('.scopeIcon').length).toEqual(1);
});


describe("funcinality test", ()=>{
    beforeEach(() => {
        wrapped.find('.searchInput').simulate('change', {
            target: { value: 'Harry' }
        });

        wrapped.update();
    });

    it('has an input that users cant type in', () => {
        expect(wrapped.find('.searchInput').prop('value')).toEqual('Harry');
    });

})