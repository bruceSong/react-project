import { Popover } from 'global/popover';

const text = <span>标题</span>;
const content = (
  <div>
    <p>内容</p>
    <p>内容</p>
  </div>
);

const DialPane = () => {
  
  return (
      <Popover placement="bottom" title={text} content={content} trigger="click">
           <Button>下边</Button>
      </Popover>
  );
};

export default DialPane;
