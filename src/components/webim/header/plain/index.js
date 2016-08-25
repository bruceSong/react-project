import {Row, Col} from 'global/layout';
import Icon from 'global/icon';

require('./plain.less');

const ImPlainHeader = (props) => {
    return (
        <Row className="csc-chat-head">
            <Col span={12}>
                <p className="csc-chat-name">{props.title}</p>
            </Col>
            <Col span={12} className="csc-chat-butbox">
                <Icon type="cross" />
            </Col>
        </Row>
    );
}

export default ImPlainHeader;
