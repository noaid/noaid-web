/**
 * Created by yeanzhi on 2018/8/4.
 */
'use strict';
import './index.scss';
import React, { Component } from 'react';
import Layer from '../../components/layer';
import { connect } from 'rabjs';
@connect((state) => ({
    startMenu: state.startMenu
}))
export default class StartMenu extends Component {
    render() {
        return (
            <Layer
                className="noaid-layer-start-menu"
                style={{
                    display: this.props.startMenu.open ? 'block' : 'none',
                    zIndex: 10000,
                    cursor: 'default'
                }}
            >
                zhelishi kaishi caidan
            </Layer>
        );
    }
}
