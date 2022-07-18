const Card = ({ cssClass, children }) => {
    return (
        <div className="shadow rounded-lg">
            <div className={cssClass}>
                {children}
            </div>
        </div>
    )
}

export default Card