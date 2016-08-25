import ReactDom from 'react-dom';
import routes from './routes';
import collector from 'lib/collector';
collector.config('csc');

// 测试接口
//import Ajax from 'lib/ajax';
//Ajax.post('/FHH/EM1HCSC/CallCenter/SignIn');

ReactDom.render(routes, document.getElementById('csc-container'));
