import Reflux from 'reflux';
import {DialActions} from 'actions';

const DialStore = Reflux.createStore({
    listenables: [DialActions],
    dialedNumbers: [],
    onDial (number) {
        this.dialedNumbers.push(number);
        var numberString = this.dialedNumbers.join('');
        console.log(numberString);
        this.trigger(numberString);
    },
    onRemoveDial (){
        this.dialedNumbers.pop();
        var numberString = this.dialedNumbers.join('');
        console.log(numberString);
        this.trigger(numberString);
    },
    onStartCall () {
        console.info('start calling...');
    },
    onStartCallCompleted (data){
        console.info('start call completed');
        console.info(data);
    },
    onStartCallFailed (data){
        console.info('start call failed');
        console.info(data);
    },
    getInitialState () {
        console.info('init states...');
    }
});

export default DialStore;
