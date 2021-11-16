import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";
import Header from './common/Header';
import Footer from './common/Footer';

const Congrats = (props) => {
  let tophistory = useHistory();
  function gotoTop(){
    return tophistory.push("/")
  }

  return(
    <>
      <Container className="p-4 bg orrange">
        <Header />
        <main className="bg-white my-3">
          <Row>
            <Col>
            <Button 
            className="b-kaitou"
            onClick={gotoTop}
            >
            トップに戻る
            </Button>
            </Col>
          </Row>
        </main>
        <Footer />
      </Container>
    </>
  );
}

export default Congrats;