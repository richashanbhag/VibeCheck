import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ImageGallery from "./ImageGallery";
import CheckInModal from "./CheckInModal";

const SpotCard = ({ place }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card>
        <ImageGallery images={place.images} />
        <Card.Body>
          <Card.Title>{place.name}</Card.Title>
          <Card.Text>{place.description}</Card.Text>

          {place.vibe.map((v) => (
            <span key={v} className="badge bg-secondary me-1">
              {v}
            </span>
          ))}

          <div className="mt-3">
            <Button size="sm" onClick={() => setShow(true)}>
              Check In
            </Button>
          </div>
        </Card.Body>
      </Card>

      <CheckInModal show={show} handleClose={() => setShow(false)} />
    </>
  );
};

export default SpotCard;
