import Reflux from 'reflux';
import {URL} from 'constants';
import Ajax from 'lib/ajax';

const ImActions = Reflux.createActions(
    {'connect': {asyncResult: true}}
);

ImActions.connect.listen(function (state) {
    // 发起请求，请求会话状态
    var options = { 
        success: ImActions.connect.completed,
        error: ImActions.connect.failed
    };
    //Ajax.post(URL.signIn, {bindPhone: state.bindTel}, options);
});

export default ImActions;
