import { PropsWithChildren } from "react";
import User from "@/interfaces/User";

const DownloadLink = ({ data, children }: PropsWithChildren<{ data: any }>) => (
  <a
    href={`data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`}
    download="data.json"
  >
    {children}
  </a>
);

const UsersTable = ({ users }: { users: User[] }) => (
  <>
    {!users && <span>Il n'y a pas d'utilisateurs.</span>}
    {users && (
      <>
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
        <DownloadLink data={users}>Télécharger</DownloadLink>
      </>
    )}
  </>
);

export default UsersTable;
