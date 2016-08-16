import {Row, Col} from 'global/layout';

require('./index.less');

const Footer = (props) => {
    return (
      <Row className="csc-footer">
          <Col span={24}>Footer</Col>
      </Row>
    );
};

export default Footer;
