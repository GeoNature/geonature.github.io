import User from "@/interfaces/User";

const UsersTable = ({ users }: { users: User[] }) => (
  <>
    {!users && <span>Il n'y a pas d'utilisateurs.</span>}
    {users && (
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </>
);

export default UsersTable;
