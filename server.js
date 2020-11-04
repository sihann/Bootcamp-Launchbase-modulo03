const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require("./data")

/*-- Configurar template engine --*/
server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


/* --- Rotas ---*/
server.get("/", function(req, res) {
    return res.render("courses", {items: courses}) //chave items
})

server.get("/courses/:id", function(req, res){
    const id = req.params.id;
    const course = courses.find(function(course) {
        if(course.id==id) {return true}
    })
        return res.render("course", { course }) //chave course
    
})

server.get("/about", function(req, res) {
    const about = {
        avatar: "logo.jpg",
        title: "Rocketseat",
        headline: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        description: "No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
        technologies: [
            { name: "JavaScript", img: "javascript.svg" },
            { name: "NodeJS", img: "nodejs.svg" },
            { name: "ReactJS", img: "reactjs.svg" },
            { name: "React Native", img: "react-native.svg" }
        ]
    }
    return res.render("about", { about }) //chave about
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });



server.listen(5000, function(){
    console.log("server is running")
})