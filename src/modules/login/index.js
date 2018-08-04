/**
 * Created by ximing on 2018/8/5.
 */
'use strict';
import './index.scss';
import React, { Component } from 'react';
export default class Login extends Component {
    render() {
        return (
            <div
                className="login-container"
                style={{
                    'background-image':
                        'url(https://s3plus.meituan.net/v1/mss_814dc1610cda4b2e8febd6ea2c809db5/distribute/97b34e93-0d0d-4fb2-a74c-ba207f6a2df6_1533399247569?filename=timg+%281%29.jpeg)'
                }}
            >
                <div className="login-inner">
                    <img src="https://s3plus.meituan.net/v1/mss_814dc1610cda4b2e8febd6ea2c809db5/distribute/46c19d08-25ea-4721-ac27-a7b8fd040c4c_1533399733331?filename=fluidicon.png" />
                    <button>去登陆</button>
                </div>
            </div>
        );
    }
}
