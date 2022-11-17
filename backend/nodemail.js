const mailer = require("nodemailer");

module.exports = (nome, assunto, mensagem, anexo) => {
    const smtpTransport = mailer.createTransport({
        host: 'smtp.task.com.br',
        port: 587,
        secure: false, //SSL/TLS
        auth: {
            user: 'postmaster@mhedica.com.br',
            pass: 'Mh8756ica21'
        }
    })
    
    const mail = {
        from: "Chamado SAP <postmaster@mhedica.com.br>",
        to: "eugenio@mhedica.com.br",
        subject: `Chamado SAP | ${assunto} | ${nome}`,
        text: mensagem,
        //html: "<b>Opcionalmente, pode enviar como HTML</b>"
    }
    
    if(anexo){
        console.log(anexo);
        mail.attachments = [];
        mail.attachments.push({
            filename: anexo.originalname,
            content: anexo.buffer
        })
    }
    
    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mail)
            .then(response => {
                smtpTransport.close();
                return resolve(response);
            })
            .catch(error => {
                smtpTransport.close();
                return reject(error);
            });
    })
}