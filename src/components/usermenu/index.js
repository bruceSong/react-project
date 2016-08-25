import Menu from 'global/menu';
import Dropdown from 'global/dropdown';
import Icon from 'global/icon';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" href="//www.fxiaoke.com">个人设置</a>
        </Menu.Item>
    </Menu>
);

const UserMenu = () => {
    return (
        <Dropdown overlay={menu}>
            <a href="#" className="ant-dropdown-link csc-right-icon">
                张三
                <Icon type="down"/>
            </a>
        </Dropdown>
    );
}

export default UserMenu;
