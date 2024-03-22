import { useState } from "react";




const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const buttonClick = () => {
        setName('');
        setGuests([...guests, name]);
    }

    // !!!cannot handle duplicate names
    const removeGuest = (item: string): void => {
        const newGuests = guests.filter((guest) => (
            guest !== item
        ));
        setGuests(newGuests)
    }

    return <div>
        <h3>Guest List</h3>

        <ul>
            {guests.map((guest) => (
                <li key={guest} onClick={() => removeGuest(guest)}>{guest}</li>
            ))}
        </ul>

        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={buttonClick}>Add Guest</button>
    </div>;
};

export default GuestList;