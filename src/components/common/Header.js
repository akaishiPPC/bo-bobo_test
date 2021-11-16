import React from "react";
import {
  useHistory,
  useLocation,
} from 'react-router-dom';
import Logo from "./Logo";
import Image from '../../images/BB_celebration.png';

function Header(props){
  const judgement = ["メロン子","5億","ビビンバ","6人"]
  const location = useLocation(); 
  const history = useHistory(); 
  
  return(
    <header className="bg-white">
      {(() => {
        if (location.pathname === '/') {
          return (
            <div className="inner-header yellow">
              <h1><Logo /></h1>
              <h2>ボーボボクイズ</h2>
              <p className="subTitle">全問正解を目指そう！</p>
              <p className="text-danger">掲載されている全ての画像の無断での<br className="sp_style" />使用・転載を固くお断りいたします。</p>
            </div>
          )
        } else if(location.pathname === '/congrats') {
          return (
            <div className="inner-header orrange">
              <h1><Logo /></h1>
              <h2>全問正解！<br />おめでとう！</h2>
              <p className="text-danger">掲載されている全ての画像の無断での<br className="sp_style" />使用・転載を固くお断りいたします。</p>
              <div className="text-center">
                <img src={Image} className="congrats-image" alt="全問正解おめでとう！" />
              </div>
            </div>
          )
        }else if(location.pathname === '/again') {
          
          const stateArray = (history.location.state.select)
          const selectAnswers = stateArray.map(selectAnswer => selectAnswer)

          return (
            <div className="inner-header blue">
              <h1><Logo /></h1>
              <h2>残念！</h2>
              <p className="unCollect text-danger">
              {(selectAnswers[0] !== judgement[0]) ? "第1問が不正解です。" : ""}
              </p>
              <p className="unCollect text-danger">
              {(selectAnswers[1] !== judgement[1]) ? "第2問が不正解です。" : ""}
              </p>
              <p className="unCollect text-danger">
              {(selectAnswers[2] !== judgement[2]) ? "第3問が不正解です。" : ""}
              </p>
              <p className="unCollect text-danger">
              {(selectAnswers[3] !== judgement[3]) ? "第4問が不正解です。" : ""}
              </p>
              <p className="subTitle">再度挑戦してみよう！</p>
            </div>
          )
        }else {
          return(
            <header className="bg-white">
              <div className="inner-header gray">
                <h1><Logo /></h1>
              </div>
            </header>
          );
        }
      })()}
    </header>
  );
}

export default Header;