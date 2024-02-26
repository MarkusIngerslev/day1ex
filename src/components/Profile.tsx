type ProfileProps = {
    name: string;
    email: string;
    isActive: boolean;
    singleLine?: boolean;
};

export default function Profile({ name, email, isActive, singleLine }: ProfileProps) {
    {
        if (singleLine)
            return (
                <p>
                    Name: {name} || Email: {email} || Aktiv? {isActive ? "Active" : "Inactive"}
                </p>
            );
    }

    return (
        <>
            <p>
                Name: {name}
                <br />
                Email: {email}
                <br />
                Status: {isActive ? "Active" : "Inactive"}
            </p>
        </>
    );
}
