import Menu from 'global/menu';
import Dropdown from 'global/dropdown';
import Button from 'global/button';

const menu = (
    <Menu>
        <Menu.Item className="csc-status-idle">空闲</Menu.Item>
        <Menu.Item className="csc-status-busy">忙碌</Menu.Item>
        <Menu.Item>整理</Menu.Item>
    </Menu>
);

const StatusIcon = (props) => {
    return (
        <Dropdown overlay={menu}>
            <Button type="ghost" icon={props.icon} className="csc-icon csc-status-idle"/>
        </Dropdown>
    );
}

export default StatusIcon;
