import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

import Form from "react-bootstrap/Form";
import { del_article, edit_article } from "../../Redux/Action/articleAction";
import Modal from "react-bootstrap/Modal";

const UsersCard = ({ el }) => {
  console.log(el);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(el.title);
  const [price, setPrice] = useState(el.price);
  const [description, setDescription] = useState(el.description);
  const [location, setLocation] = useState(el.location);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      edit_article(el._id, { title, price, description, location }),
      handleClose()
    );
  };
  return (
    <div>
      <Card
        style={{
          width: "18rem",

          margin: "50px",
        }}
      >
        <ListGroup variant="flush">
          <ListGroup.Item>title {el.title}</ListGroup.Item>
          <ListGroup.Item>price {el.price}</ListGroup.Item>
          <ListGroup.Item>description {el.description}</ListGroup.Item>
          <ListGroup.Item>location {el.location}</ListGroup.Item>

          <ListGroup.Item
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              variant="danger"
              onClick={() => dispatch(del_article(el._id))}
            >
              DELETE
            </Button>
            <Button variant="warning" onClick={handleShow}>
              EDIT
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>description</Form.Label>
                    <Form.Control
                      type="description"
                      placeholder="Enter description"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="title"
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="price"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="location"
                      onChange={(e) => setLocation(e.target.value)}
                      value={location}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="warning" onClick={handleEdit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default UsersCard;
