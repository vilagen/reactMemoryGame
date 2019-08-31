import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Title from "./components/Title";
import Score from "./components/Score";
import CardWrapper from "./components/CardWrapper"
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";



class App extends Component {
state = {
    characters,
    wins: 0,
    matches: 0,
    charArray: []
 }

    checkArray = name => {

        if(!this.state.charArray.includes(name)) {
            this.addToArray(name);
            console.log(characters);
        } 
        else {
            this.gameOver()
        }
    }

    addToArray = name => {
        this.state.charArray.push(name);
        this.setState( { matches: this.state.matches + 1 } );
        console.log(this.state.charArray);

        if(this.state.matches === 11) {
            alert("You Win");
            this.setState( {wins: this.state.wins + 1 } );
            this.setState( {matches: 0});
            this.setState( {charArray: []});
        }
    }

    gameOver = () => {
        alert("You Lose!");
        this.setState( { matches: 0})
        this.setState( { charArray: []});
    }

        render(){
                return (
                    <Wrapper>
                    <Title>Memory Game</Title>
                    <Score 
                        wins={this.state.wins}
                        matches={this.state.matches}
                        />
                    <CardWrapper>
                        {this.state.characters.map ( character => {
                            return (
                                <CharacterCard
                                    key={character.id}
                                    name={character.name}
                                    pic={character.pic}
                                    altPic={character.altPic}
                                    checkArray={this.checkArray} 
                                    />
                                )   
                            } 
                        )}
                    </CardWrapper>
                </Wrapper>
                )
            }
        }

export default App;


