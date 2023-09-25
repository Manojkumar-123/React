import React, { useState } from "react";

import UsersList from "../components/UsersList";

const User = () => {
  const [users, setUsers] = useState([
    {
      id: "u1",
      name: "Manoj",
      image:
        "https://logowik.com/content/uploads/images/spiderman-head12610.logowik.com.webp",
      placeCount: 1,
    },
    {
        id: "u2",
        name: "Deepak",
        image:
          "https://logowik.com/content/uploads/images/spiderman-head12610.logowik.com.webp",
        placeCount: 3,
      },
  ]);

  return <UsersList items={users}/>;
};

export default User;
