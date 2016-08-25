import {Row, Col} from 'global/layout';
import Icon from 'global/icon';
import Input from 'global/input';
import Button from 'global/button';

require('./footer.less');

const ImFooter = () => {
    return (
        <div className="csc-chat-footer">
            <Row className='csc-chat-tools'>
                <Col span={12}>
                    <Icon type="smile" />
                    <Icon type="paper-clip" />
                </Col>
                <Col span={12}>
                    <p>常用语</p>
                </Col>
            </Row>
            <Row className='csc-chat-textarea'>
                <Col span={24}>
                    <textarea defaultValue=""></textarea>
                </Col>
            </Row>
            <Row className='csc-chat-tools'>
                <Col span={12}></Col>
                <Col span={12} className="csc-chat-send"><Button type="primary">发送</Button></Col>
            </Row>
        </div>
    );
}

export default ImFooter;