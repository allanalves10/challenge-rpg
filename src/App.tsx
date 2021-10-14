import { useEffect, useState } from "react";
import { Character } from "./components/Character";
import { useCharacter } from "./hooks/useCharacter";
import { Container, MapGame } from "./styles";

const App = () => {
  const [nameCharacter, setNameCharacter] = useState('Miguel');
  const {x, y, changeName, moveLeft, moveRight, moveDown, moveUp, name, side} = useCharacter(nameCharacter);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        moveLeft();
      break;
      case 'KeyD':
      case 'ArrowRight':
        moveRight();
      break;
      case 'KeyS':
      case 'ArrowDown':
        moveDown();
      break;
      case 'KeyW':
      case 'ArrowUp':
        moveUp();
      break;
    }
  }

  const updateName = (inputName: string) => {
    setNameCharacter(inputName);
    changeName(inputName);
  }

  return(
    <Container>
      <MapGame>
        <Character x={x} y={y} side={side} name={name} />
      </MapGame>
      <div>
        <h3>Escolha o nome:</h3>
        <input value={nameCharacter} onChange={(e) => updateName(e.target.value)} />
      </div>  
    </Container>
  );
}

export default App;