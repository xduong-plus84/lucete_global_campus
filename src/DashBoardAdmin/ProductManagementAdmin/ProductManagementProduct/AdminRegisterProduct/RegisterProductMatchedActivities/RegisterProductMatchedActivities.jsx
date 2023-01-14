import React, { useState } from "react";
import { Form, Input, InputNumber, Modal, Table } from "antd";
import "./registerProductMatchedActivities.css";

const originData = [
  {
    key: "1",
    activity: `Backgound Disscussion`,
    type: "Coaching",
    time: 10,
  },
  {
    key: "2",
    activity: `Text & Question Check Up`,
    type: "Coaching",
    time: 10,
  },
  {
    key: "3",
    activity: `Open Discussion`,
    type: "Coaching",
    time: 20,
  },
  {
    key: "4",
    activity: `Grammar Point`,
    type: "Coaching",
    time: 15,
  },
];

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
export default function RegisterProductMatchedActivities() {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const [count, setCount] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  let [activity, setActivity] = useState();

  const handleClickAdd = () => {
    setIsModalOpen(true);
  };

  const handleClickDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const isEditing = (record) => record.key === editingKey;

  const handleClickEdit = (record) => {
    form.setFieldsValue({
      name: "",
      age: "",
      address: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const handleClickCancel = () => {
    setEditingKey("");
  };

  const handleClikcSave = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Activity",
      dataIndex: "activity",
      width: "40%",
      editable: true,
    },
    {
      title: "Type",
      dataIndex: "type",
      width: "20%",
      editable: true,
    },
    {
      title: "Time",
      dataIndex: "time",
      width: "20%",
      editable: true,
      render: (_, record) => <span>{record.time} mins</span>,
    },
    {
      title: "Edit",
      dataIndex: "edit",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <>
            <button
              onClick={() => handleClikcSave(record.key)}
              className="hover:text-green-500 duration-300"
            >
              Save
            </button>
            <button
              onClick={handleClickCancel}
              className="ml-2 hover:text-red-500 duration-300"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              disabled={editingKey !== ""}
              onClick={() => handleClickEdit(record)}
              className={`${
                editingKey !== "" ? "cursor-not-allowed opacity-40" : ""
              } mx-2 hover:text-green-500 duration-300`}
            >
              <i className="fa fa-pen"></i>
            </button>
            <button
              disabled={editingKey !== ""}
              onClick={() => handleClickDelete(record.key)}
              className={`${
                editingKey !== "" ? "cursor-not-allowed opacity-40" : ""
              } mx-2 hover:text-red-500 duration-300`}
            >
              <i className="fa fa-times"></i>
            </button>
          </>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  // action modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setActivity({ ...activity, key: count });
    setData([...data, activity]);
    setCount(count + 1);
  };
  const onChangeActivity = (e) => {
    console.log("changed", e.target.value);
    setActivity({
      ...activity,
      key: new Date().getTime().toString(),
      activity: e.target.value,
    });
  };
  const onChangeType = (e) => {
    console.log("changed", e.target.value);
    setActivity({ ...activity, type: e.target.value });
  };
  const onChangeTime = (value) => {
    console.log("changed", value);
    setActivity({ ...activity, time: value });
  };

  return (
    <div className="registerMatchActivities">
      <div className="mb-2">
        <span className="font-bold">Matched Activities</span>
        <span className="mx-4">
          (<span>Total: </span>
          {data.reduce((total, current) => total + parseInt(current.time), 0)}
          mins )
        </span>
        <button
          onClick={handleClickAdd}
          className="text-xl font-bold hover:text-green-600 duration-300"
        >
          <i className="fa fa-plus"></i>
        </button>
      </div>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={false}
        />
      </Form>

      <Modal
        title="Add activity"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <button
            key={"btnCancel"}
            onClick={handleCancel}
            className="ml-3 px-3 py-1 font-semibold border rounded border-transparent text-gray-700 hover:text-gray-50 hover:bg-red-500 duration-300"
          >
            Cancel
          </button>,
          <button
            key={"btnOk"}
            onClick={handleOk}
            className="ml-3 px-3 py-1 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
          >
            Submit
          </button>,
        ]}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="w-1/3">Activity Name</span>
          <Input onChange={onChangeActivity} />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="w-1/3">Type</span>
          <Input onChange={onChangeType} />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="w-1/3">Time (s)</span>
          <InputNumber min={1} onChange={onChangeTime} className="w-full" />
        </div>
      </Modal>
    </div>
  );
}
