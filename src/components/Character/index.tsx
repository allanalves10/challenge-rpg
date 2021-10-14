import { Container, NameBox } from "./styles";
import { CharacterSides } from "../../types/CharacterSides";

type Props = {
    x: number;
    y: number;
    side: CharacterSides;
    name: string;
}

export const Character = ({x, y, name, side} : Props) => {
    const size = 30;
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up: -90,
    }

    return(
        <Container
            left={x * size}
            size={size}
            top={y * size}
            sidePos={sides[side] ?? 0}
        >
            <NameBox>{name}</NameBox>
        </Container>
    );
}