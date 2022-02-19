import React from "react";
import TableComponent from "./TableComponent";
import ModalCreate from "./ModalCreate";
import { Card } from 'antd';


const HomeComponent = () => {
    
    return (
        <div>             
            <Card title="Todo App" style={{ marginTop:64 }}>
                <ModalCreate />
                <TableComponent />
            </Card>
        </div>
    );
};

export default HomeComponent;
