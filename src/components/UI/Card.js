const Card = ({ cssClass, children }) => {
    return (
        <div className="p-4 shadow rounded-lg">
            <div className={cssClass}>
                {children}
            </div>
        </div>
    )
}

export default Card