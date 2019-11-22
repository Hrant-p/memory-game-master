import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { getCorrectId } from "../../helpers/getCorrectId";

const Cube = ({ item, firstSelectedItem, secondSelectedItem, handleClick, correctMatches }) => {
  const id = item.get("id");
  const imgUrl = item.get("img");
  let isFlipped = "";
  const handleCardClick = () => {
    handleClick(id);
  };

  if (id === firstSelectedItem || id === secondSelectedItem || correctMatches.has(getCorrectId(id))) {
    isFlipped = "is-flipped";
  }

  return (
    <div className="cube">
      <div className={`card ${isFlipped}`}>
        <div role="button" tabIndex={0} className="card-face card-face-front" onClick={handleCardClick} />
        <div role="button" tabIndex={0} className="card-face card-face-back" onClick={handleCardClick} style={{ backgroundImage: imgUrl }} />
      </div>
    </div>
  );
};

Cube.propTypes = {
  item: PropTypes.object.isRequired,
  correctMatches: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  firstSelectedItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  secondSelectedItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

Cube.defaultProps = {
  firstSelectedItem: null,
  secondSelectedItem: null
};

export default Cube;
