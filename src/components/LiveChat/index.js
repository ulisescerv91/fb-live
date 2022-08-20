import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const LiveChat = () => {
  const [msg, setMsg] = useState("");

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
    if (msg !== "") {
      const min = Math.ceil(1);
      const max = Math.floor(15);
      const number = Math.floor(Math.random() * (max - min) + min);

      const minL = Math.ceil(97);
      const maxL = Math.floor(114);
      const letter = Math.floor(Math.random() * (maxL - minL) + minL);
      const letra = String.fromCharCode(letter);

      const elm = document.querySelector(`#${letra + number}`);

      const minColor = Math.ceil(1);
      const maxColor = Math.floor(8);
      const colorIndex = Math.floor(
        Math.random() * (maxColor - minColor) + minColor
      );

      elm.style.backgroundColor = colors[colorIndex];
    }
  }, [msg]);

  const letras = [];
  for (let i = 97; i < 115; i++) {
    letras.push(String.fromCharCode(i));
  }

  return (
    <div className="App">
      <div>
        <b>{msg}</b>
      </div>

      <Cuadricula>
        {letras.map((letra, i) => {
          return (
            <div className="d-flex position-relative" key={i}>
              <LetraReferencia>{letra}</LetraReferencia>
              {[...Array(15)].map((e, i) => (
                <Cuadro letter={letra} number={i + 1} key={i}></Cuadro>
              ))}
            </div>
          );
        })}
      </Cuadricula>
    </div>
  );
};

const NumeroRef = styled.div`
  position: absolute;
  top: -25px;
`;
const LetraReferencia = styled.div`
  position: absolute;
  top: 2px;
  left: -20px;
`;

const Cuadro = ({ letter, number }) => {
  const isLetterA = letter === "a";
  if (isLetterA)
    return (
      <CuadroContainer id={`${letter + number}`}>
        <NumeroRef>{number}</NumeroRef>
      </CuadroContainer>
    );

  return <CuadroContainer id={`${letter + number}`} />;
};

const CuadroContainer = styled.div`
  border: 1px solid black;
  height: 40px;
  width: calc(600px / 15);
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Cuadricula = styled.div`
  width: 600px;
  margin-left: 100px;
  margin-top: 80px;
`;

//https://developers.facebook.com/tools/explorer/1145871942808680/?method=GET&path=132412320551814%2Fpicture&version=v14.0

//https://developers.facebook.com/docs/graph-api/guides
