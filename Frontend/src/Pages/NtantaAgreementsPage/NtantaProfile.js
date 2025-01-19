import "bootstrap/dist/css/bootstrap.min.css";
import "./NtantaProfile.css";

const NtantaProfile = () => {
  return (
    <div className="ntanta-profile">
      <div className="container">
        <h2 className="text-center fw-bold">My profile</h2>

        <div className="d-flex justify-content-end">
          <button className="btn btn-sm btn-success ">Edit</button>
        </div>

        <div className="row justify-content-evenly">
          <div className="col-4">
            <div className="profile-picture-placeholder">
              <img
                src="/public/pictures/avatart.jpg"
                alt="profile picture"
                className="profile-picture"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="">
              <form className="ntanta-profile-form">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age:</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender:</label>
                  <select id="gender" name="gender" className="form-control">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <div className="col-4">
            <form className="ntanta-profile-form">
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="container">
          <div className="cv-placeholder">
            <p className="cv-label">CV:</p>
            <label htmlFor="cv" className="cv-input">
              <input
                type="file"
                id="cv"
                name="cv"
                onChange={(e) => {
                  const fileName = e.target.files[0].name;
                  const fileLabel = document.querySelector(".cv-filename");
                  fileLabel.textContent = fileName;
                }}
              />
            </label>
          </div>
        </div>
        <div className="container">
          <textarea
            className="description"
            placeholder="Description"
            rows="10"
            style={{ width: "100%", padding: "10px", borderRadius: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NtantaProfile;
