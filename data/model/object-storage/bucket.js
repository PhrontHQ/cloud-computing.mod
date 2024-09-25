/**
    @module cloud-computing.mod/data/model/object-storage/bucket
*/

var DataObject = require("mod/data/model/data-object").DataObject;

/**
 * @class Bucket
 * @extends DataObject
 *
 */

exports.Bucket = DataObject.specialize(/** @lends Bucket.prototype */ {

    identifier: {
        value: undefined
    }
});
