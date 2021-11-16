import React, {useState} from 'react';
import { Col, Container, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Header from './common/Header';
import Footer from './common/Footer';
import { useHistory } from "react-router-dom";
import boboicon from '../images/icon_bomb.png';
import A1img from '../images/A1.png';
import A2img from '../images/A2.png';
import A3img from '../images/A3.png';
import A4img from '../images/A4.png';

const data = [
  {
    name: "第1問",
    question: "突然現れた胃液ガールズ！レモンプリンセス、イチゴプリンセス、もう一人は？",
    source: "※出典(コミックス第7巻：奥義71／アニメ第28話より)",
    answer: [
      { name: "メロンプリンセス" },
      { name: "Ms.メロン" },
      { name: "メロン子" }
    ]
  },
  {
    name: "第2問",
    question: "ダイナマイト3兄弟にハジケの勝負を挑んだボーボボ！初めての株でボーボボが投資した金額はいくら？",
    source: "※出典(コミックス第１巻：奥義３／アニメ第3話より)",
    answer: [
      { name: "5万" },
      { name: "5億" },
      { name: "5兆" }
    ]
  },
  {
    name: "第3問",
    question: "ボーボボが校庭でクマと練習していたのは「プルコギ」ですが、次のテストは何でしょうか？",
    source: "※出典(アニメ第4話より)",
    answer: [
      { name: "ビビンバ" },
      { name: "レーメン" },
      { name: "クッパ" }
    ]
  },
  {
    name: "第4問",
    question: "突然現れた軍艦5人衆！全部で何人いる？",
    source: "※出典(コミックス第4巻：奥義39／アニメ第18話より)",
    answer: [
      { name: "5人" },
      { name: "6人" },
      { name: "32人" }
    ]
  }
]

const Home = (props) => {

  const [radio1, setRadio1] = useState("メロンプリンセス")
  const [radio2, setRadio2] = useState("5万")
  const [radio3, setRadio3] = useState("ビビンバ")
  const [radio4, setRadio4] = useState("5人")
  const judgement = ["メロン子","5億","ビビンバ","6人"]
  const matome = [radio1, radio2, radio3, radio4]
  // console.log(props.judgement)

  let history = useHistory();
  function selectCheck(){
    if(radio1 === judgement[0] && radio2 === judgement[1] && radio3 === judgement[2] && radio4 === judgement[3]){
      history.push("/congrats")
    }else{
      history.push("/again", { select: matome })
    }
  }

  return(
    <>
      <Container className="p-4 bg yellow">
        <Header />

        <main className="bg-white my-3">
          <Form>

            {/* 第一問 */}
            <div className="mb-4">
              <h3 className="ttlNum mb-3"><img src={boboicon} className="Bobo-icon" alt="icon" />{data[0].name}</h3>
              <Row
                sm="2"
                xs="1"
              >
                <Col>
                  <FormGroup tag="fieldset" className="q-set">
                    <legend>
                      <p>{data[0].question}</p>
                      <p className="t-normal">{data[0].source}</p>
                    </legend>
                    <FormGroup>
                      <Input
                        type={'radio'}
                        checked={radio1 === data[0].answer[0].name}
                        value={data[0].answer[0].name}
                        onChange={(e1)=>{ setRadio1(e1.target.value) }}
                        name="radioGroup1"
                      />
                      {' '}
                      <Label>
                      {data[0].answer[0].name}
                      </Label>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type={'radio'}
                        checked={radio1 === data[0].answer[1].name}
                        value={data[0].answer[1].name}
                        onChange={(e1)=>{ setRadio1(e1.target.value) }}
                        name="radioGroup1"
                      />
                      {' '}
                      <Label>
                      {data[0].answer[1].name}
                      </Label>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type={'radio'}
                        checked={radio1 === data[0].answer[2].name}
                        value={data[0].answer[2].name}
                        onChange={(e1)=>{ setRadio1(e1.target.value) }}
                        name="radioGroup1"
                      />
                      {' '}
                      <Label>
                      {data[0].answer[2].name}
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </Col>
                <Col className="t-right">
                  <img src={A1img} className="qimage" alt="" />
                </Col>
              </Row>
            </div>

            {/* 第二問 */}
            <div className="mb-4">
              <h3 className="ttlNum mb-3"><img src={boboicon} className="Bobo-icon" alt="icon" />{data[1].name}</h3>
              <Row
                sm="2"
                xs="1"
              >
                <Col>
                  <FormGroup tag="fieldset" className="q-set">
                    <legend>
                      <p>{data[1].question}</p>
                      <p className="t-normal">{data[1].source}</p>
                    </legend>
                    <FormGroup>
                      <Input
                        type={'radio'}
                        checked={radio2 === data[1].answer[0].name}
                        value={data[1].answer[0].name}
                        onChange={(e2)=>{ setRadio2(e2.target.value) }}
                        name="radioGroup2"
                      />
                      {' '}
                      <Label>
                      {data[1].answer[0].name}
                      </Label>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type={'radio'}
                        checked={radio2 === data[1].answer[1].name}
                        value={data[1].answer[1].name}
                        onChange={(e2)=>{ setRadio2(e2.target.value) }}
                        name="radioGroup2"
                      />
                      {' '}
                      <Label>
                      {data[1].answer[1].name}
                      </Label>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type={'radio'}
                        checked={radio2 === data[1].answer[2].name}
                        value={data[1].answer[2].name}
                        onChange={(e2)=>{ setRadio2(e2.target.value) }}
                        name="radioGroup2"
                      />
                      {' '}
                      <Label>
                      {data[1].answer[2].name}
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </Col>
                <Col className="t-right">
                  <img src={A2img} className="qimage" alt="" />
                </Col>
              </Row>
            </div>

            {/* 第三問 */}
            <div className="mb-4">
              <h3 className="ttlNum mb-3"><img src={boboicon} className="Bobo-icon" alt="icon" />{data[2].name}</h3>
              <Row
                sm="2"
                xs="1"
              >
                <Col>
                  <FormGroup tag="fieldset" className="q-set">
                    <legend>
                      <p>{data[2].question}</p>
                      <p className="t-normal">{data[2].source}</p>
                    </legend>
                    <FormGroup>
                      <Input
                        type={'radio'}
                        checked={radio3 === data[2].answer[0].name}
                        value={data[2].answer[0].name}
                        onChange={(e3)=>{ setRadio3(e3.target.value) }}
                        name="radioGroup3"
                      />
                      {' '}
                      <Label>
                      {data[2].answer[0].name}
                      </Label>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type={'radio'}
                        checked={radio3 === data[2].answer[1].name}
                        value={data[2].answer[1].name}
                        onChange={(e3)=>{ setRadio3(e3.target.value) }}
                        name="radioGroup3"
                      />
                      {' '}
                      <Label>
                      {data[2].answer[1].name}
                      </Label>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type={'radio'}
                        checked={radio3 === data[2].answer[2].name}
                        value={data[2].answer[2].name}
                        onChange={(e3)=>{ setRadio3(e3.target.value) }}
                        name="radioGroup3"
                      />
                      {' '}
                      <Label>
                      {data[2].answer[2].name}
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </Col>
                <Col className="t-right">
                  <img src={A3img} className="qimage" alt="" />
                </Col>
              </Row>
            </div>

            {/* 第四問 */}
            <div className="mb-4">
              <h3 className="ttlNum mb-3"><img src={boboicon} className="Bobo-icon" alt="icon" />{data[3].name}</h3>
              <Row
                sm="2"
                xs="1"
              >
                <Col>
                  <FormGroup tag="fieldset" className="q-set">
                    <legend>
                      <p>{data[3].question}</p>
                      <p className="t-normal">{data[3].source}</p>
                    </legend>
                    <FormGroup>
                      <Input
                        type={'radio'}
                        checked={radio4 === data[3].answer[0].name}
                        value={data[3].answer[0].name}
                        onChange={(e4)=>{ setRadio4(e4.target.value) }}
                        name="radioGroup4"
                      />
                      {' '}
                      <Label>
                      {data[3].answer[0].name}
                      </Label>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type={'radio'}
                        checked={radio4 === data[3].answer[1].name}
                        value={data[3].answer[1].name}
                        onChange={(e4)=>{ setRadio4(e4.target.value) }}
                        name="radioGroup4"
                      />
                      {' '}
                      <Label>
                      {data[3].answer[1].name}
                      </Label>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type={'radio'}
                        checked={radio4 === data[3].answer[2].name}
                        value={data[3].answer[2].name}
                        onChange={(e4)=>{ setRadio4(e4.target.value) }}
                        name="radioGroup4"
                      />
                      {' '}
                      <Label>
                      {data[3].answer[2].name}
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </Col>
                <Col className="t-right">
                  <img src={A4img} className="qimage" alt="" />
                </Col>
              </Row>
            </div>

            <Button 
            className="b-kaitou"
            onClick={selectCheck}
            >
            回答する
            </Button>

          </Form>
        </main>

        <Footer />
      </Container>
    </>
  );
}

export default Home;