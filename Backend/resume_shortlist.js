const express = require('express');
const app = express();
const tf = require('@tensorflow/tfjs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/resume-shortlisting', async (req, res) => {
    const resume = req.body.resume;
    const jobDescription = req.body.jobDescription;

    const resumeText = resume.toLowerCase().trim();
    const jobDescriptionText = jobDescription.toLowerCase().trim();
    const model = await tf.loadLayersModel('C:\Users\saksh\OneDrive\Documents\GitHub\ecell_nitb_hack2k23__BinaryBeast\Backend\model.js');

    const inputData = [resumeText + jobDescriptionText];
    const inputTensor = tf.tensor2d(inputData, [inputData.length, inputData[0].length]);

    const predictions = await model.predict(inputTensor).data();

    const result = predictions[0] > 0.5 ? 'Shortlisted' : 'Not Shortlisted';
    res.send({ result });
});

app.listen(3000, () => {
    console.log('Resume shortlisting app listening on port 3000!');
});
