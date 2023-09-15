import React from "react";

export const Filter = ({ value, onChange }) => (
    <div>
    <div>Find contacts by name</div>
    <div type="text" value={value} onChange={onChange} placeholder="search"></div>
    </div>
)


