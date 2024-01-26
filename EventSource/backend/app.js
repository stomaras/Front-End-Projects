const express = require("express");

const app = express();

app.get("/rates", (req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin":"*",
        "Cache-Control":"no-cache",
        Connection:"keep-alive",
        "Content-Type":"text/event-stream",
    });
    res.flushHeaders();

    const interval = setInterval(() => {
        const stock1Rate = Math.floor(Math.random() * 10000);
        const stock2Rate = Math.floor(Math.random() * 10000);
        res.write(`data: ${JSON.stringify({stock1Rate, stock2Rate})}\n\n`);
    },2000);

    res.on("close", () => {
        clearInterval(interval);
        res.end();
    });
});

app.listen(4001,'localhost', ()=> {
    console.log("Server is up and running at port 4001");
});