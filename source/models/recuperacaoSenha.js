const { getConnection } = require("./dao");
const nodemailer = require('nodemailer');
const sendinBlueTransport = require('nodemailer-sendinblue-transport');

require('dotenv').config();

async function recuperarSenha(email) {
    try {
        const connection = await getConnection();

        // Verifica se o e-mail fornecido está registrado no banco de dados
        const [rows] = await connection.execute(
            "SELECT * FROM usuarios WHERE email = ?",
            [email]
        );

        if (rows.length === 0) {
            return { success: false, message: "E-mail incorreto ou inexistente." };
        }

        // Gera uma nova senha aleatória
        const novaSenha = Math.random().toString(36).slice(-8);

        // Atualiza a senha do usuário no banco de dados
        await connection.execute(
            "UPDATE usuarios SET senha = MD5(?) WHERE email = ?",
            [novaSenha, email]
        );

        // Envia um e-mail ao usuário com a nova senha
        await enviarEmail(email, "Recuperação de senha", `Sua nova senha é: ${novaSenha}`);
        console.log(novaSenha)

        return { success: true, message: "Nova senha enviada por e-mail." };
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

async function enviarEmail(destinatario, assunto, corpo) {
    const transporter = nodemailer.createTransport(new sendinBlueTransport({
        apiKey: process.env.API_EMAIL,
    }));

    const mailOptions = {
        from: 'mauriciobraga30@gmail.com',
        to: destinatario,
        subject: assunto,
        text: corpo
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('E-mail enviado com sucesso');
    } catch (erro) {
        console.erro('Erro ao enviar e-mail:', erro);
    }
}

module.exports = {
    recuperarSenha,
    enviarEmail
};
