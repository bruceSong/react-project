import Reflux from 'reflux';
import {SignInActions} from 'actions';

const SignInStore = Reflux.createStore({
    listenables: [SignInActions],
    onSignInCompleted (data) {
        console.log('sign in completed');
        console.log(data);
    }
});

export default SignInStore;
