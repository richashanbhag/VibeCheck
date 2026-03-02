import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const vibes = ["All", "Late Night", "Budget", "Aesthetic", "Casual"];

const VibeFilter = ({ data, setPlaces }) => {
  const handleFilter = (vibe) => {
    if (vibe === "All") {
      setPlaces(data);
    } else {
      const filtered = data.filter((place) => place.vibe.includes(vibe));
      setPlaces(filtered);
    }
  };

  return (
    <ButtonGroup className="mb-4">
      {vibes.map((vibe) => (
        <Button
          key={vibe}
          variant="outline-dark"
          onClick={() => handleFilter(vibe)}
        >
          {vibe}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default VibeFilter;
