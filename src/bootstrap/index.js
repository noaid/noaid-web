/**
 * Created by ximing on 2018/8/3.
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import rab, { call } from 'rabjs';
import { Route, routerRedux, Redirect, Switch } from 'rabjs/router';
const { ConnectedRouter: Router } = routerRedux;
import config from '../models/config';
import loadComponent from '../libs/loadComponent';
import WrapContainer from '../components/wrap';
const Home = loadComponent(import(/* webpackChunkName: "home" */ '../modules/home/pages/index.js'));
export default class BootStrap {
    static getSingleton() {
        return globalSingleton;
    }

    initApp() {
        this.app = rab({
            debug: true,
            initialState: {}
        });
        this.app.addModel(config);

        this.app.router(({ history }) => {
            return (
                <Router history={history}>
                    <WrapContainer>
                        <Switch>
                            <Route path="/" component={Home} />
                        </Switch>
                    </WrapContainer>
                </Router>
            );
        });
        this.provider = this.app.start();
        window.wendangApp = this.app;
        window.wendangApp.call = call;
    }

    renderApp() {
        ReactDOM.render(
            React.createElement(this.provider),
            document.getElementById('wrap_container')
        );
    }

    init() {
        this.initApp();
        this.renderApp();
    }
}
const globalSingleton = new BootStrap();
