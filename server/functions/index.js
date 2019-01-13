const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1'
});

exports.sayHi = (event, context, callback) => {
    callback(
        null,
        constructLambdaResp(
            200,
            JSON.stringify({
                message: 'Hello, world!'
            })
        )
    );
};

function constructLambdaResp(code, body) {
    return {
        statusCode: code,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        isBase64Encoded: false,
        body: body
    };
}
