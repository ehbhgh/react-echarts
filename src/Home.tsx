import React, { FC, Fragment, } from "react";
import { Button, Form, Input } from "antd";
interface listType {
  name: string;
  age: number;
  class: string;
  id:string
}
type IPorps = {
  list: listType[];
  getChangeList: (val:listType) => void;
};
const Home: FC<IPorps> = ( { list, getChangeList }) => {
  const onFinish = (values:listType) => {
    getChangeList(values);
  };
  return (
    <Fragment>
      <div>
        {list.map((item) => {
          return (
            <ul key={item.id}>
              <li >姓名：{item.name}</li>
              <li >年龄:{item.age}</li>
              <li >班级：{item.class}</li>
            </ul>
          );
        })}
      </div>
      <Form
        name="basic"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 6 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="name"
          name="name"
          rules={[{ required: true, message: "请输入姓名!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="age"
          name="age"
          rules={[{ required: true, message: "请输入年龄!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="class"
          name="class"
          rules={[{ required: true, message: "请输入班级!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            添加项目到父组件
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default Home;
