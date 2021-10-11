import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../../pages/admin-user/userAction";
import AdminLayOut from "../../pages/layout/AdminLayout";
import EditAdminProfile from "../../components/edit-profile/EditAdminProfile";
import { UpdateAdminPassword } from "../../components/edit-profile/UpdatePassword";
const AdminProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    !user?._id && dispatch(getUserProfile());
  }, [dispatch]);
  return (
    <AdminLayOut>
      <h1 className="text-center">Welcome {user?.fname}</h1>
      <hr />
      <div className="edit-profile-form">
        <h2>update profile info</h2>

        <EditAdminProfile />
      </div>
      <div className="update-password-form">
        <h2>password update</h2>
        <UpdateAdminPassword />
      </div>
    </AdminLayOut>
  );
};

export default AdminProfile;
