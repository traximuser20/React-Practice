import React from 'react';

const Profile = () => {
  const [profile, setProfile] = React.useState({ name: '', age: '' });

  const handleSubmit = (e) => {
    const { id, value } = e.target;
    setProfile({ ...profile, [id]: value });
  };

  return (
    <div className="p-4 border border-gray-300 rounded">
      <div className="mb-4 flex flex-col gap-2">
        <h2 className="text-2xl font-bold mb-2">User Profile</h2>
        <label for="name">Name:</label>
        <input
          className="border border-gray-400 p-2 w-lg rounded-lg"
          id="name"
          type="text"
          value={profile.name}
          onChange={handleSubmit}
        />
        <label for="age">Age:</label>
        <input
          className="border border-gray-400 p-2 w-lg rounded-lg"
          id="age"
          type="number"
          value={profile.age}
          onChange={handleSubmit}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Profile Details</h3>
        <p className="text-gray-700">Name: {profile.name}</p>
        <p className="text-gray-700">Age: {profile.age}</p>
      </div>
    </div>
  );
};

export default Profile;
