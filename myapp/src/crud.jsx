import React, { useState, useContext } from "react";
import { Data } from "./data";
import { ThemeContext } from "./ThemeContext";

function Crud() {
    const [data, setData] = useState(Data);
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        age: "",
        color: "",
        city: ""
    });
    const [isEdit, setIsEdit] = useState(false);
    const {theme} = useContext(ThemeContext);

    //Handle Input Change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    //Add or Update
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEdit) {
            const updatedData = data.map((item) =>
                item.id === formData.id ? formData : item
            );
            setData(updatedData);
            setIsEdit(false);
        } else {
            const newId = data.length > 0
                ? (parseInt(data[data.length - 1].id) + 1).toString()
                : "1";

            setData([...data, { ...formData, id: newId }]);
        }

        setFormData({ id: "", name: "", age: "", color: "", city: "" });
    };

    //Edit
    const handleEdit = (id) => {
        const curr = data.find((item) => item.id === id);
        setFormData({ ...curr });
        setIsEdit(true);
    };

    //Delete
    const handleDelete = (id) => {
        const filtered = data.filter((item) => item.id !== id);
        setData(filtered);
    };

    return (
        <div className={`${theme=="light"?"bg-white text-black":"bg-black text-white"}`}>
            <h2>CRUD App</h2>

            {/* FORM */}
            <form onSubmit={handleSubmit}>
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
                <input name="color" value={formData.color} onChange={handleChange} placeholder="Color" />
                <input name="city" value={formData.city} onChange={handleChange} placeholder="City" />

                <button type="submit">
                    {isEdit ? "Update" : "Add"}
                </button>
            </form>

            {/* TABLE */}
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Color</th>
                        <th>City</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.color}</td>
                            <td>{item.city}</td>
                            <td>
                                <button onClick={() => handleEdit(item.id)}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Crud;