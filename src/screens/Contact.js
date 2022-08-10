import React from "react";

export const Contact = () => {
  return (
    <div className="container mb-4">
      <h3 className="text-center text-uppercase py-4 mt-4">Contact</h3>
      <div className=" fst-italic pt-1">
        <form>
          <div className="mb-3">
            <label for="name" className="form-label">
              Fullname
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-4">
            <label for="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 pt-4 pb-3">
            <select class="form-select" aria-label="Default select example">
              <option selected>cuando podemos contactarte</option>
              <option value="M">Mañana</option>
              <option value="T">Tarde</option>
              <option value="N">Noche</option>
            </select>
          </div>
          <div className="mb-4 pt-4 pb-3">
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Comments</label>
            </div>
          </div>
          <div className="pb-4 mt-4 d-grid">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
