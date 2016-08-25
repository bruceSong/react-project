import React from 'react';
import Reflux from 'reflux';

import Popover from 'global/popover';
import Button from 'global/button';
import Input from 'global/input';
import {Row, Col} from 'global/layout';
import Icon from 'global/icon';

import {DialStore} from 'stores';
import {DialActions} from 'actions';

require('./index.less');

const DialPane = React.createClass({
    mixins: [Reflux.connect(DialStore, "dialedNumbers")],
    dial (number){
        console.log('dial');
        DialActions.dial(number);
    },
    startCall (){
        DialActions.startCall(this.state);
    },
    remove (){
        console.log('remove');
        DialActions.removeDial();
    },
    render (){
        // TODO 接听号码应该从个人设置中读取
        const text = <span>接听号： +86 1234 5678</span>;
        const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']];
        const THIS = this;
        const removeIcon = (
            <Icon type="cross" className="csc-remove-icon" onClick={THIS.remove}/>
        );
        const content = (
            <div className="csc-dial-pane">
                <Row>
                    <Col>
                        <Input addonBefore="外呼号码" defaultValue="输入客户电话" addonAfter={removeIcon}
                               value={this.state.dialedNumbers}/>
                    </Col>
                </Row>
                {
                    numbers.map(function (cells, index) {
                        return (
                            <Row key={index}>
                                {
                                    cells.map(function (cell) {
                                        return <Col span={8} key={index + '_' + cell}>
                                            <Button type="default" className="csc-dial-button"
                                                    onClick={THIS.dial.bind(THIS, cell)} value={cell}>{cell}</Button>
                                        </Col>;
                                    })
                                }
                            </Row>
                        );
                    })
                }
                <Row>
                    <hr className="csc-seperator"/>
                </Row>
                <Row>
                    <Col span={24}><Button type="primary" className="csc-auto-fit-button"
                                           onClick={THIS.startCall}>呼叫</Button></Col>
                </Row>
            </div>
        );
        return (
            <Popover placement="bottom" title={text} content={content} trigger="click">
                <Button type="ghost" icon="appstore" className="csc-icon csc-status-idle"/>
            </Popover>
        );
    }
});

export default DialPane;
