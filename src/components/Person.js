
const Person = (props) => {
    return (
        <p>{props.name}: {props.age} {props.children}</p>
    );
}

export default Person;