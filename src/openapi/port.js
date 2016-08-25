/**
 * @author: songgl@fxiaoke.com
 * 创建联系客服icon
 */
 
function FXPort() {
    this.config = {
        width: '320px',
        height: '480px',
        position: 'fixed',
        bottom: 0,
        left: '60px',
        zIndex: 9999
    };
    this.url = 'http://localhost:8080/#/contactus?_k=e2d2f5';
    this.iframe = '<iframe id="zhichiIframe" src="' + this.url + '" name="zhichiIframe" frameborder="no" scrolling="no" style="width: 100%; height: 100%; border: 0;"></iframe>';
}
FXPort.prototype.open = function(options) {
    options = options || this.config;
    var container = document.createElement('div');
    for (var k in options) {
        container.style[k] = options[k] || this.config[k];
    }
    container.innerHTML = this.iframe;
    document.body.appendChild(container);
}
window.FXPort = new FXPort();