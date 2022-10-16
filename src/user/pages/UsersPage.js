import React from "react";
import UserList from "../components/UserList";

const USERS = [
  {
    id: "u1",
    name: "Max Schwarz",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    places: 3,
  },
];

const UsersPage = () => {
  return (
    <>
      <UserList item={USERS} />
    </>
  );
};

export default UsersPage;
