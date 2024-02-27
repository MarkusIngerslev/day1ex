import { useState } from "react";
import { BaseProps } from "../types";
import { User } from "../data/data";

export default function StateDemo2({ title }: BaseProps) {
    const [user, setUser] = useState<User>({
        id: 1,
        name: "Max Power",
        email: "max.power@email.com",
        isActive: true,
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value, type, checked } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    return (
        <>
            <h2>{title}</h2>
            <div>
                <p>ID: {user.id}</p>{" "}
            </div>
            First Name: <input name="name" value={user.name} onChange={handleChange} />
            Email: <input name="email" value={user.email} onChange={handleChange} />
            Active: <input type="checkbox" checked={user.isActive} name="isActive" onChange={handleChange} />
            <p style={{ marginTop: 15 }}> {JSON.stringify(user)} </p>
        </>
    );
}
