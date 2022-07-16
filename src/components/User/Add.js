const AddUser = () => {

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="flex items-center py-2">
                    <label htmlFor="name" className="min-w-10">Name</label>
                    <input id="name" type="text" className="flex-1 px-2 py-1 ml-2 outline-none border rounded-lg " />
                </div>

                <div className="flex items-center py-2">
                    <label htmlFor="age" className="min-w-10">Age</label>
                    <input id="age" type="number" className="flex-1 px-2 py-1 ml-2 outline-none border rounded-lg " />
                </div>
                <div>
                    <button type="submit" className="py-2 px-6">
                        Add user
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddUser