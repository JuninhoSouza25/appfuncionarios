const PDF = require("html-pdf")

PDF.create("Teste de geração de PDF", {}).toFile("./src/reports/teste.pdf", (err, res) => {
    if(err){
        console.log("Erro!")
    }else{
        console.log(res)
    }
})