import { useEffect, useState } from "react";
import axios from "axios";

function AdminProfile() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:4001/admin-api/users", {
      withCredentials: true,
    });
    setUsers(res.data.payload);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleUserStatus = async (user) => {
    await axios.patch(
      "http://localhost:4001/admin-api/users",
      {
        userId: user._id,
        isUserActive: !user.isUserActive,
      },
      { withCredentials: true }
    );

    fetchUsers();
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      {users.map((user) => (
        <div key={user._id}>
          <p>
            {user.email} | {user.role}
          </p>

          <button onClick={() => toggleUserStatus(user)}>
            {user.isUserActive ? "Block" : "Unblock"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminProfile;