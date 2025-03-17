import React, { useState } from "react";
import { Link } from "react-router";
import { Button } from "antd";
import { ChevronRight } from 'lucide-react'

const UserProfile: React.FC = () => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleProfileUpdate = () => {
    alert("Profile updated successfully!");
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password changed successfully!");
  };

  return (
    <div className="space-y-6 p-6 min-h-screen bg-gray-100">
      <div className="flex items-center gap-2">
      <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <h2 className="!text-black">Profile Settings</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Profile Details</h2>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <img alt="Profile" className="w-20 h-20 rounded-full bg-gray-200" />
          <div className="space-y-2">
            <Button type="default">Edit Profile Picture</Button>
            <Button type="default" danger>Remove Profile Picture</Button>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Email:</strong></p>
          <p><strong>Phone Number:</strong></p>
          <p><strong>Address:</strong> {address}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
          <input type="text" className="w-full p-3 border rounded mb-4" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          <input type="text" className="w-full p-3 border rounded mb-4" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
          <Button type="primary" className="w-full" onClick={handleProfileUpdate}>Save Changes</Button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Change Password</h3>
          <input type="password" className="w-full p-3 border rounded mb-4" placeholder="Current Password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
          <input type="password" className="w-full p-3 border rounded mb-4" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <input type="password" className="w-full p-3 border rounded mb-4" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <Button type="primary" className="w-full" onClick={handleChangePassword}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;