import Reflux from 'reflux';
import notification from 'global/notification';

var MessageAction = Reflux.createActions(['success', 'info']);


MessageAction.success.listen(function (message, description) {
    notification['success']({
        message: message,
        description: description
    });
});

MessageAction.info.listen(function (message, description) {
    notification['info']({
        message: message,
        description: description
    });
});


export default MessageAction;