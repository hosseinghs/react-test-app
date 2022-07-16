import { useState } from 'react'
import Card from '../UI/Card'
import Btn from '../UI/Btn'

const AddUser = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const nameHandler = (e) => {
        setName(e)
    }

    const ageHandler = (e) => {
        setAge(e)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (name.trim().length === 0 || age.trim().length === 0) return
        if (+age < 1) return
        setName('')
        setAge('')
    }

    return (
        <Card>
            <div>
                <form onSubmit={onSubmit}>
                    <div className="flex items-center py-2">
                        <label htmlFor="name" className="font-bold text-sm">Name: </label>
                        <input value={name} onChange={(e) => nameHandler(e.target.value)} id="name" type="text" className="flex-1 px-2 py-1 ml-2 outline-none border rounded-lg " />
                    </div>

                    <div className="flex items-center py-2">
                        <label htmlFor="age" className="font-bold text-sm">Age: </label>
                        <input value={age} onChange={(e) => ageHandler(e.target.value)} id="age" type="number" className="flex-1 px-2 py-1 ml-2 outline-none border rounded-lg " />
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