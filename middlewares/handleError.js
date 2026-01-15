import fs from "fs";

export default function handleError(err, req, res, next) {
    const time = new Date();
    fs.writeFileSync("logs/log.txt", `${time}: ${err}`);
    res.status(500),
    res.json({
        error: "SERVER ERROR",
        
        message: "Errore interno del server"
    });
    // anche qui next() non serve
}