import React, { useEffect, useState } from "react";

export const LiveChat = () => {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    const sse = new EventSource(
      "https://streaming-graph.facebook.com/548944877017816/live_comments?access_token=EAAQSKhob9GgBAMyWZAY82CQcSSgQpJ4ikpMWm1OwQlO5HNYJDUxkcTROPltoz9vMWKmMCXNcZB43DlooHZCvXoyjJbeVJDRS7ENsEeYnKzQPYTRNLcCw8psw6ZAzczICY4pjSUz3FRG0pzGxZBdv2IH3S46ucQDJVeG3dIZAX5zaPRbqOnZAkzuv0hoNvGDtezJpJosMZCnArQZDZD&comment_rate=ten_per_second&=fields=from{name,id},message"
    );
    sse.onopen = (e) => console.log("on open", e);

    sse.onmessage = (e) => {
      console.log("data", e.data);
      const data = JSON.parse(e.data);
      setMsg(data.message);
    };
  }, []);
  useEffect(() => {
    var canvas = document.getElementById("cuadricula");
    var context = canvas.getContext("2d");
    context.lineWidth = 1;
    context.strokeStyle = "#000000";
    for (var x = 1; x < 502; x += 100) {
      context.moveTo(x, 0);
      context.lineTo(x, 502);
    }
    for (var y = 1; y < 502; y += 100) {
      context.moveTo(0, y);
      context.lineTo(502, y);
    }
    context.stroke();
  }, []);

  return (
    <div className="App">
      <div>{msg}</div>

      <canvas id="cuadricula" width="502" height="502"></canvas>
    </div>
  );
};

//https://developers.facebook.com/tools/explorer/1145871942808680/?method=GET&path=132412320551814%2Fpicture&version=v14.0
