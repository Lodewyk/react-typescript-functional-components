import { useState, useRef, useEffect } from "react";


const users = [
    {name: 'Tony', age: 42},
    {name: 'Bill', age: 32},
    {name: 'Greg', age: 33}
]

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();

    useEffect(() => {
        if (!inputRef.current) {
            return;
        }

        inputRef.current.focus();
    }, []);

    const onClick = () => {
        const found = users.find((user) => (
            user.name === name
        ))

        setUser(found);
    }

    return <div>
        User Search
        <input ref={inputRef} value={name} onChange={e =>setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>

        <div>
            {user && user.name}
            {user && user.age}
        </div>
    </div>
}

export default UserSearch;