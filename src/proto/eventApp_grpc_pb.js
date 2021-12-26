// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var eventApp_pb = require('./eventApp_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_file_createEventInfo(arg) {
  if (!(arg instanceof eventApp_pb.createEventInfo)) {
    throw new Error('Expected argument of type file.createEventInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_createEventInfo(buffer_arg) {
  return eventApp_pb.createEventInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_entryGlobalParam(arg) {
  if (!(arg instanceof eventApp_pb.entryGlobalParam)) {
    throw new Error('Expected argument of type file.entryGlobalParam');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_entryGlobalParam(buffer_arg) {
  return eventApp_pb.entryGlobalParam.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_entryGuestParam(arg) {
  if (!(arg instanceof eventApp_pb.entryGuestParam)) {
    throw new Error('Expected argument of type file.entryGuestParam');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_entryGuestParam(buffer_arg) {
  return eventApp_pb.entryGuestParam.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_entryInfo(arg) {
  if (!(arg instanceof eventApp_pb.entryInfo)) {
    throw new Error('Expected argument of type file.entryInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_entryInfo(buffer_arg) {
  return eventApp_pb.entryInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_entryParam(arg) {
  if (!(arg instanceof eventApp_pb.entryParam)) {
    throw new Error('Expected argument of type file.entryParam');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_entryParam(buffer_arg) {
  return eventApp_pb.entryParam.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_eventAdminInfo(arg) {
  if (!(arg instanceof eventApp_pb.eventAdminInfo)) {
    throw new Error('Expected argument of type file.eventAdminInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_eventAdminInfo(buffer_arg) {
  return eventApp_pb.eventAdminInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_eventStateMsg(arg) {
  if (!(arg instanceof eventApp_pb.eventStateMsg)) {
    throw new Error('Expected argument of type file.eventStateMsg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_eventStateMsg(buffer_arg) {
  return eventApp_pb.eventStateMsg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_eventUserInfo(arg) {
  if (!(arg instanceof eventApp_pb.eventUserInfo)) {
    throw new Error('Expected argument of type file.eventUserInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_eventUserInfo(buffer_arg) {
  return eventApp_pb.eventUserInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_fileUploadRequest(arg) {
  if (!(arg instanceof eventApp_pb.fileUploadRequest)) {
    throw new Error('Expected argument of type file.fileUploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_fileUploadRequest(buffer_arg) {
  return eventApp_pb.fileUploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_fileUploadResponse(arg) {
  if (!(arg instanceof eventApp_pb.fileUploadResponse)) {
    throw new Error('Expected argument of type file.fileUploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_fileUploadResponse(buffer_arg) {
  return eventApp_pb.fileUploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_infoId(arg) {
  if (!(arg instanceof eventApp_pb.infoId)) {
    throw new Error('Expected argument of type file.infoId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_infoId(buffer_arg) {
  return eventApp_pb.infoId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_ocupationResponse(arg) {
  if (!(arg instanceof eventApp_pb.ocupationResponse)) {
    throw new Error('Expected argument of type file.ocupationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_ocupationResponse(buffer_arg) {
  return eventApp_pb.ocupationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_updateEventInfo(arg) {
  if (!(arg instanceof eventApp_pb.updateEventInfo)) {
    throw new Error('Expected argument of type file.updateEventInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_updateEventInfo(buffer_arg) {
  return eventApp_pb.updateEventInfo.deserializeBinary(new Uint8Array(buffer_arg));
}


// Serviço dedicado para o cliente UTILIZADOR 
var EventServiceService = exports.EventServiceService = {
  getUserEventInfo: {
    path: '/file.EventService/getUserEventInfo',
    requestStream: false,
    responseStream: false,
    requestType: eventApp_pb.infoId,
    responseType: eventApp_pb.eventUserInfo,
    requestSerialize: serialize_file_infoId,
    requestDeserialize: deserialize_file_infoId,
    responseSerialize: serialize_file_eventUserInfo,
    responseDeserialize: deserialize_file_eventUserInfo,
  },
  getAdminEventInfo: {
    path: '/file.EventService/getAdminEventInfo',
    requestStream: false,
    responseStream: false,
    requestType: eventApp_pb.infoId,
    responseType: eventApp_pb.eventAdminInfo,
    requestSerialize: serialize_file_infoId,
    requestDeserialize: deserialize_file_infoId,
    responseSerialize: serialize_file_eventAdminInfo,
    responseDeserialize: deserialize_file_eventAdminInfo,
  },
  getStatisticsInfo: {
    path: '/file.EventService/getStatisticsInfo',
    requestStream: false,
    responseStream: false,
    requestType: eventApp_pb.infoId,
    responseType: eventApp_pb.ocupationResponse,
    requestSerialize: serialize_file_infoId,
    requestDeserialize: deserialize_file_infoId,
    responseSerialize: serialize_file_ocupationResponse,
    responseDeserialize: deserialize_file_ocupationResponse,
  },
  createEvent: {
    path: '/file.EventService/createEvent',
    requestStream: false,
    responseStream: false,
    requestType: eventApp_pb.createEventInfo,
    responseType: eventApp_pb.eventStateMsg,
    requestSerialize: serialize_file_createEventInfo,
    requestDeserialize: deserialize_file_createEventInfo,
    responseSerialize: serialize_file_eventStateMsg,
    responseDeserialize: deserialize_file_eventStateMsg,
  },
  updateEvent: {
    path: '/file.EventService/updateEvent',
    requestStream: false,
    responseStream: false,
    requestType: eventApp_pb.updateEventInfo,
    responseType: eventApp_pb.eventStateMsg,
    requestSerialize: serialize_file_updateEventInfo,
    requestDeserialize: deserialize_file_updateEventInfo,
    responseSerialize: serialize_file_eventStateMsg,
    responseDeserialize: deserialize_file_eventStateMsg,
  },
};

exports.EventServiceClient = grpc.makeGenericClientConstructor(EventServiceService);
// ----------------------------------------------------------------------------------------
// service UserService{
// 	//ainda falta isto tudo
// 	rpc login
// 	rpc updateUser
// 	rpc createUser
// }
// -------------------------------------------------------------------------------------
var AccessEventServiceService = exports.AccessEventServiceService = {
  getEntryCode: {
    path: '/file.AccessEventService/getEntryCode',
    requestStream: false,
    responseStream: false,
    requestType: eventApp_pb.entryParam,
    responseType: eventApp_pb.entryInfo,
    requestSerialize: serialize_file_entryParam,
    requestDeserialize: deserialize_file_entryParam,
    responseSerialize: serialize_file_entryInfo,
    responseDeserialize: deserialize_file_entryInfo,
  },
  getUserInviteLink: {
    path: '/file.AccessEventService/getUserInviteLink',
    requestStream: false,
    responseStream: false,
    requestType: eventApp_pb.entryGuestParam,
    responseType: eventApp_pb.entryInfo,
    requestSerialize: serialize_file_entryGuestParam,
    requestDeserialize: deserialize_file_entryGuestParam,
    responseSerialize: serialize_file_entryInfo,
    responseDeserialize: deserialize_file_entryInfo,
  },
  getGlobalinviteLink: {
    path: '/file.AccessEventService/getGlobalinviteLink',
    requestStream: false,
    responseStream: false,
    requestType: eventApp_pb.entryGlobalParam,
    responseType: eventApp_pb.entryInfo,
    requestSerialize: serialize_file_entryGlobalParam,
    requestDeserialize: deserialize_file_entryGlobalParam,
    responseSerialize: serialize_file_entryInfo,
    responseDeserialize: deserialize_file_entryInfo,
  },
  // rpc setEventDevice //isto talvez para mais tarde	
};

exports.AccessEventServiceClient = grpc.makeGenericClientConstructor(AccessEventServiceService);
var UploadServiceService = exports.UploadServiceService = {
  uploadImage: {
    path: '/file.UploadService/uploadImage',
    requestStream: true,
    responseStream: false,
    requestType: eventApp_pb.fileUploadRequest,
    responseType: eventApp_pb.fileUploadResponse,
    requestSerialize: serialize_file_fileUploadRequest,
    requestDeserialize: deserialize_file_fileUploadRequest,
    responseSerialize: serialize_file_fileUploadResponse,
    responseDeserialize: deserialize_file_fileUploadResponse,
  },
};

exports.UploadServiceClient = grpc.makeGenericClientConstructor(UploadServiceService);
