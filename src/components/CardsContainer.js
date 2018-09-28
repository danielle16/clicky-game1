import React, { Component } from "react";
import Card from "./../components/cards/Card";
import Wrapper from "./Wrapper/Wrapper";
import Score from "./Score/Score";
import characters from "./../characters.json";


class CardsContainer extends Component {
    state = {
        characters,
        score: 0,
        topScore: 0,
        clickedImage: [],
        youWin: "",
        youLose: ""
    };


    randomizeCharacters = event => {
        const currentImage = event.target.alt;
        const ImageAlreadyClicked =
          this.state.clickedImage.indexOf(currentImage) > -1;
    
        if (ImageAlreadyClicked) {
          this.setState({
            characters: this.state.characters.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedImage: [],
            score: 0,
            youLose: this.state.youLose = "You Lose",
            topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore
          });
    
        } else {
          this.setState(
            {
              characters: this.state.characters.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedImage: this.state.clickedImage.concat(
                currentImage
              ),
              score: this.state.score + 1
            },
          
            () => {
              if (this.state.score === 12) {
                this.setState({
                  characters: this.state.characters.sort(function(a, b) {
                    return 0.5 - Math.random();
                  }),
                  clickedImage: [],
                  score: 0,
                  youWin: this.state.youWin = "Yay, you won!",
                  topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore
                });
              }
            }
          );
        }
      };
    render() {
        return (
            <Score>
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Game of Thrones</h1>
              <p className="lead">Score: {this.state.score} | Top Score: {this.state.topScore}</p>
                <p>{this.state.youLose}</p>
                <p>{this.state.youLose = ""}</p>
                <p>{this.state.youWin}</p>
                <p>{this.state.youWin = ""}</p>
            </div>
          </div>
            <Wrapper>  
                {this.state.characters.map(character => (
                    <Card
                        randomizeCharacters={this.randomizeCharacters}
                        id={character.id}
                        key={character.id}
                        name={character.name}
                        image={character.image}
                    />
                ))}
            </Wrapper>
            </Score>
        )
    }
}
export default CardsContainer;
