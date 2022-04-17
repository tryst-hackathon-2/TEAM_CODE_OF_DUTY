import { Form, Button } from "react-bootstrap";
import React, { useState, useContext } from "react";

import { addPlace } from "../apis";
import AuthContext from "../contexts/AuthContext";

import ImageDropzone from "./ImageDropzone";

const PlaceForm = ({ onDone }) => {
  const [name, setName] = useState("");
  // description field
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const auth = useContext(AuthContext);

  const onClick = async () => {
    const json = await addPlace({ name, description, image }, auth.token);
    if (json) {
      setName("");
      setImage("");
      setDescription("");
      onDone();
    }
  };

  return (
    <div>
      <h4 className="text-center">Place</h4>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>origin</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter origin"
          value={origin}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>recent</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter recent"
          value={recent}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Image</Form.Label>
        <ImageDropzone value={image} onChange={setImage} />
      </Form.Group>
      <Button variant="standard" block onClick={onClick}>
        Add
      </Button>
    </div>
  );
};

export default PlaceForm;
