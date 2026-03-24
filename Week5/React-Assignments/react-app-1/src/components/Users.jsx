function Users(props) {
  let { user } = props;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 text-center border border-gray-100">

      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={user.image}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 shadow-sm"
        />
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-semibold text-gray-800">
        {user.name}
      </h3>

      {/* Email */}
      <p className="text-gray-500 text-sm mt-1 break-all">
        {user.email}
      </p>

      {/* Button */}
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition duration-200">
        View Profile
      </button>

    </div>
  );
}

export default Users;