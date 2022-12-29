import React from 'react'
import Register from '../pages/Register';
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

// Create / initialize global state (storege state global declaration)
const store = createStore(reducers, compose(applyMiddleware(thunk)));


describe('Register', () => {
    
    test("Menjalankan register page", async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Register></Register>
                </BrowserRouter>
            </Provider>
        )
        const items = await screen.findByText('Register Member')
        expect(items.innerHTML).toEqual('Register Member')
    })
})