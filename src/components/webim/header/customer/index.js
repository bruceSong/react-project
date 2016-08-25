import React from 'react';
import {Row, Col} from 'global/layout';
import Icon from 'global/icon';
import Menu from 'global/menu';
//import {ToolBar, SideBar} from 'components/layout';

require('./chat.less');

const ChatWindow = React.createClass({
    render() {
        return (
            <div className="csc-chat">
                <Row className="csc-chat-head">
                    <Col span={12}>
                        <div className="csc-chat-face">
                            <img src="http://img.sobot.com/console/common/face/admin.png"/>
                        </div>
                        <p className="csc-chat-name">客服021</p>
                    </Col>
                    <Col span={12} className="csc-chat-butbox">
                        <Icon type="cross" />
                    </Col>
                </Row>
                <Row className="csc-chat-body">
                    <Col span={24}>
                        <div className="csc-chat-queue">
                            <p>排队中，您在队伍中的第11位，请等待或留言</p>
                        </div>
                        <ul className="csc-msg-list">
                            <li>
                                <div className="csc-msg-box">
                                    <div className="csc-msg-box-content">v菜单项菜单项菜单项</div>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="csc-chat-footer">
                    <Col span={24}>
                        footer
                    </Col>
                </Row>
            </div>
        );
    }
});

export default ChatWindow;
