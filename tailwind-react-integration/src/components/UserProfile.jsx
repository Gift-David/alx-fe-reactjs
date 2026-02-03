function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-auto rounded-lg shadow-lg my-20 sm:p-4 md:p-8 w-36 max-w-xs" >
      <img src="https://via.placeholder.com/150" alt="User" className="rounded-full sm:w-36 sm:w-24 sm:h-24 md:w-36" />
      <h1 className=" text-blue-800 my-4 text-base text-xl on sm:text-lg  md:text-xl sm:text-sm md:text-base">John Doe</h1>
      <p className="text-gray-600">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;