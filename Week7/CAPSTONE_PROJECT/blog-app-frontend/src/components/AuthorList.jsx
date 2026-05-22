import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../config";
import { toast } from "react-hot-toast";
import { loadingClass, errorClass, emptyStateClass } from "../styles/common";

function AuthorList() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAuthors = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/admin-api/authors`, {
        withCredentials: true,
      });
      setAuthors(res.data.payload);
    } catch (err) {
      setError("Failed to load authors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAuthors();
  }, []);

  const toggleAuthorStatus = async (userId, currentStatus) => {
    try {
      const res = await axios.put(
        `${BASE_URL}/admin-api/users`,
        { userId, isUserActive: !currentStatus },
        { withCredentials: true }
      );
      if (res.status === 200) {
        toast.success(res.data.message);
        getAuthors(); // Refresh list
      }
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  if (loading) return <p className={loadingClass}>Loading authors...</p>;
  if (error) return <p className={errorClass}>{error}</p>;

  return (
    <div className="overflow-hidden bg-white border border-[#e8e8ed] rounded-3xl shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#f5f5f7] border-b border-[#e8e8ed]">
            <th className="px-6 py-4 text-xs font-semibold text-[#6e6e73] uppercase tracking-wider">Author</th>
            <th className="px-6 py-4 text-xs font-semibold text-[#6e6e73] uppercase tracking-wider">Email</th>
            <th className="px-6 py-4 text-xs font-semibold text-[#6e6e73] uppercase tracking-wider">Status</th>
            <th className="px-6 py-4 text-xs font-semibold text-[#6e6e73] uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#e8e8ed]">
          {authors.map((author) => (
            <tr key={author._id} className="hover:bg-[#fbfbfb] transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-xs font-bold">
                    {author.firstName.charAt(0)}
                  </div>
                  <span className="font-medium text-[#1d1d1f]">{author.firstName} {author.lastName}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-[#6e6e73]">{author.email}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${author.isUserActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {author.isUserActive ? "Active" : "Blocked"}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => toggleAuthorStatus(author._id, author.isUserActive)}
                  className={`text-xs font-medium px-4 py-1.5 rounded-full border transition ${
                    author.isUserActive 
                      ? "border-red-200 text-red-600 hover:bg-red-50" 
                      : "border-green-200 text-green-600 hover:bg-green-50"
                  }`}
                >
                  {author.isUserActive ? "Block" : "Unblock"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {authors.length === 0 && <div className={emptyStateClass}>No authors found.</div>}
    </div>
  );
}

export default AuthorList;
