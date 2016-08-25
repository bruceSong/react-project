import React from 'react';
import {Row, Col} from 'global/layout';
import Table from 'global/table';
require('./phone.less');

const dataSource = [];

const columns = [{
    title: '客户号码',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber'
}, {
    title: ' 呼叫类型',
    dataIndex: 'callType',
    key: 'callType'
}, {
    title: '坐席',
    dataIndex: 'address',
    key: 'address'
}, {
    title: '技能组',
    dataIndex: 'skill',
    key: 'skill'
}, {
    title: '开始时间',
    dataIndex: 'beginTime',
    key: 'beginTime'
}, {
    title: '结束时间',
    dataIndex: 'endTime',
    key: 'endTime'
}, {
    title: '来话原因',
    dataIndex: 'reason',
    key: 'reason'
}];

const PhonePane = (props) => {
    return (
        <div className="csc-phone">
            <Row gutter={16}>
                <Col span={8} className="csc-column gutter-row">
                    <div className="gutter-box csc-phone-section">通话记录</div>
                </Col>
                <Col span={16} className="csc-column gutter-row">
                    <div className="gutter-box csc-phone-section">
                        <Table dataSource={dataSource} columns={columns}/>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default PhonePane;
