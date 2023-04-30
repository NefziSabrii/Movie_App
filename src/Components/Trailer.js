import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { movies } from "../Data/Movies";

function Trailer() {
  const [loading, setLoding] = useState(false);
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === Number(id));
  const navigate = useNavigate();

  return (
    <div>
      {loading ? (
        <Navigate to="/" />
      ) : (
        <>
          <iframe
            width="560"
            height="315"
            src={movie.frameUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <Button variant="info" onClick={() => navigate("/")}>
              Go Back
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Trailer;
