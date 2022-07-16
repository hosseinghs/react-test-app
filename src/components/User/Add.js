import Card from '../UI/Card'
import Btn from '../UI/Btn'

const AddUser = () => {

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Card>
            <div>
                <form onSubmit={onSubmit}>
                    <div className="flex items-center py-2">
                        <label htmlFor="name" className="font-bold text-sm">Name: </label>
                        <input id="name" type="text" className="flex-1 px-2 py-1 ml-2 outline-none border rounded-lg " />
                    </div>

                    <div className="flex items-center py-2">
                        <label htmlFor="age" className="font-bold text-sm">Age: </label>
                        <input id="age" type="number" className="flex-1 px-2 py-1 ml-2 outline-none border rounded-lg " />
                    </div>
                    <hr className='mt-4 mb-1'></hr>
                    <div>
                        <Btn type="submit" className="py-2 px-6">
                            Add user
                        </Btn>
                    </div>
                </form>
            </div>
        </Card>
    )
}

export default AddUser