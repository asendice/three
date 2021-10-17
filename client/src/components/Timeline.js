import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Timeline = () => {
  const [firstIndex, setFirstIndex] = useState(0);

  const data = [
    {
      date: "2012 - 2016",
      title: "Department Supervisor",
    },
    {
      date: "2016 - 2018",
      title: "Store Manager",
    },
    {
      date: "2018 - 2019",
      title: "Ebay Business",
    },
    {
      date: "2019",
      title: "Nucamp Web Development Fundamentals Bootcamp",
    },
    {
      date: "2019 - 2020",
      title: "Store Manager",
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
    <div className="timeline-container">
      <BsArrowLeftShort
        className="timeline-arrows cursor"
        onClick={() => onLeftArrowClick()}
        style={{
          opacity: firstIndex === 0 ? 0 : 1,
          cursor: firstIndex === 0 ? "default" : "pointer",
        }}
      />

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
        <BsArrowRightShort
          className="timeline-arrows cursor"
          onClick={() => onRightArrowClick()}
          style={{ left: 0 }}
        />
      ) : null}
    </div>
  );
};

export default Timeline;
