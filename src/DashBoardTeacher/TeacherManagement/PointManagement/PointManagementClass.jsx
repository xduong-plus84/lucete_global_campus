import React, { useState } from "react";
import { Form, Input, InputNumber, Table } from "antd";
import "./pointManagement.css";

const originData = [
  {
    key: "1",
    studentName: "Student 1",
    score: 10,
  },
  {
    key: "2",
    studentName: "Student 2",
    score: 10,
  },
  {
    key: "3",
    studentName: "Student 3",
    score: 20,
  },
  {
    key: "4",
    studentName: "Student 4",
    score: 15,
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

export default function PointManagementClass(props) {
  let { idClass } = props;

  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");

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
      title: "Student Name",
      dataIndex: "studentName",
      width: "50%",
      editable: true,
    },
    {
      title: "Score",
      dataIndex: "score",
      width: "30%",
      editable: true,
      render: (_, record) => <span>{record.score}</span>,
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
            {/* <button
              disabled={editingKey !== ""}
              onClick={() => handleClickDelete(record.key)}
              className={`${
                editingKey !== "" ? "cursor-not-allowed opacity-40" : ""
              } mx-2 hover:text-red-500 duration-300`}
            >
              <i className="fa fa-times"></i>
            </button> */}
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

  return (
    <div className="pointManagement w-1/2 mx-auto">
      <p className="mb-2">
        idClass: <span className="text-red-500 font-medium">{idClass}</span>
      </p>

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
    </div>
  );
}
