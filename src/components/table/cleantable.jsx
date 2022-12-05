import styles from "./cleantable.module.css";
import { Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { Button, Card, Form, Input } from "antd";

const { Column, ColumnGroup } = Table;
const { Search } = Input;
const CleanTable = (props) => {
  const [data, setdata] = useState();
  const [username, setusername] = useState("");
  const [cardflag, setcardflag] = useState(false);
  const [form] = Form.useForm();
  const [de, setde] = useState(0);
  const [selectusername, setselectusername] = useState("");
  const pageonchange = (page, pageSize) => {
    props.selectfun(page, selectusername).then((res) => {
      setdata(res.data);
    });
  };
  const onFinish = (values) => {
    if (values.id !== "") {
      props.updateclean(values).then((res) => {
        setcardflag(false);
      });
    } else {
      props.addclean(values).then((res) => {
        setcardflag(false);
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    props.selectfun(1, username).then((res) => {
      setdata(res.data);
    });
  }, [cardflag, de]);
  const updatebtn = (item) => {
    form.setFieldsValue({ ...item });
    setcardflag(true);
  };
  const deletebtn = (item) => {
    console.log(item);
    props.deleteclean(item.id).then((res) => {
      setde(de + 1);
    });
  };
  const onSearch = (value) => {
    setselectusername(value);
    props.selectfun(1, value).then((res) => {
      setdata(res.data);
    });
  };
  const addbtn = () => {
    form.setFieldsValue({
      username: "",
      password: "",
      name: "",
      id: "",
    });
    setcardflag(true);
  };
  return (
    <div className={styles.cit}>
      <div className={styles.topbar}>
        <Button
          type="primary"
          onClick={() => {
            addbtn();
          }}
        >
          添加
        </Button>
        <Search
          placeholder="输入用户账号查询"
          onSearch={onSearch}
          style={{ width: "200px" }}
          enterButton
        />
      </div>

      <Table
        dataSource={data}
        rowKey="id"
        pagination={{ defaultCurrent: 1, total: 50, onChange: pageonchange }}
      >
        <Column title="id" dataIndex="id" key="id" />
        <Column title="用户账户" dataIndex="username" key="username" />
        <Column title="用户密码" dataIndex="password" key="password" />
        <Column title="用户名" dataIndex="name" key="name" />
        <Column
          title="操作"
          render={(item) => {
            return (
              <div className={styles.tablebut}>
                <Button
                  type="primary"
                  onClick={() => {
                    updatebtn(item);
                  }}
                >
                  修改
                </Button>
                <Button
                  type="primary"
                  className={styles.rightbut}
                  onClick={() => {
                    deletebtn(item);
                  }}
                >
                  删除
                </Button>
              </div>
            );
          }}
        />
      </Table>

      <div
        className={styles.zz}
        style={cardflag ? { display: "-webkit-box" } : { display: "none" }}
      >
        <Card
          className={styles.cardture}
          bodyStyle={{ backgroundColor: "#ffffff" }}
          style={{
            width: 300,
          }}
        >
          <Form
            form={form}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="id" name="id" rules={[]}>
              <Input disabled />
            </Form.Item>
            <Form.Item
              label="用户账号"
              name="username"
              rules={[
                {
                  required: true,
                  message: "不能为空！",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="用户密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: "不能为空！",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="用户名"
              name="name"
              rules={[
                {
                  required: true,
                  message: "不能为空！",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button
                type="primary"
                className={styles.rightbut}
                onClick={() => {
                  setcardflag(false);
                }}
              >
                取消
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default CleanTable;
