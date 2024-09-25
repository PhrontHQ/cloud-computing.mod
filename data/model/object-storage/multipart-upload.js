/**
    @module cloud-computing.mod/data/model/object-storage/multipart-upload
*/


var DataObject = require("mod/data/model/data-object").DataObject;

/**
 * @class MultipartUpload
 * @extends DataObject
 *
 * listMultipartUploads(params = {}, callback) ⇒ AWS.Request
 * https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listMultipartUploads-property
 *
 */

exports.MultipartUpload = DataObject.specialize(/** @lends MultipartUpload.prototype */ {

    identifier: {
        value: undefined
    }
});
