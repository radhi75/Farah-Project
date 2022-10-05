import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.authReducer.user);

  return (
    <div>
      <Card style={{ width: "18rem", margin: "auto", marginTop: "50px" }}>
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text style={{ color: "black" }}>{user.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserProfile;
