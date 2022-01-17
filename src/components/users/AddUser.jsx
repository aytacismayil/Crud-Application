import React from "react";

const AddUser = () => {
  return (
    <div>
      <div className="container">
        <h1 className="mt-4 mb-3">Add User</h1>
        <form action="">
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Enter name"
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              UserName
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter username"
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter email"
            />
          </div>
          <button className="btn btn-primary">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
