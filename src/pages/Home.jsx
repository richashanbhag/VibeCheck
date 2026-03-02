import React, { useState } from "react";
import placesData from "../data/places.json";

const allVibes = [
  "All",
  "Late Night",
  "Budget",
  "Aesthetic",
  "Casual",
  "Dessert",
  "Study",
  "Campus",
  "Veg",
  "Premium",
  "Fast Food",
  "Family",
  "Chill",
  "Nature",
];

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedVibe, setSelectedVibe] = useState("All");

  const filteredPlaces = placesData.filter((place) => {
    const matchesSearch = place.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesVibe =
      selectedVibe === "All" || place.vibe.includes(selectedVibe);

    return matchesSearch && matchesVibe;
  });

  return (
    <div className="container mt-4">
      <div className="text-center hero-section mb-5">
        <h1 className="hero-title">VibeCheck</h1>
        <p className="hero-subtitle">
          Discover food spots, hangout places, and campus vibes in Manipal —
          tailored to how you feel today.
        </p>
      </div>

      {/* 🔍 Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search places..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🎯 SINGLE Vibe Filter */}
      <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
        {allVibes.map((vibe) => (
          <button
            key={vibe}
            className={`btn btn-sm ${
              selectedVibe === vibe ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => setSelectedVibe(vibe)}
          >
            {vibe}
          </button>
        ))}
      </div>

      {/* 🧱 Cards */}
      <div className="row">
        {filteredPlaces.length === 0 && (
          <p className="text-center text-muted">No places found.</p>
        )}

        {filteredPlaces.map((place) => (
          <div className="col-md-4 mb-4" key={place.id}>
            <div className="card h-100 shadow-sm place-card">
              <img
                src={place.images[0]}
                className="card-img-top"
                alt={place.name}
              />

              <div className="card-body">
                <h5 className="card-title">{place.name}</h5>
                <p className="card-text">{place.description}</p>

                <div>
                  {place.vibe.map((v) => (
                    <span key={v} className="badge bg-secondary me-1 mb-1">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
