import React, { Component, Fragment } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import Cube from "../../components/Cube";
import { layoutSelector } from "../../store/selectors";
import { setEmojiLayout } from "../../store/actions/actionCreators";
import { getCorrectId } from "../../helpers/getCorrectId";
import { generateInitialArr, shuffle } from "../../helpers/generateNewData";

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeOutId: null,
      firstSelectedItem: null,
      secondSelectedItem: null,
      correctMatches: new Set([])
    };
  }

  compareImgs = () => {
    const { correctMatches } = this.state;
    let { firstSelectedItem, secondSelectedItem } = this.state;
    firstSelectedItem = getCorrectId(firstSelectedItem);
    secondSelectedItem = getCorrectId(secondSelectedItem);

    if (firstSelectedItem === secondSelectedItem) {
      correctMatches.add(firstSelectedItem);
    }

    this.setState({
      correctMatches: new Set(correctMatches),
      timeOutId: null,
      firstSelectedItem: null,
      secondSelectedItem: null
    });
  };

  setDelayTime = id => {
    const { timeOutId } = this.state;

    if (!timeOutId) {
      this.setState({
        secondSelectedItem: id,
        timeOutId: setTimeout(() => {
          this.compareImgs();
        }, 1000)
      });
    }
  };

  handleClick = id => {
    const { firstSelectedItem, correctMatches } = this.state;

    if (firstSelectedItem && id !== firstSelectedItem && !correctMatches.has(getCorrectId(id))) {
      this.setDelayTime(id);
    } else if (!correctMatches.has(getCorrectId(id))) {
      this.setState({
        firstSelectedItem: id
      });
    }
  };

  startNewGame = () => {
    const { setEmojiLayoutActionCreator } = this.props;
    const newLayout = shuffle(generateInitialArr());

    setEmojiLayoutActionCreator(newLayout);
    this.setState({
      correctMatches: new Set([]),
      timeOutId: null,
      firstSelectedItem: null,
      secondSelectedItem: null
    });
  };

  render() {
    const { layout } = this.props;
    const { firstSelectedItem, secondSelectedItem, correctMatches } = this.state;

    return (
      <Fragment>
        <button type="button" className="shuffle-button" onClick={this.startNewGame}>
          New Game
        </button>
        <div className="game-board">
          {layout.size !== correctMatches.size ? (
            layout.map(item => (
              <Cube
                correctMatches={correctMatches}
                item={item}
                key={item.get("id")}
                firstSelectedItem={firstSelectedItem}
                secondSelectedItem={secondSelectedItem}
                handleClick={this.handleClick}
              />
            ))
          ) : (
            <p>Horraaaa !!! You won</p>
          )}
        </div>
      </Fragment>
    );
  }
}

GameBoard.propTypes = {
  layout: PropTypes.object.isRequired,
  setEmojiLayoutActionCreator: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  layout: layoutSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setEmojiLayoutActionCreator: setEmojiLayout
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
