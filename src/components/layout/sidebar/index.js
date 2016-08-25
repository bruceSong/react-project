import React from 'react';
import {Link} from 'react-router';
import Icon from 'global/icon';
import {PageAction} from 'actions/common';

require('./index.less');

const Sidebar = React.createClass({
    render() {
        return (
            <ul className="csc-siderbar">
                <li>
                    <Link to="csc/home" className="csc-sidebar-icon" activeClassName="selected">
                        <Icon type="home"/>
                        <span>概览</span>
                    </Link>
                </li>
                <li>
                    <Link to="csc/phone" className="csc-sidebar-icon" activeClassName="selected">
                        <Icon type="phone"/>
                        <span>电话</span>
                    </Link>
                </li>
                <li>
                    <Link to="csc/chat" className="csc-sidebar-icon" activeClassName="selected">
                        <Icon type="aliwangwang-o"/>
                        <span>会话</span>
                    </Link>
                </li>
                <li>
                    <Link to="csc/gongdan" className="csc-sidebar-icon" activeClassName="selected">
                        <Icon type="exception"/>
                        <span>工单</span>
                    </Link>
                </li>
                <li>
                    <Link to="csc/customer" className="csc-sidebar-icon" activeClassName="selected">
                        <Icon type="team"/>
                        <span>客户</span>
                    </Link>
                </li>
                <li>
                    <Link to="csc/report" className="csc-sidebar-icon" activeClassName="selected">
                        <Icon type="file-excel"/>
                        <span>报表</span>
                    </Link>
                </li>
                <li>
                    <Link to="csc/monitor" className="csc-sidebar-icon" activeClassName="selected">
                        <Icon type="eye-o"/>
                        <span>监控</span>
                    </Link>
                </li>
                <li>
                    <Link to="csc/setting" className="csc-sidebar-icon" activeClassName="selected">
                        <Icon type="setting"/>
                        <span>设置</span>
                    </Link>
                </li>
            </ul>
        );
    }
});

export default Sidebar;
