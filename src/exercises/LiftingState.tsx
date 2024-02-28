import { BaseProps } from "../types";
import { User, users as usersDB, getNextId } from "../data/data";
import { useState } from "react";
import UserTableWithButtons from "../components/UserTableWithButtons";
import "./liftingState.css";
import UserFormControlled, { AddEditDeleteFunction } from "../components/UserFormControlled";

export default function LiftingState({ title }: BaseProps) {
    const [users, setUsers] = useState(usersDB);
    const [userToEdit, setUserToEdit] = useState<User | undefined>(undefined);

    const addEditDeleteUser: AddEditDeleteFunction = (user, isDelete) => {
        if (isDelete) {
            // Delete the user
            setUsers(users.filter((u) => u.id !== user.id));
        } else if (user.id) {
            // Edit the user
            setUsers(users.map((u) => (u.id === user.id ? user : u)));
        } else {
            // Create the user
            const newUser = { ...user, id: getNextId() };
            setUsers([...users, newUser]);
        }
    };

    const editUser = (id: number) => {
        const user = users.find((u) => u.id === id);
        setUserToEdit(user);
    };
    <h2>{title}</h2>;
    return (
        <>
            <div className="outer">
                <h2 style={{ margin: 0 }}>Root Component</h2>
                <p style={{ margin: 0 }}>
                    This is where ALL the users live (Single Source of truth). <em>User Count:</em>{" "}
                    <b>{users.length}</b>
                </p>
                <p>
                    <em>User To Edit:</em> <b>{JSON.stringify(userToEdit)}</b>
                </p>

                <div className="outer-user-table">
                    <div className="user-table">
                        <UserTableWithButtons users={users} editUser={editUser} />
                    </div>
                    <div className="user-form">
                        <UserFormControlled
                            title="Add User"
                            onSubmitUser={addEditDeleteUser}
                            defaultUser={userToEdit}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
