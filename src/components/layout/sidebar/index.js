import React from 'react';
import classNames from 'classNames';

import {Row, Col} from 'global/layout';
import Menu from 'global/menu';
import Dropdown from 'global/dropdown';
import Icon from 'global/icon';
import Input from 'global/input';

import SearchInput from 'components/searchinput';
import UserMeun from 'components/usermenu';

require('./index.less');

const Sidebar = (props) => {
    return (
        <div className="csc-siderbar">
            <Row>
                <Col>
                    <a href="#" className="csc-sidebar-icon">
                        <Icon type="home" />
                        <span>概览</span>
                    </a>
                    <a href="#" className="csc-sidebar-icon">
                        <Icon type="aliwangwang-o" />
                        <span>会话</span>
                    </a>
                    <a href="#" className="csc-sidebar-icon">
                        <Icon type="phone" />
                        <span>电话</span>
                    </a>
                    <a href="#" className="csc-sidebar-icon">
                        <Icon type="exception" />
                        <span>工单</span>
                    </a>
                    <a href="#" className="csc-sidebar-icon">
                        <Icon type="team" />
                        <span>客户</span>
                    </a>
                    <a href="#" className="csc-sidebar-icon">
                        <Icon type="file-excel" />
                        <span>报表</span>
                    </a>
                    <a href="#" className="csc-sidebar-icon">
                        <Icon type="eye-o" />
                        <span>监控</span>
                    </a>
                    <a href="#" className="csc-sidebar-icon">
                        <Icon type="setting" />
                        <span>设置</span>
                    </a>
                </Col>
            </Row>
        </div>
    );
};

export default Sidebar;
