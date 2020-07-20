import React from 'react';
import { mount, shallow } from 'enzyme';
import Modal from 'components/Modal';
import Root from 'Root';

let wrapped, isOpen;

beforeEach(() => {
    const initialState = {
        movies: {
            selectedMovie: {
                adult: false,
                backdrop_path: '/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
                belongs_to_collection: null,
                budget: 165000000,
                genres: [
                    {
                        id: 12,
                        name: 'Adventure'
                    },
                    {
                        id: 18,
                        name: 'Drama'
                    },
                    {
                        id: 878,
                        name: 'Science Fiction'
                    }
                ],
                homepage: 'http://www.interstellarmovie.net/',
                id: 157336,
                imdb_id: 'tt0816692',
                original_language: 'en',
                original_title: 'Interstellar',
                overview: 'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
                popularity: 73.718,
                poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
                production_companies: [
                    {
                        id: 923,
                        logo_path: '/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png',
                        name: 'Legendary Entertainment',
                        origin_country: 'US'
                    },
                    {
                        id: 9996,
                        logo_path: '/3tvBqYsBhxWeHlu62SIJ1el93O7.png',
                        name: 'Syncopy',
                        origin_country: 'GB'
                    },
                    {
                        id: 13769,
                        logo_path: null,
                        name: 'Lynda Obst Productions',
                        origin_country: ''
                    }
                ],
                production_countries: [
                    {
                        iso_3166_1: 'GB',
                        name: 'United Kingdom'
                    },
                    {
                        iso_3166_1: 'US',
                        name: 'United States of America'
                    }
                ],
                release_date: '2014-11-05',
                revenue: 675120017,
                runtime: 169,
                spoken_languages: [
                    {
                        iso_639_1: 'en',
                        name: 'English'
                    }
                ],
                status: 'Released',
                tagline: 'Mankind was born on Earth. It was never meant to die here.',
                title: 'Interstellar',
                video: false,
                vote_average: 8.3,
                vote_count: 23071,
                open: true
            }
        }
    }

    isOpen = true;

    wrapped = mount(
        <Root initialState={initialState} >
            <Modal onClose={() => { isOpen = false }} open={isOpen} >
                <div id="children">
                    Child
                </div>
            </ Modal>
        </Root >
    )
});

afterEach(() => {
    wrapped.unmount();
})


it('children rendered', () => {
    expect(wrapped.find("div#children").length).toEqual(1)
});


describe('close functionality', () => {
    beforeEach(() => {
        isOpen = true;
    });

    it('background click', () => {
        expect(isOpen).toEqual(true);
        wrapped.find(".modal__bg").simulate('click')
        expect(isOpen).toEqual(false);
    });

    it('close button click', () => {
        expect(isOpen).toEqual(true);
        wrapped.find(".modal__close").simulate('click')
        expect(isOpen).toEqual(false);
    });
})