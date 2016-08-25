import Reflux from 'reflux';
import {URL} from 'constants';
import Ajax from 'lib/ajax';
import {MessageAction} from 'actions/common';
/**
 * dial actions
 * dial : 拨号
 * removeDial :  删除最后一位拨号
 * connecting ： 拨号正在连接中
 * inCall : 正在通话中
 * hangup : 挂断
 */
const DialActions = Reflux.createActions(
    ['dial', 'removeDial', {'startCall': {asyncResult: true}}, 'connecting', 'inCall', 'hangup']
);

DialActions.startCall.listen(function (state) {
    // TODO need to check validation rules here
    if (!state || !state.dialedNumbers || state.dialedNumbers.length < 5) {
        return false;
    }
    var options = {
        success: DialActions.startCall.completed,
        error: DialActions.startCall.failed
    };
    Ajax.post(URL.callOut, {customerPhone: state.dialedNumbers}, options);
});

DialActions.startCall.completed.listen(function () {
    MessageAction.success('拨号成功', '请等待客户接听');
});
DialActions.startCall.failed.listen(function () {
    MessageAction.info('拨号失败', '请重试');
});

export default DialActions;
