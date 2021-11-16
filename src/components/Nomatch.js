import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";
import Footer from './common/Footer';

const Nomatch = (props) => {
  let tophistory = useHistory();
  function gotoTop(){
    return tophistory.push("/")
  }
  return(
    <>
      <Container className="p-4 bg gray">

        <main className="bg-white my-3">
          <div className="mb-4">
            <h3 className="ttlNum mb-3">404</h3>
            <Row
            >
              <Col>
              <h4 className="text-center mb-4">該当するページがありません</h4>
              <Button 
              className="b-kaitou"
              onClick={gotoTop}
              >
              トップに戻る
              </Button>

              </Col>

            </Row>
          </div>
        </main>

        <Footer />
      </Container>
    </>
  );
}

export default Nomatch;