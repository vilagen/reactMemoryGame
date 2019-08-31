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

    addToArray = name => {
        this.state.charArray.push(name)
        console.log(this.state.charArray)
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
                                    addToArray={this.addToArray} 
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


