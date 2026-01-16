import { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
    const userData = useContext(UserContext)
    return (
        <div>
            {userData}
        </div>
    );
}

export default UserDetails;