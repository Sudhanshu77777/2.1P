const express = require('express');
const app = express();
const port = 3000;
const transporter = require('./project/mailer');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public', 'css')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'project' , 'index.html'));
});

app.post('/send-welcome-email', (req, res) => {
    const { email } = req.body;

    const mailOptions = {
        from: 'sudhanshuthakur042004@gmail.com',
        to: email,
        subject: 'Welcome to DEV@Deakin!',
        text: 'Hello and welcome to DEV@Deakin! We\'re excited to have you on board.'
    };

    const jsonData = JSON.stringify(mailOptions);
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send({ message: 'Error sending email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.send({ message: 'Welcome email sent successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});
