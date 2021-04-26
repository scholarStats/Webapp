exports.getHome = (req, res) => {
    res.send("Hello World");
    /* 
        Una volta che il progetto sarà terminato, buildare e utilizzare il seguente comando
        res.sendFile(path.join(__dirname, 'build/index.html'))
    */
}