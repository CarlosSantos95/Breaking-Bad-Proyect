import React from "react";
import '@testing-library/jest-dom/extend-expect';
import CharacterProfile from './characterProfile';
import { render } from '../test/test-utils';


test('renders content', async () => {
    const test = {
        mainLoader: false
    }
    
    const view = render(<CharacterProfile />)
    console.log(view);
})