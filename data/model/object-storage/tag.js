/**
    @module cloud-computing.mod/data/model/object-storage/tag
*/

var DataObject = require("mod/data/model/data-object").DataObject;

/**
 * @class Tag
 * @extends DataObject
 *
 */

exports.Tag = DataObject.specialize(/** @lends Secret.prototype */ {

    key: {
        value: undefined
    },
    value: {
        value: undefined
    }
});
