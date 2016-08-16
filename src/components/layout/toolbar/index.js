import {Row, Col} from 'global/layout';
import Button from 'global/button';
import Icon from 'global/icon';

import SearchInput from 'components/searchinput';
import UserMenu from 'components/usermenu';
import {DialPane} from 'components/popover';

require('./index.less');

const ToolBar = React.createClass({
    render() {
        return (
          <div className="csc-toolbar">
              <Row>
                  <Col span={2}><Icon type="bars" className="csc-toolbar-icon" /></Col>
                  <Col span={4} className="csc-logo">纷享客服</Col>
                  <Col span={10}>
                      <SearchInput placeholder="搜索会话、工单、客户" onSearch={value => console.log(value)} style={{
                          width: 200
                      }}/>

                  </Col>
                  <Col span={4}>
                      <DialPane />
                      <Button type="ghost" icon="frown" className="csc-icon csc-status-busy"/>
                      <Button type="ghost" icon="phone" className="csc-icon csc-status-idle"/>
                  </Col>
                  <Col span={4}>
                      <UserMenu />
                  </Col>
              </Row>
            </div>
        );

    }
});

export default ToolBar;
