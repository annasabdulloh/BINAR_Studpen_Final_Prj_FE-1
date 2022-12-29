import React from 'react'
import Login from '../pages/Login'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

// Create / initialize global state (storege state global declaration)
const store = createStore(reducers, compose(applyMiddleware(thunk)));


describe('Login', () => {
    test("Menjalankan Login page", async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login></Login>
                </BrowserRouter>
            </Provider>
        )
        const items = await screen.findByText('Login Member')
        expect(items.innerHTML).toEqual('Login Member')
    })
})