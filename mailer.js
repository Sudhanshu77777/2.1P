const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'sudhanshuthakur042004@gmail.com',
        pass: 'ezenwuionbsxzscj'
    }
});

module.exports = transporter;