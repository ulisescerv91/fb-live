import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const LiveChat = () => {
  const [msg, setMsg] = useState("1,1,rew");

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
      "blue",
      "red",
      "yellow",
      "green",
      "purple",
      "pink",
      "tomato",
      "black",
    ];

    const msgSeparado = msg.split(",");

    if (msgSeparado.length === 3) {
      const elm = document.querySelector(
        `#cuadro${msgSeparado[0]}-${msgSeparado[1]}`
      );

      if (elm) elm.style.backgroundColor = msgSeparado[2];
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
              {[...Array(40)].map((e, i) => (
                <Cuadro fila={j + 1} columna={i + 1} key={i}></Cuadro>
              ))}
            </div>
          );
        })}
      </Cuadricula>

      <Info className="item-b">
        <div className="title">Tengo el control</div>
        <div className="game">Pixel Art</div>
        <div className="comentar">Comentar</div>
        <div className="color">
          {[...Array(20)].map((e, i) => (
            <div className="color__item">{i + 1}</div>
          ))}
        </div>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 500px;
  grid-template-rows: auto;
  grid-template-areas: "cuadricula info";

  .item-a {
    grid-area: cuadricula;
  }
  .item-b {
    grid-area: info;

    .color {
      display: flex;
      flex-wrap: wrap;
      &__item {
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
          background-color: #333;
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
          background-color: #607d8a;
        }
      }
    }
  }
`;

const Info = styled.div`
  border: 1px solid red;
  height: 100vh;
`;

const NumeroRef = styled.div`
  position: absolute;
  top: -25px;
  font-size: 12px;
`;
const FilasReferencia = styled.div`
  font-size: 12px;
  position: absolute;
  top: 5px;
  left: -20px;
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
  border: 1px solid gray;
  height: 30px;
  width: 30px;
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Cuadricula = styled.div`
  position: relative;
  margin-left: 50px;
  margin-top: 80px;
`;

//https://developers.facebook.com/tools/explorer/1145871942808680/?method=GET&path=132412320551814%2Fpicture&version=v14.0

//https://developers.facebook.com/docs/graph-api/guides
