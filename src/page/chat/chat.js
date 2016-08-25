import Contactus from 'page/layout/contactus';
import Browser from 'lib/browser';
console.log(Browser);
require('./chat.less');

const Chat = (props) => {
    return (
        <div className="csc-chat-page">
            <div className="csc-chat-pagel"></div>
            <div className="csc-chat-pager"></div>
            <div className="csc-chat-pagec">
                <Contactus></Contactus>
            </div>
        </div>
    );
};

export default Chat;
