import Ajax from 'lib/ajax';

import {URL} from 'constants';
/**
 * Long polling handle comet message from backend
 * @type {{request: null, timeout: number, started: boolean, start: (()), complete: (()), stop: (()), abort: (())}}
 */
const CometUtil = {
    request: null,
    timeout: 30 * 1000, // 30 秒
    started: false,
    start (){
        this.started = true;
        var options = {
            complete: this.complete,
            timeout: this.timeout
        };
        this.request = Ajax.get(URL.cometUrl, options);
    },
    complete (){
        if (this.started) {
            this.start();
        }
    },
    stop (){
        this.abort();
        this.started = false;
    },
    abort (){
        if (this.request && this.request.abort) {
            this.request.abort();
        }
    }
};

export default CometUtil;