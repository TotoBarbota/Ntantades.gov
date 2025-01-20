import { useEffect, useState } from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

import "./NtantaRatingsPage.css";
import { useAuth } from "../../contexts/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import NtantaRatingsComponent from "../../Components/NtantaRatingsComponent/NtantaRatingsComponent";

function NtantaRatingsPage() {
  const [activeTab, setActiveTab] = useState("Τρέχοντα");
  const authContext = useAuth();
  const [ratings, setRatings] = useState([]);
  const [sortedRatings, setSortedRatings] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");

  const ratingsRef = collection(db, "ratings");

  const getRatings = async () => {
    const snapshot = await getDocs(ratingsRef);
    const ratingsArray = snapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .filter((rating) => rating.ntanta_user_id === authContext.userID);
    setRatings(ratingsArray);
  };

  useEffect(() => {
    getRatings();
    console.log("ratings are ", ratings);
  }, []);

  const useDocumentTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
  useDocumentTitle("Αξιολογήσεις");

  const sortRatings = () => {
    if (sortOrder === "ascending") {
      setSortedRatings([...ratings].sort((a, b) => a.value - b.value));
      setSortOrder("descending");
    } else {
      setSortedRatings([...ratings].sort((a, b) => b.value - a.value));
      setSortOrder("ascending");
    }
  };

  return (
    <div className="applications-with-professionals-page">
      <NavBar />
      <div className="applications-with-professionals-main-container">
        <div className="aitisi-breadcrumb">
          <Breadcrumb />
        </div>
        <h3>Οι Αξιολογήσεις μου</h3>

        <div className="application-cards">
          <button
            style={{ margin: "10px 10px" }}
            onClick={sortRatings}
            className="btn btn-secondary "
          >
            {sortOrder === "ascending" ? "Αύξουσα" : "Φθίνουσα"}
          </button>
          {sortedRatings.length > 0
            ? sortedRatings.map((rating) => (
                <NtantaRatingsComponent data={rating} />
              ))
            : ratings.map((rating) => <NtantaRatingsComponent data={rating} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NtantaRatingsPage;
