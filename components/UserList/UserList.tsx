import { Card } from "@mui/material";
import exp from "constants";
import { ApiUser } from "../../models/User";

interface Props {
  users: ApiUser[];
}

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <>
      <Card variant="outlined">
        <h3>Currently Connected Users</h3>
        {users.map((u) => {
          return <div key={u._id}>{u.username}</div>;
        })}
      </Card>
    </>
  );
};

export default UserList;
