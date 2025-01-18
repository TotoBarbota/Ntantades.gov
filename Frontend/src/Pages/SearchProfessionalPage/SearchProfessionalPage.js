import { useEffect, useState } from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

import "./SearchProfessionalPage.css";
import Filters from "../../Components/Filters/Filters";
import ProfessionalsList from "../../Components/ProfessionalsList/ProfessionalsList";
import { useAuth } from "../../contexts/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

function SearchProfessionalPage() {
  const authContext = useAuth();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const dbUsers = collection(db, "users");
    const snapshot = await getDocs(dbUsers);
    const usersArray = snapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .filter((user) => user.isNtanta === true);
    setUsers(usersArray);
    console.log("users are ", usersArray);
  };

  useEffect(() => {
    fetchUsers().catch((error) => console.log(error));
  }, []);

  // Initialize filters with default structure
  const [filters, setFilters] = useState({
    ageGroup: [],
    num_of_experience: [],
    minHours: null,
    maxHours: null,
    gender: [],
    city: [], // Initialize as an empty array
  });

  useEffect(() => {
    console.log("filters are ", filters);
  }, [filters]);
  console.log("filters are ", filters);

  const filterUsers = (users, filters) => {
    if (
      filters.ageGroup.length === 0 &&
      filters.num_of_experience.length === 0 &&
      filters.gender.length === 0 &&
      filters.city.length === 0
    ) {
      return users.filter((user) => user.id !== authContext.userID);
    }

    return users.filter((user) => {
      const { age, num_of_experience, hoursPerWeek, gender, city } = user;

      const isAgeValid =
        filters.ageGroup.length === 0 ||
        (filters.ageGroup !== undefined &&
          filters.ageGroup.length > 0 &&
          filters.ageGroup.some(
            (ageRange) => age >= ageRange[0] && age <= ageRange[1]
          ));

      const isExperienceValid =
        filters.experience === undefined ||
        filters.experience.length === 0 ||
        filters.experience.some(
          (experienceRange) =>
            num_of_experience >= experienceRange[0] &&
            num_of_experience <= experienceRange[1]
        );

      const isHoursValid =
        filters.minHours === null ||
        filters.maxHours === null ||
        (hoursPerWeek >= filters.minHours && hoursPerWeek <= filters.maxHours);

      const isGenderValid =
        filters.gender === undefined ||
        filters.gender.length === 0 ||
        filters.gender.includes(gender);

      const isCityValid =
        filters.city === undefined ||
        filters.city.length === 0 ||
        filters.city.includes(city);

      return (
        isAgeValid &&
        isExperienceValid &&
        isHoursValid &&
        isGenderValid &&
        isCityValid &&
        user.id !== authContext.userID
      );
    });
  };

  const filteredUsers = filterUsers(users, filters);

  console.log("filtered users are ", filterUsers(users, filters));

  const useDocumentTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
  useDocumentTitle("Αναζήτηση επαγγελματία");

  return (
    <div className="search-professional">
      <NavBar />
      <div className="main-text">
        <div className="filters">
          <Filters filters={filters} setFilters={setFilters} />
        </div>
        <div className="right-section">
          <div className="search-professional-breadcrumb">
            {" "}
            <Breadcrumb />{" "}
          </div>
          <ProfessionalsList users={filteredUsers} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchProfessionalPage;
