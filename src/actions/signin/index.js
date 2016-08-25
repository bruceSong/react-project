import Reflux from 'reflux';
import {URL} from 'constants';
import Ajax from 'lib/ajax';

const SignInActions = Reflux.createActions(
    {'signIn': {asyncResult: true}}
);

SignInActions.signIn.listen(function (state) {
    var options = {
        success: SignInActions.signIn.completed,
        error: SignInActions.signIn.failed
    };
    Ajax.post(URL.signIn, {bindPhone: state.bindTel}, options);
});

export default SignInActions;
