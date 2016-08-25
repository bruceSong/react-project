import {Row, Col} from 'global/layout';
import Icon from 'global/icon';

require('./user.less');

const ImUserHeader = () => {
    return (
        <Row className="csc-chat-head">
            <Col span={12}>
                <div className="csc-chat-face">
                    <img src="http://img.sobot.com/console/common/face/admin.png"/>
                </div>
                <p className="csc-chat-name">客服021</p>
            </Col>
            <Col span={12} className="csc-chat-butbox">
                <Icon type="cross" />
            </Col>
        </Row>
    );
}

export default ImUserHeader;
