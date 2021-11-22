import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Timeline = () => {
  const [firstIndex, setFirstIndex] = useState(0);

  const data = [
    {
      date: "2012 - 2016",
      title: "Department Supervisor for The Home Depot",
    },
    {
      date: "2016 - 2018",
      title: "Store Manager for Sprint",
    },
    {
      date: "2018 - 2019",
      title: "Created a Re-Sell Ebay Business",
    },
    {
      date: "2019",
      title: "Nucamp Web Development Fundamentals Bootcamp",
    },
    {
      date: "2019 - 2020",
      title: "Store Manager at Spectrum",
    },
    {
      date: "2020",
      title: "Nucamp Front End and Mobile Development Bootcamp",
    },
    {
      date: "2021",
      title:
        "Looking for work as Front-End Developer, coding and making projects everyday",
    },
  ];

  const onRightArrowClick = () => {
    if (firstIndex <= 4) {
      setFirstIndex(firstIndex + 1);
    }
  };
  const onLeftArrowClick = () => {
    if (firstIndex >= 1) setFirstIndex(firstIndex - 1);
  };

  return (
    <div className="timeline">
      <p
        className="section-title"
        style={{ fontSize: "1.4rem", marginTop: "20px" }}
      >
        Work Exp/Coding Journey
      </p>
      <div className="timeline-container">
        {firstIndex > 0 ? (
          <button className="timeline-arrows" onClick={() => onLeftArrowClick()}>
            <BsArrowLeftShort  />
          </button>
        ) : (
          <div></div>
        )}
        {data.map((item, index) => {
          let style =
            index > firstIndex + 1
              ? "nextItem"
              : index === firstIndex
              ? "activeItem"
              : index === firstIndex + 1
              ? "secondActiveItem"
              : "prevItem";
          return (
            <div key={index} className={`timeline-item ${style}`}>
              <p className="section-title" style={{ fontSize: "1.4rem" }}>
                {item.date}
              </p>
              <p>{item.title}</p>
            </div>
          );
        })}
        {firstIndex <= 4 ? (
          <button className="timeline-arrows" onClick={() => onRightArrowClick()}>
            <BsArrowRightShort  />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Timeline;
