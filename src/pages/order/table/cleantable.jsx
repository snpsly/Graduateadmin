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
      //  setdata(res.data);
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
      shop_title: "",

      shop_price: "",
      shop_num: "",
      id: "",
      user_name: "",
      clean_name: "",
      user_phone: "",
      user_id: "",
      clean_id: "",
      date: "",
      order_state: "",
      user_address: "",
      date_time: "",
      date_pause: "",
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
        pagination={{
          defaultCurrent: 1,
          total: 50,
          onChange: pageonchange,
          defaultPageSize: 5,
        }}
        scroll={{ x: 1500 }}
      >
        <Column title="id" dataIndex="id" key="id" />
        <Column title="用户" dataIndex="user_id" key="id" />
        <Column title="保洁" dataIndex="clean_id" key="id" />
        <Column title="服务标题" dataIndex="shop_title" key="id" />
        <Column title="服务价格" dataIndex="shop_price" key="id" />
        <Column title="开始时间" dataIndex="date" key="id" />
        <Column title="面积" dataIndex="shop_num" key="id" />
        <Column title="订单状态" dataIndex="order_state" key="id" />
        <Column title="用户地址" dataIndex="user_address" key="id" />
        <Column title="用户手机" dataIndex="user_phone" key="id" />
        <Column title="用户名" dataIndex="user_name" key="id" />
        <Column title="所需时间" dataIndex="date_time" key="id" />
        <Column title="结束时间" dataIndex="date_pause" key="id" />
        <Column title="保洁名" dataIndex="clean_name" key="id" />
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
              label="用户"
              name="user_id"
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
              label="保洁"
              name="clean_id"
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
              label="服务名称"
              name="shop_title"
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
              label="服务价格"
              name="shop_price"
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
              label="开始时间"
              name="date"
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
              label="服务面积"
              name="shop_num"
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
              label="用户地址"
              name="user_address"
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
              label="订单状态"
              name="order_state"
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
              label="用户手机"
              name="user_phone"
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
              label="所需时间"
              name="date_time"
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
              name="user_name"
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
              label="保洁名"
              name="clean_name"
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
              label="结束时间"
              name="date_pause"
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
