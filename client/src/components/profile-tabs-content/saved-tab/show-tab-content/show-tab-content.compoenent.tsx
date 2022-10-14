import React from "react";

type ShowTabContentProps = {
  userSavedShows: any[];
};

const ShowTabContent = ({ userSavedShows }: ShowTabContentProps) => {
  return (
    <div className="d-flex flex-wrap">
      {userSavedShows.map((show) => (
        <div className="card m-2" style={{ width: "18rem" }}>
          <img src={show.images} className="card-img-top" alt={show.title} />
          <div className="card-body">
            <h5 className="card-title">{show.title}</h5>
            <p className="card-text">{show.description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowTabContent;