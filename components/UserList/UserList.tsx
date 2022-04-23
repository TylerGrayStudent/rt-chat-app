import { Card } from "@mui/material";
import exp from "constants";
import { User } from "../../models/User";

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <>
      <Card variant="outlined">
        <h3>Currently Connected Users</h3>
        {users.map((u) => {
          return <div key={u.id}>{u.username}</div>;
        })}
      </Card>
    </>
  );
};

export default UserList;
