var http = require("http");
 var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-west-2" });
exports.handler = function(event, context, callback) {
  http.get({host: "vtu.ac.in",path:"/abcd"}, function(res){
    if( res.statusCode == 200 )
   console.log("This site is up and running!");
 else{
  var params = {
    Destination: {
      ToAddresses: ["snarjun98@gmail.com"],
    },
    Message: {
      Body: {
        Text: { Data: "This site vtu.ac.in/abcd is Down" },
      },

      Subject: { Data: "The site health Email" },
    },
    Source: "no-reply@gmail.com",
  };
  return ses.sendEmail(params).promise();
 }
})
}