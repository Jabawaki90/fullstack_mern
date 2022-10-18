import React from "react";

import Input from "../../shared/components/FormElements/Input";
import "./NewPlaces.css";

const NewPlaces = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter a valid title"
      ></Input>
    </form>
  );
};

export default NewPlaces;
