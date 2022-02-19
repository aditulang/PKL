import React, { useState } from "react";
import { Modal, Input, Form, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../features/Todos";

const ModalCreate = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.value);
    const [todo, setTodo] = useState("");

    
    const showModal = () => {
        setIsModalVisible(true); 
    };
 
    const handleOk = () => {
        dispatch(
            addTodo({
                id: todoList[todoList.length - 1].id + 1,
                todo,
            })
        );
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false); 
    };

    return (
        <>
            {/* function modal yang ada di baris kode ke 14 */}
            <Button type="primary" onClick={showModal}>
                Tambah Todo
            </Button>
            <Modal
                title="Tambah"
                visible={isModalVisible} 
                onCancel={handleCancel} 
                footer={[
                    <Button onClick={handleOk} htmlType="submit">OK</Button>,
                    <Button onClick={handleCancel}>Cancel</Button>,
                ]}
            >
                <div>
                    <Input
                        name="todo" 
                        onChange={(event) => {
                            setTodo(event.target.value);
                        }}
                        required
                        autoComplete="off"
                        placeholder="Tambah nama.."
                    />
                </div>
            </Modal>
        </>
    );
};

export default ModalCreate;