import { useState } from "react";


const users = [
    {name: 'Tony', age: 42},
    {name: 'Bill', age: 32},
    {name: 'Greg', age: 33}
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();

    const onClick = () => {
        const found = users.find((user) => (
            user.name === name
        ))

        setUser(found);
    }

    return <div>
        User Search
        <input value={name} onChange={e =>setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>

        <div>
            {user && user.name}
            {user && user.age}
        </div>
    </div>
}

export default UserSearch;