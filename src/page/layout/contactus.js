import React from 'react';
import Reflux from 'reflux';
import {ImUserHeader, ImPlainHeader, ImBody, ImFooter} from 'components/webim';
import {ImActions} from 'actions';
import {ImStore} from 'stores';

require('./contactus.less');

const Contactus = React.createClass({
    mixins: [Reflux.listenTo(ImStore, 'onStatusChange')],
    getInitialState () {
        // 设置开启会话的一些基本参数
        return {status: 1};
    },
    onStatusChange (a) {
        console.log(a);
    },
    componentDidMount () {
        // 调用action.connect开启一次会话
        ImActions.connect(this.state);

        //console.log(this.state); 
    },
    render () {
        return (
            <div className="csc-chat">
                <ImPlainHeader title="排队中..."></ImPlainHeader>
                <ImBody></ImBody>
                <ImFooter></ImFooter>
            </div>
        );
    }
});

export default Contactus;
