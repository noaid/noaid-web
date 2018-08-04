/**
 * Created by ximing on 2018/8/4.
 */
'use strict';
import React, { Component } from 'react';
import classNames from 'classnames';
import GridWrapper from './GridWrapper';

export default class ViewPort extends Component {
    render() {
        return (
            <div className="viewport-container">
                <GridWrapper />
            </div>
        );
    }
}
