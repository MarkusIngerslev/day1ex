import { BaseProps } from "../types";
import { FormEvent } from "react";
import { User } from "../data/data";

type UserFormProps = BaseProps & {
    onSubmitUser: (user: User) => void;
};

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //Read form inputs and submit the form to the parent
        const form = e.currentTarget;
        const newUser = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            isActive: (form.elements.namedItem("isActive") as HTMLInputElement).checked,
        };
        onSubmitUser(newUser);
    };

    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={onSubmit}>
                First Name: <input name="name" />
                Email: <input name="email" />
                Active: <input type="checkbox" name="isActive" />
                <button type="submit">Add User</button>
            </form>
        </>
    );
}
