import React from "react";
import "../../App.css"
const CategoryForm = ({ handleSubmit, name, setName }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group cate-create-form">
      <label>Name</label>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setName(e.target.value)}
        value={name}
        autoFocus
        required
      />
      <br />
      <button className="btn btn-outline-primary">Save</button>
    </div>
  </form>
);

export default CategoryForm;
