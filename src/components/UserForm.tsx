import { BaseProps } from "../types";
import { FormEvent, useRef } from "react";
import { User } from "../data/data";

type UserFormProps = BaseProps & {
    onSubmitUser: (user: User) => void;
};

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const isActiveRef = useRef<HTMLInputElement>(null);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = nameRef.current?.value || "";
        const email = emailRef.current?.value || "";
        const isActive = isActiveRef.current?.checked || false;
        onSubmitUser({ name, email, isActive });
    };

    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={onSubmit}>
                First Name: <input name="name" ref={nameRef} />
                Email: <input name="email" ref={emailRef} />
                Active: <input type="checkbox" name="isActive" ref={isActiveRef} />
                <button type="submit">Add User</button>
            </form>
        </>
    );
}
