import React from "react";
import TableComponent from "./TableComponent";
import ModalCreate from "./ModalCreate";



const HomeComponent = () => {
    
    return (
        <>
            <div>
                <ModalCreate />
                <TableComponent />
            </div>
        </>
    );
};

export default HomeComponent;
