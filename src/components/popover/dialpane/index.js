import Popover from 'global/popover';
import Button from 'global/button';
import Input from 'global/input';
import {Row, Col} from 'global/layout';
require('./index.less');

//TODO shouldn't be hard code here, need to get value from parent props or action etc.

const text = <span>接听号： +86 1234 5678</span>;
const content = (
  <div className="csc-dial-pane">
    <Row>
        <Col><Input addonBefore="外呼号码" defaultValue="输入客户电话" /></Col>
    </Row>
    <Row>
        <Col span={8}><Button type="default" className="csc-dial-button">1</Button></Col>
        <Col span={8}><Button type="default" className="csc-dial-button">2</Button></Col>
        <Col span={8}><Button type="default" className="csc-dial-button">3</Button></Col>
    </Row>
    <Row>
        <Col span={8}><Button type="default" className="csc-dial-button">4</Button></Col>
        <Col span={8}><Button type="default" className="csc-dial-button">5</Button></Col>
        <Col span={8}><Button type="default" className="csc-dial-button">6</Button></Col>
    </Row>
    <Row>
        <Col span={8}><Button type="default" className="csc-dial-button">7</Button></Col>
        <Col span={8}><Button type="default" className="csc-dial-button">8</Button></Col>
        <Col span={8}><Button type="default" className="csc-dial-button">9</Button></Col>
    </Row>
    <Row>
        <Col span={8}><Button type="default" className="csc-dial-button">*</Button></Col>
        <Col span={8}><Button type="default" className="csc-dial-button">0</Button></Col>
        <Col span={8}><Button type="default" className="csc-dial-button">#</Button></Col>
    </Row>
    <Row>
      <hr className="csc-seperator" />
    </Row>
    <Row>
        <Col span={24}><Button type="primary" className="csc-auto-fit-button">呼叫</Button></Col>
    </Row>
  </div>
);

const DialPane = () => {
  return (
      <Popover placement="bottom" title={text} content={content} trigger="click">
          <Button type="ghost" icon="appstore" className="csc-icon csc-status-idle"/>
      </Popover>
  );
};

export default DialPane;
