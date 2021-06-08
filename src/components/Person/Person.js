import { useState, useEffect } from "react";

import "./Person.css";

const Person = (props) => {
    const [persons, setPersons] = useState([]);
    const [inpName, setInpName] = useState('');
    const [inpAge, setInpAge] = useState('');

    useEffect(() => {
        setPersons(props?.person);
    }, [props?.person]);

    const handleAdd = () => {
        if (validator) {
            if (persons.length > 0) {
                setPersons([...persons, { id: persons.length + 1, name: inpName, age: inpAge }]);
            } else {
                setPersons([{ id: persons.length + 1, name: inpName, age: inpAge }]);
            }
        }
    }

    const handleRemove = (id) => {
        setPersons(persons?.filter(x => x.id !== id));
    }

    const validator = (() => {
        if (inpName !== '' && inpAge !== '') {
            if (inpName.length > 3 && inpAge.length > 1) {
                return true;
            }
        }
        return false;
    })();

    return (
        <div className="Person">
            <div className="Person__input">
                <label className="Person__input-title"
                    htmlFor="txtName"
                >Họ tên:</label>
                <input className="Person__input-text"
                    name="txtName"
                    type="text"
                    placeholder="Nhập họ tên"
                    onChange={(e) => setInpName(e.target.value)}
                />
                <label className="Person__input-title"
                    htmlFor="txtAge"
                >Số tuổi:</label>
                <input className="Person__input-text"
                    name="txtAge"
                    type="text"
                    placeholder="Nhập số tuổi"
                    onChange={(e) => setInpAge(e.target.value)}
                />
                <input className="Person__input-btn"
                    name="btnAdd"
                    type="button"
                    value="Thêm"
                    onClick={handleAdd}
                />
            </div>
            <ul className="Person__list">
                {persons?.map((person) =>
                    <li key={person.id} className="Person__list-item">
                        <div className="Person__list-item-name">{person.name}</div>
                        <div className="Person__list-item-age">{person.age}</div>
                        <button className="Person__list-item-btn"
                            onClick={() => handleRemove(person.id)}
                        >Xóa</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Person;