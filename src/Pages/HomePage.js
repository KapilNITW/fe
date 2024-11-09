import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function HomePage() {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    const fetchEstates = async () => {
      try {
        const response = await axios.get(
          "https://be-m062.onrender.com/api/v1/estate/get-estates"
        );
        console.log(response);
        setEstates(response.data.estates);
      } catch (error) {
        console.error("Error fetching estates:", error);
      }
    };
    fetchEstates();
  }, []);

  return (
    <>
      <Header />
        <div className="container" style={{ marginTop: "2rem" }}>
          <div className="row">
            {estates.length > 0 ? (
              estates.map((estate) => (
                <div key={estate._id.$oid} className="col-md-4 mb-4">
                  <div className="card h-100">
                    {estate.image && (
                      <img
                        src={estate.image}
                        className="card-img-top"
                        alt={estate.name}
                      />
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{estate.name}</h5>
                      <p className="card-text">{estate.description}</p>
                      <p>
                        <strong>Address:</strong> {estate.address}
                      </p>
                      <p>
                        <strong>Price:</strong> ${estate.price.toLocaleString()}
                      </p>
                      <p>
                        <strong>Size:</strong> {estate.size}
                      </p>
                      <p>
                        <strong>Rating:</strong> {estate.rating}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No estates available at the moment.</p>
            )}
          </div>
        </div>
      <Footer />
    </>
  );
}

export default HomePage;
