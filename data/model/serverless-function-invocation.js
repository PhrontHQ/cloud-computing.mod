/**
    @module cloud.mod/data/model/serverless-function-invocation
*/


var DataObject = require("mod/data/model/data-object").DataObject;

/**
 * @class ServerlessFunctionInvocation
 * @extends DataObject
 *
 * listMultipartUploads(params = {}, callback) ⇒ AWS.Request
 * https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listMultipartUploads-property
 *
 */

exports.ServerlessFunctionInvocation = class ServerlessFunctionInvocation extends DataObject {

        static {
            Montage.defineProperties(this.prototype, {
                name: {
                    value: undefined
                }
            });
    }

}
