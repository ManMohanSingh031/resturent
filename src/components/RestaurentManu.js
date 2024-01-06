import React from "react";
import { useParams } from "react-router-dom";

const RestaurentManu = () => {
    const { id } = useParams();

    return (
        <>
            <h1 style={{ marginTop: '100px', textAlign: 'center' }}>Restaurant Menu</h1>
            <h1> This is Restaurent: {id} </h1>
        </>
    );
};

export default RestaurentManu; 
