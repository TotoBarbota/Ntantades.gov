import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Button } from "primereact/button";
import { useLocation, useNavigate } from "react-router-dom";

import "./ProfessionalsList.css";
import MeetingModal from "../MeetingModal/MeetingModal";

const ProfessionalsList = ({ users }) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("users are ", users);
  const filteredUsers = Array.isArray(users)
    ? users.map((user) => ({
        id: user.id,
        name: user.firstName + " " + user.lastName,
        age: user.age,
        num_of_experience: user.num_of_experience,
        gender: user.gender,
        city: user.city,
        professional_description: user.professional_description,
        region: user.region,
        hoursPerWeek: user.hoursPerWeek,
      }))
    : [];
  console.log("filtered users are ", filteredUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpenModal = (user) => {
    console.log("user is ", user);
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <div className="professionals-list">
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user, index) => (
          <div className="professional" key={index}>
            <div className="left-items">
              <div className="first-row">
                <FaUserCircle />
                <h3
                  onClick={() => {
                    console.log("user isssss ", user);
                    navigate(`${user.id}`, { state: { user } });
                  }}
                >
                  {user.name}
                </h3>
                <p>Ηλικία: {user.age}</p>
              </div>
              <div className="second-row">
                <div className="left-itms">
                  <p>Εμπειρία: {user.num_of_experience}</p>
                  <p>Φύλο: {user.gender}</p>
                  <p>Ώρες την εβδομάδα: ~{user.hoursPerWeek}</p>
                </div>
                <div className="right-itms">
                  <p>Περιγραφή: {user.professional_description}</p>
                </div>
              </div>
            </div>
            <div className="right-items">
              <p>Δήμος: {user.region}</p>
              <Button
                label="Κλεισε ραντεβού"
                onClick={() => handleOpenModal(user)}
              />
            </div>
          </div>
        ))
      ) : (
        <p>No professionals match the selected filters.</p>
      )}
      <MeetingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        returnUrl={location.pathname}
        selectedUser={selectedUser}
      />
    </div>
  );
};

export default ProfessionalsList;
