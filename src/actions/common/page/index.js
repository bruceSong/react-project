import Reflux from 'reflux';
import {hashHistory} from 'react-router';

var PageAction = Reflux.createActions(['redirect', 'highlight']);

PageAction.redirect.listen(function (to, params) {
    hashHistory.push('/csc/' + to);
    // PageAction.highlight(to);
});

PageAction.highlight.listen(function (to) {
    $('.csc-siderbar a').removeClass('selected');
    $('.csc-siderbar a[data-target=' + to + ']').addClass('selected');
});

export default PageAction;