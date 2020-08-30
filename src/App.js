import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./App.css";

const App = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [catImage, setCatImage] = useState("");
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    fetch("/api/getCat")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCatImage(data.file);
      });

    fetch("/api/getFact")
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact);
      });
  }, []);

  const newCat = () => {
    fetch("/api/getCat")
      .then((res) => res.json())
      .then((data) => {
        setCatImage(data.file);
      });
    fetch("/api/getFact")
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact);
      });
  };

  return (
    <div className="App">
  
      <Container>
        <Row>
          <Col>
          <h1 className="text-center">Cat facts</h1> 
            <img className="cat-image" src={catImage} />
            <h3>{catFact}</h3>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Button
              className="mt-3"
              onClick={newCat}
              variant="primary"
              size="lg"
            >
              New Cat
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
