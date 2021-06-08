import React, { useEffect, useReducer, useRef } from "react";
import PropTypes from "prop-types";

import "./person.css";
import personReducer from "../../reducers/person";

const Person = (props) => {
    const [persons, dispatch] = useReducer(personReducer, props.person);

    const refName = useRef();
    const refAge = useRef();
    const refGender = useRef();

    useEffect(() => {
        document.title = `Person (${persons.length})`;
        refName.current.value = '';
        refAge.current.value = '';
        refGender.current.value = 'male';
        refName.current.focus();
    }, [persons]);

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
                    ref={refName}
                />
                <label className="Person__input-title"
                    htmlFor="txtAge"
                >Số tuổi:</label>
                <input className="Person__input-text"
                    name="txtAge"
                    type="text"
                    placeholder="Nhập số tuổi"
                    ref={refAge}
                />
                <label className="Person__input-title"
                    htmlFor="cmbGender"
                >Giới tính:</label>
                <select className="Person__input-select"
                    name="cmbGender"
                    ref={refGender}
                >
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                </select>
                <input className="Person__input-btn"
                    name="btnAdd"
                    type="button"
                    value="Thêm"
                    onClick={() => dispatch({
                        type: 'add',
                        personNew: {
                            id: persons.length + 1,
                            name: refName.current.value,
                            age: refAge.current.value,
                            gender: refGender.current.value,
                        }
                    })}
                />
            </div>
            <ul className="Person__list">
                {persons?.map((person) =>
                    <li key={person.id} className={"Person__list-item " + person.gender}>
                        <div className="Person__list-item-name">{person.name}</div>
                        <div className="Person__list-item-age">{person.age}</div>
                        <button className="Person__list-item-btn"
                            onClick={() => dispatch({ type: 'remove', id: person.id })}
                        >Xóa</button>
                    </li>
                )}
            </ul>
        </div >
    )
}

Person.propTypes = {
    person: PropTypes.array,
}

export default Person;