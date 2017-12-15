import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

describe('Store', function () {
    it('Should handle creating courses', function () {
        // arrange
        const store = createStore(rootReducer, initialState);
        const course = {
            title: "Clean Code"
        };


        // assert
        const actual = store.getState().courses[0];
        const expected = {
            title: "Clean Code"
        };

        expect(actual).toEqual(expected);
    });
});
