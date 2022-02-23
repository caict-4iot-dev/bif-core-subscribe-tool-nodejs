/* eslint-disable */
/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.protocol.CHILDTYPE', null, global);
goog.exportSymbol('proto.protocol.Child', null, global);
goog.exportSymbol('proto.protocol.Node', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Child = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.Child, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.protocol.Child.displayName = 'proto.protocol.Child';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.protocol.Child.prototype.toObject = function (opt_includeInstance) {
        return proto.protocol.Child.toObject(opt_includeInstance, this);
    };


    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.protocol.Child} msg The msg instance to transform.
     * @return {!Object}
     */
    proto.protocol.Child.toObject = function (includeInstance, msg) {
        var f, obj = {
            sublocation: msg.getSublocation_asB64(),
            hash: msg.getHash_asB64(),
            childtype: msg.getChildtype()
        };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Child}
 */
proto.protocol.Child.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.protocol.Child;
    return proto.protocol.Child.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Child} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Child}
 */
proto.protocol.Child.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {!Uint8Array} */ (reader.readBytes());
                msg.setSublocation(value);
                break;
            case 2:
                var value = /** @type {!Uint8Array} */ (reader.readBytes());
                msg.setHash(value);
                break;
            case 3:
                var value = /** @type {!proto.protocol.CHILDTYPE} */ (reader.readEnum());
                msg.setChildtype(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Child} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.protocol.Child.serializeBinaryToWriter = function (message, writer) {
    message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Child.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    this.serializeBinaryToWriter(writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.protocol.Child.prototype.serializeBinaryToWriter = function (writer) {
    var f = undefined;
    f = this.getSublocation_asU8();
    if (f.length > 0) {
        writer.writeBytes(
            1,
            f
        );
    }
    f = this.getHash_asU8();
    if (f.length > 0) {
        writer.writeBytes(
            2,
            f
        );
    }
    f = this.getChildtype();
    if (f !== 0.0) {
        writer.writeEnum(
            3,
            f
        );
    }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.protocol.Child} The clone.
 */
proto.protocol.Child.prototype.cloneMessage = function () {
    return /** @type {!proto.protocol.Child} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes sublocation = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Child.prototype.getSublocation = function () {
    return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes sublocation = 1;
 * This is a type-conversion wrapper around `getSublocation()`
 * @return {string}
 */
proto.protocol.Child.prototype.getSublocation_asB64 = function () {
    return /** @type {string} */ (jspb.Message.bytesAsB64(
        this.getSublocation()));
};


/**
 * optional bytes sublocation = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSublocation()`
 * @return {!Uint8Array}
 */
proto.protocol.Child.prototype.getSublocation_asU8 = function () {
    return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
        this.getSublocation()));
};


/** @param {!(string|Uint8Array)} value  */
proto.protocol.Child.prototype.setSublocation = function (value) {
    jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes hash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Child.prototype.getHash = function () {
    return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/**
 * optional bytes hash = 2;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.protocol.Child.prototype.getHash_asB64 = function () {
    return /** @type {string} */ (jspb.Message.bytesAsB64(
        this.getHash()));
};


/**
 * optional bytes hash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.protocol.Child.prototype.getHash_asU8 = function () {
    return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
        this.getHash()));
};


/** @param {!(string|Uint8Array)} value  */
proto.protocol.Child.prototype.setHash = function (value) {
    jspb.Message.setField(this, 2, value);
};


/**
 * optional CHILDTYPE childtype = 3;
 * @return {!proto.protocol.CHILDTYPE}
 */
proto.protocol.Child.prototype.getChildtype = function () {
    return /** @type {!proto.protocol.CHILDTYPE} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {!proto.protocol.CHILDTYPE} value  */
proto.protocol.Child.prototype.setChildtype = function (value) {
    jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Node = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.Node.repeatedFields_, null);
};
goog.inherits(proto.protocol.Node, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.protocol.Node.displayName = 'proto.protocol.Node';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.Node.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.protocol.Node.prototype.toObject = function (opt_includeInstance) {
        return proto.protocol.Node.toObject(opt_includeInstance, this);
    };


    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.protocol.Node} msg The msg instance to transform.
     * @return {!Object}
     */
    proto.protocol.Node.toObject = function (includeInstance, msg) {
        var f, obj = {
            childrenList: jspb.Message.toObjectList(msg.getChildrenList(),
                proto.protocol.Child.toObject, includeInstance)
        };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Node}
 */
proto.protocol.Node.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.protocol.Node;
    return proto.protocol.Node.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Node} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Node}
 */
proto.protocol.Node.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.protocol.Child;
                reader.readMessage(value, proto.protocol.Child.deserializeBinaryFromReader);
                msg.getChildrenList().push(value);
                msg.setChildrenList(msg.getChildrenList());
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Node} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.protocol.Node.serializeBinaryToWriter = function (message, writer) {
    message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Node.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    this.serializeBinaryToWriter(writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.protocol.Node.prototype.serializeBinaryToWriter = function (writer) {
    var f = undefined;
    f = this.getChildrenList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(
            1,
            f,
            proto.protocol.Child.serializeBinaryToWriter
        );
    }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.protocol.Node} The clone.
 */
proto.protocol.Node.prototype.cloneMessage = function () {
    return /** @type {!proto.protocol.Node} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated Child children = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.protocol.Child>}
 */
proto.protocol.Node.prototype.getChildrenList = function () {
    return /** @type{!Array.<!proto.protocol.Child>} */ (
        jspb.Message.getRepeatedWrapperField(this, proto.protocol.Child, 1));
};


/** @param {Array.<!proto.protocol.Child>} value  */
proto.protocol.Node.prototype.setChildrenList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.protocol.Node.prototype.clearChildrenList = function () {
    this.setChildrenList([]);
};


/**
 * @enum {number}
 */
proto.protocol.CHILDTYPE = {
    NONE: 0,
    INNER: 1,
    LEAF: 2
};

goog.object.extend(exports, proto.protocol);