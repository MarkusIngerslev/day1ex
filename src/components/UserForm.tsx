import { BaseProps } from "../types";
import { FormEvent, useState } from "react";
import { User } from "../data/data";

type UserFormProps = BaseProps & {
    onSubmitUser: (user: User) => void;
};

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isActive, setIsActive] = useState(false);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitUser({ name, email, isActive });
    };

    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={onSubmit}>
                First Name: <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
                Email: <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                Active:{" "}
                <input
                    type="checkbox"
                    name="isActive"
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                />
                <button type="submit">Add User</button>
            </form>
        </>
    );
}
