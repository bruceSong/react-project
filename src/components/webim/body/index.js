import {Row, Col} from 'global/layout';
import Icon from 'global/icon';

require('./body.less');

const ImBody = () => {
    return (
        <Row className="csc-chat-body">
            <Col span={24}>
                <div className="csc-chat-queue">
                    <p>排队中，您在队伍中的第11位，请等待或留言</p>
                </div>
                <ul className="csc-msg-list">
                    <li>
                        <div className="csc-msg-box">
                            <div className="csc-msg-box-content">v菜单项菜单项菜单项</div>
                        </div>
                    </li>
                    <li>
                        <div className="csc-rmsg-box"> 
                            <div className="csc-msg-box-content">v菜单项菜单项菜单项</div>
                        </div>
                    </li>
                </ul>
            </Col>
        </Row>
    );
}

export default ImBody;