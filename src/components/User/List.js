import Card from "../UI/Card";

const UserList = ({ users }) => {
  return (
    <div className="mt-10">
      <Card>
        <ul>
          {users?.map((user, i) => (
            <li key={i} className="border-b pt-3 pb-1 text-start">
              {user.name} ({user.age})
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default UserList;
