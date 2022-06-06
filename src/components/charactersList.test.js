import React from "react";
import '@testing-library/jest-dom/extend-expect';
import CharactersList from './charactersList';
import { render } from '../test/test-utils';


test('renders content', async () => {
    const test = {
        mainLoader: false
    }
    
    const view = render(<CharactersList />)
    console.log(view);
})