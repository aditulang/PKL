import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import EditForm from './EditForm';

const EditModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <a type="primary" onClick={showModal}>
        EDIT
      </a>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <EditForm />
      </Modal>
    </>
  );
};

export default EditModal