import React, { useState } from "react";
import { Table, Space, Divider, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../features/Todos";
import { addTodo } from "../features/Todos";
import EditModal from "./EditModal";


const TableComponent = (props) => {
  const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.value);
    const [todoId, setTodoId] = useState("");


  const columns = [
    {
      title: "TODO",
      dataIndex: "todo",
      key: "todo",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "ACTION",
      dataIndex: "id",
      key: "id",
      fixed: "right",
      width: 100,
      render: (id) => [
          <Space split={<Divider type="vertical" />} size="middle">
              <a>Done</a>
              <EditModal todoId={id} />

              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => {
                  dispatch(deleteTodo({ id: id }));
                }}
              >
                <a>Delete</a>
              </Popconfirm>
          </Space>
        ],
    },
  ];


    return (
      <div style={{ marginTop: 16 }}>
        <Table columns={columns} dataSource={todoList} />
      </div>  
    );
};

export default TableComponent;
