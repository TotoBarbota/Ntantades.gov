import "bootstrap/dist/css/bootstrap.min.css";
import "./NtantaProfile.css";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const NtantaProfile = () => {
  const authContext = useAuth();
  const [user, setUser] = useState(authContext.currentUser);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    const userRef = collection(db, "users");
    const currentUserRef = doc(userRef, authContext.userID);
    getDoc(currentUserRef).then((docSnap) => {
      const currentUser = docSnap.data();
      setDoc(
        currentUserRef,
        {
          firstName:
            document.getElementById("name").value.split(" ")[0] ||
            currentUser.firstName,
          lastName:
            document.getElementById("name").value.split(" ")[1] ||
            currentUser.lastName,
          age:
            parseInt(document.getElementById("age").value) || currentUser.age,
          gender: document.getElementById("gender").value || currentUser.gender,
          phone_number:
            document.getElementById("phone").value || currentUser.phone_number,
          email: document.getElementById("email").value || currentUser.email,
          professional_description:
            document.querySelector(".description").value ||
            currentUser.professional_description,
        },
        { merge: true }
      )
        .then(() => {
          authContext.setCurrentUser({
            ...authContext.currentUser,
            firstName: document.getElementById("name").value.split(" ")[0],
            lastName: document.getElementById("name").value.split(" ")[1],
            age: parseInt(document.getElementById("age").value),
            gender: document.getElementById("gender").value,
            phone_number: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            professional_description:
              document.querySelector(".description").value,
          });
          setIsEditMode(false);
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <div className="ntanta-profile">
      <div className="container">
        <h2 className="text-center fw-bold">My profile</h2>

        <div className="d-flex justify-content-end">
          <button
            className="btn btn-sm btn-success "
            onClick={isEditMode ? handleSave : handleEdit}
          >
            {isEditMode ? "Save" : "Edit"}
          </button>
        </div>

        <div className="row justify-content-evenly">
          <div className="col-4">
            <div className="profile-picture-placeholder">
              <img
                class="card-img-top"
                style={{ width: "150px", height: "150px" }}
                src="./pictures/avatart.jpg"
                alt="Card image cap"
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
                    defaultValue={user.firstName + " " + user.lastName}
                    disabled={!isEditMode}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age:</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    className="form-control"
                    defaultValue={user.age}
                    disabled={!isEditMode}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender:</label>
                  <select
                    id="gender"
                    name="gender"
                    className="form-control"
                    disabled={!isEditMode}
                  >
                    <option value="male" selected={user.gender === "male"}>
                      Male
                    </option>
                    <option value="female" selected={user.gender === "female"}>
                      Female
                    </option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <div className="col-4">
            <form className="ntanta-profile-form">
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  defaultValue={user.phone_number}
                  disabled={!isEditMode}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  defaultValue={user.email}
                  disabled={!isEditMode}
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
                disabled={!isEditMode}
              />
            </label>
          </div>
        </div>
        <div className="container">
          <textarea
            className="description"
            placeholder="Description"
            defaultValue={user.professional_description}
            rows="10"
            style={{ width: "100%", padding: "10px", borderRadius: "10px" }}
            disabled={!isEditMode}
          />
        </div>
      </div>
    </div>
  );
};

export default NtantaProfile;
