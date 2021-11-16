import React from "react";
import { Col, Row } from 'reactstrap';

function Footer(){
  return(
    <footer>
      <Row
        className="text-center"
      >
        {/* <Col>
          <Link to="/privacy">プライバシーポリシー</Link>
        </Col> */}
        <Col>
          <small>©澤井啓夫／集英社・東映アニメーション</small>
        </Col>
      </Row>

    </footer>
  );
}

export default Footer;