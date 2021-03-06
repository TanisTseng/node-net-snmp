
// Copyright 2013 Stephen Vickers <stephen.vickers.sv@gmail.com>

var process = require('process');
var Constants = require('./constants');
var Exceptions = require('./exceptions');
var Functions = require('./functions');
var Session = require('./session');
var RequestMessage = require('./v2/request');
var V3RequestMessage = require('./v3/request');
var HeaderData = require('./v3/HeaderData');
var ResponseMessage = require('./response');

/*****************************************************************************
 ** Exports
 **/

exports.Session = Session;

exports.createSession = function (target, community, options) {
  if (options || !(community && community.version)) {
    process.emitWarning('SNMPv2 API style deprecated. '
    + 'Please provide your community string in options.');

    options = { community: community };
  } else {
    options = community;
  }

  return new Session(target, options);
};

exports.isVarbindError = Functions.isVarbindError;
exports.varbindError = Functions.varbindError;

exports.Version1 = Constants.Version1;
exports.Version2c = Constants.Version2c;
exports.Version3 = Constants.Version3;

exports.ErrorStatus = Constants.ErrorStatus;
exports.TrapType = Constants.TrapType;
exports.ObjectType = Constants.ObjectType;
exports.SecurityModel = Constants.SecurityModel;
exports.AuthTypes = Constants.AuthTypes;
exports.PrivTypes = Constants.PrivTypes;
exports.Flags = Constants.Flags;

exports.ResponseInvalidError = Exceptions.ResponseInvalidError;
exports.RequestInvalidError = Exceptions.RequestInvalidError;
exports.RequestFailedError = Exceptions.RequestFailedError;
exports.RequestTimedOutError = Exceptions.RequestTimedOutError;

/**
 ** We've added this for testing.
 **/
exports.ObjectParser = {
  readInt: Functions.readInt,
  readUint: Functions.readUint,
};
