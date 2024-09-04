
// Importing components of react-bootstrap
import { Container, Image } from "react-bootstrap";
import nbaLogo from "../assets/nba-logo.png";

const Header = () => {
    return(
        <Container>
            {/* In terms of logo, it is better to use px, but for the rest is better to use some responsive measurements like rem,... */}
            <Image src={nbaLogo} width="200px" />
            <h1 className="my-2 font-monospace display-4 fw-bold">NBA Legends</h1>
        </Container>
    )
}

export default Header;