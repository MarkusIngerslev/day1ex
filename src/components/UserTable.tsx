import { User } from "../data/data";

type UserTableProps = {
    users: User[];
};

const UserTable = ({ users }: UserTableProps) => {
    return (
        <>
            {/** Render all users in a table RIGHT HERE */}
            <table className="simple-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>
                                <a href={user.email}>{user.email}</a>
                            </td>
                            <td>{user.isActive ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default UserTable;
