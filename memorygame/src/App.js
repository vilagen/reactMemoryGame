import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Title from "./components/Title";
import Score from "./components/Score";
import CardWrapper from "./components/CardWrapper"
import Wrapper from "./components/Wrapper";


class App extends Component {
state = {
    characters
}

render(){
        return (
            <Wrapper>
            <Title>Memory Game</Title>
            <Score />
            <CardWrapper>
                {this.state.characters.map ( character => {
                    return (
                        <CharacterCard
                            name={character.name}
                            pic={character.pic}
                            altPic={character.altPic} 
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
