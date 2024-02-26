import { BaseProps } from "../types";
import { users } from "../data/data";
//import UserTable from "../components/UserTable";
type Props = BaseProps;

export default function ListDemo({ title }: Props) {
    return (
        <>
            <h2>{title}</h2>
            {/** Render all users in a table RIGHT HERE */}
            <table>
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
                            <td>{user.email}</td>
                            <td>{user.isActive ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/**After that refactor the table-part into a separate Component and use like this */}
            {/*<UserTable users={users} />*/}
        </>
    );
}
