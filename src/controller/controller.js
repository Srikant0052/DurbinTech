const fs = require('fs');
const PDFExtract = require('pdf.js-extract').PDFExtract;

const pdfExtract = new PDFExtract();


const getData = async function (req, res) {
    try {
        
        let file = await pdfExtract.extract('hiring_task_db/ResumeAhmedYounes.pdf');
        return res.status(200).send({ status: true, response: file });

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}


module.exports.getData = getData;