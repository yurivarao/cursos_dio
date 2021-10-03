const Item = (props, {children}) => {
    return (
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
            {props.texto}
            {props.children}
            {children}
        </a>
    )
}

export default Item;