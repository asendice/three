import React, { useState, useEffect } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { BiX } from "react-icons/bi";

const ImageModal = ({ images, open, setOpen }) => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (open) {
      // document.body.style.position = "fixed";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const dismissModal = (e) => {
    if (e.target.id === "image-modal" || e.target.id === "modal-content") {
      setOpen(false);
    } else {
      return null;
    }
  };

  const onRightArrowClick = () => {
    if (imgIndex < images.length - 1) {
      setImgIndex(imgIndex + 1);
    } else if (imgIndex === images.length - 1) {
      setImgIndex(0);
    }
  };
  const onLeftArrowClick = () => {
    if (imgIndex >= 1) {
      setImgIndex(imgIndex - 1);
    } else {
      setImgIndex(images.length - 1);
    }
  };

  if (open) {
    return (
      <div
        id="image-modal"
        className="image-modal"
        onClick={(e) => dismissModal(e)}
      >
        <div className="modal-content">
          <button
            className="close-modal"
            onClick={() => {
              setImgIndex(0);
              setOpen(!open);
            }}
          >
            <BiX />
          </button>
          <div className="image-content">
            <button
              className="slide-btn left"
              onClick={() => onLeftArrowClick()}
            >
              <BsArrowLeftShort />{" "}
            </button>
            {images.map((img, index) => {
              let style =
                index > imgIndex
                  ? "next-item"
                  : index === imgIndex
                  ? "active-item"
                  : "prev-item";
              return (
                <img src={img} key={index} className={`modal-image ${style}`} />
              );
            })}
            <button
              className="slide-btn right"
              onClick={() => onRightArrowClick()}
            >
              <BsArrowRightShort />{" "}
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ImageModal;
