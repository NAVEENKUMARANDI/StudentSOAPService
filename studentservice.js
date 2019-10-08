const soap = require('soap');
const express = require('express');
const app = express();
/**
 * this is remote service defined in this file, that can be accessed by clients, who will supply args
 * response is returned to the calling client
 * our service calculates bmi by dividing weight in kilograms by square of height in metres
 */
const service = {
  Student_Service: {
    Student_Port: {
      getStudentList(args) {
        console.log('StudentId :'+args.studentId);
        return { 
            studentId: '45245234243455',
            firstName: 'YAAZHINI',
            lastName: 'DHAMODHARAN'
        };
      }
    }
  }
};
// xml data is extracted from wsdl file created
const xml = require('fs').readFileSync('./studentservice.wsdl', 'utf8');
//create an express server and pass it to a soap server
const server = app.listen(3150, function() {
  const host = '127.0.0.1';
  const port = server.address().port;
});
soap.listen(server, '/studentsoapservice', service, xml);