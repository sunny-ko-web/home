import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom'

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        <div>
          <Link to="/drawing">
              <button
                className="btn btn-outline-light border-dark btn-lg text-dark">
                  Check this out
              </button>
          </Link>
        </div>
        <p>
          <br></br>
          <small className="text-muted">
            I know this is not physical and you might not like it as much. But I think this is really cool and does not die like flowers. Also, too bad you have a boyfried in CS hahahahahahahaha.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
