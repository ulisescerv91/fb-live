import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const LiveChat = () => {
  const [msg, setMsg] = useState("1,1,3");

  const url =
    "https://streaming-graph.facebook.com/1409306272914086/live_comments?access_token=EAAQSKhob9GgBAIyZB9ZBVee3p17RWTmLZB2ykNfNehmGAtqOwOrfxv6WGChx3ZAWQGxeCMFWMFBtW0ZBZAZB5n8QT9AMQXCHEhuowZCp3tTIZAdMC6pE5wPwM57x4G8wtyQzwrKvv5yDHhgN3tZCZARbFSjbVgxiitxOwX00wzD0KTGOkJnkFKqIR8Qalin1FPQtzmGtD9b9XOZAJp5qX5m4XPYiFNqAlUL3Aq1NEZC9fdu1iJYAzw6HaYPZA5&comment_rate=ten_per_second&=fields=from{name,id},message";

  useEffect(() => {
    // const sse = new EventSource(url);
    // sse.onopen = (e) => console.log("on open", e);
    // sse.onmessage = (e) => {
    //   console.log("Data -> ", e.data);
    //   const data = JSON.parse(e.data);
    //   setMsg(data.message);
    // };
  }, []);

  useEffect(() => {
    const colors = [
      "#f44336",
      "#e91e63",
      "#333333",
      "#9c27b0",
      "#673ab7",
      "#4050b5",
      "#2196f3",
      "#01a8f4",
      "#00bcd4",
      "#009688",
      "#4caf50",
      "#8bc24b",
      "#cddb3a",
      "#ffeb3b",
      "#ffc009",
      "#ff9800",
      "#ff5722",
      "#7a5448",
      "#9e9e9e",
      "#e59a61",
    ];

    const msgSeparado = msg.split(",");

    if (msgSeparado.length === 3) {
      const elm = document.querySelector(
        `#cuadro${msgSeparado[0]}-${msgSeparado[1]}`
      );

      const colorSelected = msgSeparado[2] - 1;
      if (elm) elm.style.backgroundColor = colors[colorSelected];
    }
  }, [msg]);

  const filas = [...Array(30)];

  return (
    <Container>
      <Cuadricula className="item-a">
        {filas.map((fila, j) => {
          return (
            <div className="d-flex position-relative" key={j}>
              <FilasReferencia>{j + 1}</FilasReferencia>
              {[...Array(35)].map((e, i) => (
                <Cuadro fila={j + 1} columna={i + 1} key={i}></Cuadro>
              ))}
            </div>
          );
        })}
      </Cuadricula>

      <Info className="item-b">
        <div className="title">
          <div className="container">
            <p id="text">Tengo el control</p>
            <p id="shadow">
              <span id="glow">Tengo el</span>
              <span id="blink"> control</span>
            </p>
          </div>
        </div>
        <div className="game">Pixel Art</div>
        <div className="comentar">
          <span className="msg">comenta:</span>
          <div className="example">
            <span>2,</span>
            <span>3,</span>
            <span>1</span>
          </div>
        </div>
        <ColorsContainer>
          {[...Array(20)].map((e, i) => (
            <div className="color__item">{i + 1}</div>
          ))}
        </ColorsContainer>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 580px;
  grid-template-rows: auto;
  grid-template-areas: "cuadricula info";

  background: linear-gradient(
    -45deg,
    #44c1f2,
    #49d3f2,
    #36d96f,
    #f2cf66,
    #f25430
  );
  background-size: 400% 400%;
  animation: gradient 30s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .item-a {
    grid-area: cuadricula;
  }
  .item-b {
    background-color: #111;
    grid-area: info;

    .title {
      background-color: #111;
      padding-top: 60px;
      position: relative;

      #text,
      #shadow {
        position: absolute;
        margin-top: 40px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 40px;
        letter-spacing: 3px;
        font-family: "Rubik Burned", cursive;
        color: #fff;
        white-space: nowrap;
      }

      #text {
        color: #333;
      }

      #shadow {
        text-shadow: 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff,
          0 0 35px #228dff, 0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff;
      }

      #glow {
        animation: neon1 linear infinite 2s;
        will-change: opacity;
      }

      #blink {
        animation: blink linear infinite 2s;
      }

      @keyframes neon1 {
        20% {
          opacity: 1;
        }
        80% {
          opacity: 0.6;
        }
      }

      @keyframes blink {
        70% {
          opacity: 1;
        }
        79% {
          opacity: 0;
        }
        81% {
          opacity: 1;
        }
        82% {
          opacity: 0;
        }
        83% {
          opacity: 1;
        }
        92% {
          opacity: 0;
        }
        92.5% {
          opacity: 1;
        }
      }
    }

    .game {
      color: white;
      background-color: #111;
      text-align: center;
      font-size: 45px;
      margin-top: 120px;
      font-family: "Press Start 2P", cursive;
    }

    .comentar {
      padding: 0 30px;
      padding-top: 80px;
      padding-bottom: 20px;
      span {
        color: #d7ffff;
        font-size: 20px;
        display: inline-block;
        font-style: italic;
        font-family: "Acme", sans-serif;
      }

      .example {
        text-align: center;
        border: 5px solid #60ffff;
        margin-top: 20px;
        margin-bottom: 50px;
        padding-top: 20px;
        color: white;
        width: 80%;
        margin-left: 10%;
        border-radius: 5px;
        span {
          letter-spacing: 20px;
          font-size: 60px;
          position: relative;
          &:nth-child(1)::after {
            font-size: 20px;
            letter-spacing: 2px;
            content: "Fila";
            color: #e91e63;
            position: absolute;
            top: -5px;
            left: 0;
          }
          &:nth-child(2)::after {
            font-size: 20px;
            letter-spacing: 1px;
            content: "Columna";
            color: #e91e63;
            position: absolute;
            top: -5px;
            left: -25px;
          }
          &:nth-child(3)::after {
            font-size: 20px;
            letter-spacing: 1px;
            content: "Color";
            color: #e91e63;
            position: absolute;
            top: -5px;
            left: -5px;
          }
        }
      }
    }
  }
`;

const ColorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  .color__item {
    border: 1px solid white;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 100px;

    &:nth-child(1) {
      color: white;
      background-color: #f44336;
    }
    &:nth-child(2) {
      color: white;
      background-color: #e91e63;
    }
    &:nth-child(3) {
      color: white;
      background-color: #333333;
    }
    &:nth-child(4) {
      color: white;
      background-color: #9c27b0;
    }
    &:nth-child(5) {
      color: white;
      background-color: #673ab7;
    }
    &:nth-child(6) {
      color: white;
      background-color: #4050b5;
    }
    &:nth-child(7) {
      color: white;
      background-color: #2196f3;
    }
    &:nth-child(8) {
      color: white;
      background-color: #01a8f4;
    }
    &:nth-child(9) {
      color: white;
      background-color: #00bcd4;
    }
    &:nth-child(10) {
      color: white;
      background-color: #009688;
    }
    &:nth-child(11) {
      color: white;
      background-color: #4caf50;
    }
    &:nth-child(12) {
      background-color: #8bc24b;
    }
    &:nth-child(13) {
      background-color: #cddb3a;
    }
    &:nth-child(14) {
      background-color: #ffeb3b;
    }
    &:nth-child(15) {
      background-color: #ffc009;
    }
    &:nth-child(16) {
      background-color: #ff9800;
    }
    &:nth-child(17) {
      color: white;
      background-color: #ff5722;
    }
    &:nth-child(18) {
      color: white;
      background-color: #7a5448;
    }
    &:nth-child(19) {
      background-color: #9e9e9e;
    }
    &:nth-child(20) {
      color: white;
      background-color: #e59a61;
    }
  }
`;

const Info = styled.div`
  height: 100vh;
`;

const NumeroRef = styled.div`
  font-weight: bold;
  position: absolute;
  top: -25px;
  font-size: 12px;
  font-family: "Acme", sans-serif;
`;
const FilasReferencia = styled.div`
  font-size: 12px;
  position: absolute;
  top: 5px;
  left: -20px;
  font-weight: bold;
  font-family: "Acme", sans-serif;
`;

const Cuadro = ({ fila, columna }) => {
  if (fila === 1)
    return (
      <CuadroContainer id={`cuadro${fila}-${columna}`}>
        <NumeroRef>{columna}</NumeroRef>
      </CuadroContainer>
    );

  return <CuadroContainer id={`cuadro${fila}-${columna}`} />;
};

const CuadroContainer = styled.div`
  border: 1px solid #ddd;
  height: 30px;
  width: 30px;
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #fff;
`;

const Cuadricula = styled.div`
  position: relative;
  margin-left: 100px;
  margin-top: 80px;
`;
