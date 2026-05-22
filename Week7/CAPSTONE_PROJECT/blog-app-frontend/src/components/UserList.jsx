import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../config";
import { toast } from "react-hot-toast";
import { loadingClass, errorClass, emptyStateClass } from "../styles/common";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/admin-api/users`, {
        withCredentials: true,
      });
      setUsers(res.data.payload);
    } catch (err) {
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const toggleUserStatus = async (userId, currentStatus) => {
    try {
      const res = await axios.put(
        `${BASE_URL}/admin-api/users`,
        { userId, isUserActive: !currentStatus },
        { withCredentials: true }
      );
      if (res.status === 200) {
        toast.success(res.data.message);
        getUsers(); // Refresh list
      }
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  if (loading) return <p className={loadingClass}>Loading users...</p>;
  if (error) return <p className={errorClass}>{error}</p>;

  return (
    <div className="overflow-hidden bg-white border border-[#e8e8ed] rounded-3xl shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#f5f5f7] border-b border-[#e8e8ed]">
            <th className="px-6 py-4 text-xs font-semibold text-[#6e6e73] uppercase tracking-wider">User</th>
            <th className="px-6 py-4 text-xs font-semibold text-[#6e6e73] uppercase tracking-wider">Email</th>
            <th className="px-6 py-4 text-xs font-semibold text-[#6e6e73] uppercase tracking-wider">Status</th>
            <th className="px-6 py-4 text-xs font-semibold text-[#6e6e73] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#e8e8ed]">
          {users.map((user) => (
            <tr key={user._id} className="hover:bg-[#fbfbfb] transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                    {user.firstName.charAt(0)}
                  </div>
                  <span className="font-medium text-[#1d1d1f]">{user.firstName} {user.lastName}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-[#6e6e73]">{user.email}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${user.isUserActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {user.isUserActive ? "Active" : "Blocked"}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => toggleUserStatus(user._id, user.isUserActive)}
                  className={`text-xs font-medium px-4 py-1.5 rounded-full border transition ${
                    user.isUserActive 
                      ? "border-red-200 text-red-600 hover:bg-red-50" 
                      : "border-green-200 text-green-600 hover:bg-green-50"
                  }`}
                >
                  {user.isUserActive ? "Block" : "Unblock"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {users.length === 0 && <div className={emptyStateClass}>No users found.</div>}
    </div>
  );
}

export default UserList;
