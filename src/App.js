import React, { Component } from "react";
// import logo from './logo.svg';
import ImageCard from "./components/ImageCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import images from "./images.json";

function randomiser(imageArray) {
  for (let i = imageArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
  }
  return imageArray;
}

class App extends Component {
  state = {
    images: images,
    option: "",
    score: 0,
    topScore: 0,
    selected: []
  };

  // function to handle when an image is clicked
  handleOnClick = id => {
    // check to see if the image was clicked before
    if (!this.state.selected.includes(id)) {
      this.setState({ selected: this.state.selected.concat(id) });
      // if not, then we add a point to the score, and add the id to the selected images array
      const newScore = this.state.score + 1;
      this.setState({
        score: newScore,
        // user can continue, and make a nother selection
        option: "Great Choice, choose again!"
      });
      randomiser(images)
      // this checks to see whether the use beaten the current top score
      if (newScore > this.state.topScore) {
        this.setState({ topScore: newScore });
      }
      // this checks to see whether the user has won the game
      if (newScore === 12) {
        this.setState({
          images,
          option: "Congrats! You won!",
          score: 0,
          selected: []
        });
      }
      this.setState({
        images: randomiser(images)
      });
    } else {
      this.setState({
        images,
        option: "You guessed incorrectly!",
        score: 0,
        selected: []
      });
      this.setState({
        images: randomiser(images)
      });
    }
  };

  render() {
    return (
      <div>
        <Wrapper>
          <Nav
            option={this.state.option}
            score={this.state.score}
            topScore={this.state.topScore}
          />
          {this.state.images.map(entry => (
            <ImageCard id={entry.id} image={entry.image} />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
