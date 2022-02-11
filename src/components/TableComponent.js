import { Table, Tag, Space, Divider } from 'antd';
import React from 'react';
import EditModal from './EditModal';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Action',
    key: 'action',
    fixed: 'right',
    width: 100,
    render: (text, record) => (
        <Space split={<Divider type="vertical" />} size="middle">
            
            <a><EditModal/></a>
            <a>Delete</a>
        </Space>
    ),
},
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


const TableComponent = () => {
    return (
            <Table columns={columns} dataSource={data} />
    );
};

export default TableComponent;
