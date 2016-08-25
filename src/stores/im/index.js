import Reflux from 'reflux';
import {ImActions} from 'actions';

const ImStore = Reflux.createStore({
    listenables: [ImActions],
    state: {
        status: 1
    },
    onConnect (state) {
        this.state.status = 2;
        this.trigger(this.state);
    },
    onConnectCompleted (data) {
        // 根据后端返回的状态，决定前端要展示的UI及相应操作
        console.log('sign in completed');
        console.log(data);
    }
});

export default ImStore;
