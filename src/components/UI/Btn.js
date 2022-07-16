const Btn = ({ children, cssClass, type, onClick }) => {
    return (
        <button className={cssClass} type={type || 'button'} onClick={onClick}>
            {children}
        </button>
    )
}

export default Btn