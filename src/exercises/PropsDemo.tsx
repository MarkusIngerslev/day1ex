import { BaseProps } from "../types";
import Profile from "../components/Profile";
import { useState } from "react";

export default function PropsDemo({ title }: BaseProps) {
    const [showHorizontal, setShowHorizontal] = useState(false);
    return (
        <>
            <h2 className="title">{title}</h2>
            Direction:{" "}
            <input type="checkbox" checked={showHorizontal} onChange={() => setShowHorizontal(!showHorizontal)} />
            <Profile name="Max Power" email="mp@email.com" isActive={true} singleLine={showHorizontal} />
            <Profile name="John Doe" email="jd@email.com" isActive={false} singleLine={showHorizontal} />
            <Profile name="Mark marksen" email="mm@email.com" isActive={true} singleLine={showHorizontal} />
            {/** Add two or more Profiles, but not until you actually have implemented <Profile />   */}
        </>
    );
}
