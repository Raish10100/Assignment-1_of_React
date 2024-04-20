function List(props){
    return(
        <>
        <ul className="unorderList">
        {props.items.map((item, index) => (
            <li  className="listItem" key={index}>{item}</li>
        ))}

        </ul>
        </>
    );
};

export default List