import React from 'react';
import Reflux from 'reflux';

import Popover from 'global/popover';
import Button from 'global/button';
import Input from 'global/input';
import {Row, Col} from 'global/layout';

import {SigninStore} from 'stores';
import {SignInActions} from 'actions';

require('./index.less');

const SignIn = React.createClass({
    mixins: [Reflux.connect(SigninStore, "obj")],
    signin: function () {
        SignInActions.signIn(this.state);
    },
    save: function (e) {
        var key = $(e.target).attr('name');
        var val = $(e.target).val();
        this.state[key] = val;
    },
    render () {
        const self = this;
        const content = (
            <div className="csc-signin-pane">
                <Row>
                    <Col span={8} className="csc-signin-note">热线号码：</Col>
                    <Col span={16}><Input size="small" refs="hotLine" name="hotLine" onBlur={this.save}/></Col>
                </Row>
                <Row>
                    <Col span={8} className="csc-signin-note">坐席号：</Col>
                    <Col span={16}><Input size="small" refs="cno" name="cno" onBlur={this.save}/></Col>
                </Row>
                <Row>
                    <Col span={8} className="csc-signin-note">密码：</Col>
                    <Col span={16}><Input size="small" refs="pwd" name="pwd" onBlur={this.save}/></Col>
                </Row>
                <Row>
                    <Col span={8} className="csc-signin-note">绑定电话：</Col>
                    <Col span={16}><Input size="small" refs="bindTel" name="bindTel" onBlur={this.save}/></Col>
                </Row>
                <Row>
                    <Col span={24}><Button type="primary" className="csc-auto-fit-button" size="small"
                                           onClick={self.signin}>签入</Button></Col>
                </Row>
            </div>
        );
        return (
            <Popover placement="bottom" title="" content={content} trigger="click" width="200">
                <Button type="ghost" icon="appstore" className="csc-icon csc-status-idle"/>
            </Popover>
        );
    }
});

export default SignIn;
