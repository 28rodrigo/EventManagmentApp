// package: file
// file: eventApp.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as eventApp_pb from "./eventApp_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IEventServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUserEventInfo: IEventServiceService_IgetUserEventInfo;
    getAdminEventInfo: IEventServiceService_IgetAdminEventInfo;
    getStatisticsInfo: IEventServiceService_IgetStatisticsInfo;
    createEvent: IEventServiceService_IcreateEvent;
    updateEvent: IEventServiceService_IupdateEvent;
}

interface IEventServiceService_IgetUserEventInfo extends grpc.MethodDefinition<eventApp_pb.infoId, eventApp_pb.eventUserInfo> {
    path: "/file.EventService/getUserEventInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.infoId>;
    requestDeserialize: grpc.deserialize<eventApp_pb.infoId>;
    responseSerialize: grpc.serialize<eventApp_pb.eventUserInfo>;
    responseDeserialize: grpc.deserialize<eventApp_pb.eventUserInfo>;
}
interface IEventServiceService_IgetAdminEventInfo extends grpc.MethodDefinition<eventApp_pb.infoId, eventApp_pb.eventAdminInfo> {
    path: "/file.EventService/getAdminEventInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.infoId>;
    requestDeserialize: grpc.deserialize<eventApp_pb.infoId>;
    responseSerialize: grpc.serialize<eventApp_pb.eventAdminInfo>;
    responseDeserialize: grpc.deserialize<eventApp_pb.eventAdminInfo>;
}
interface IEventServiceService_IgetStatisticsInfo extends grpc.MethodDefinition<eventApp_pb.infoId, eventApp_pb.ocupationResponse> {
    path: "/file.EventService/getStatisticsInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.infoId>;
    requestDeserialize: grpc.deserialize<eventApp_pb.infoId>;
    responseSerialize: grpc.serialize<eventApp_pb.ocupationResponse>;
    responseDeserialize: grpc.deserialize<eventApp_pb.ocupationResponse>;
}
interface IEventServiceService_IcreateEvent extends grpc.MethodDefinition<eventApp_pb.createEventInfo, eventApp_pb.eventStateMsg> {
    path: "/file.EventService/createEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.createEventInfo>;
    requestDeserialize: grpc.deserialize<eventApp_pb.createEventInfo>;
    responseSerialize: grpc.serialize<eventApp_pb.eventStateMsg>;
    responseDeserialize: grpc.deserialize<eventApp_pb.eventStateMsg>;
}
interface IEventServiceService_IupdateEvent extends grpc.MethodDefinition<eventApp_pb.updateEventInfo, eventApp_pb.eventStateMsg> {
    path: "/file.EventService/updateEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.updateEventInfo>;
    requestDeserialize: grpc.deserialize<eventApp_pb.updateEventInfo>;
    responseSerialize: grpc.serialize<eventApp_pb.eventStateMsg>;
    responseDeserialize: grpc.deserialize<eventApp_pb.eventStateMsg>;
}

export const EventServiceService: IEventServiceService;

export interface IEventServiceServer {
    getUserEventInfo: grpc.handleUnaryCall<eventApp_pb.infoId, eventApp_pb.eventUserInfo>;
    getAdminEventInfo: grpc.handleUnaryCall<eventApp_pb.infoId, eventApp_pb.eventAdminInfo>;
    getStatisticsInfo: grpc.handleUnaryCall<eventApp_pb.infoId, eventApp_pb.ocupationResponse>;
    createEvent: grpc.handleUnaryCall<eventApp_pb.createEventInfo, eventApp_pb.eventStateMsg>;
    updateEvent: grpc.handleUnaryCall<eventApp_pb.updateEventInfo, eventApp_pb.eventStateMsg>;
}

export interface IEventServiceClient {
    getUserEventInfo(request: eventApp_pb.infoId, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventUserInfo) => void): grpc.ClientUnaryCall;
    getUserEventInfo(request: eventApp_pb.infoId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventUserInfo) => void): grpc.ClientUnaryCall;
    getUserEventInfo(request: eventApp_pb.infoId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventUserInfo) => void): grpc.ClientUnaryCall;
    getAdminEventInfo(request: eventApp_pb.infoId, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventAdminInfo) => void): grpc.ClientUnaryCall;
    getAdminEventInfo(request: eventApp_pb.infoId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventAdminInfo) => void): grpc.ClientUnaryCall;
    getAdminEventInfo(request: eventApp_pb.infoId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventAdminInfo) => void): grpc.ClientUnaryCall;
    getStatisticsInfo(request: eventApp_pb.infoId, callback: (error: grpc.ServiceError | null, response: eventApp_pb.ocupationResponse) => void): grpc.ClientUnaryCall;
    getStatisticsInfo(request: eventApp_pb.infoId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.ocupationResponse) => void): grpc.ClientUnaryCall;
    getStatisticsInfo(request: eventApp_pb.infoId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.ocupationResponse) => void): grpc.ClientUnaryCall;
    createEvent(request: eventApp_pb.createEventInfo, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventStateMsg) => void): grpc.ClientUnaryCall;
    createEvent(request: eventApp_pb.createEventInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventStateMsg) => void): grpc.ClientUnaryCall;
    createEvent(request: eventApp_pb.createEventInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventStateMsg) => void): grpc.ClientUnaryCall;
    updateEvent(request: eventApp_pb.updateEventInfo, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventStateMsg) => void): grpc.ClientUnaryCall;
    updateEvent(request: eventApp_pb.updateEventInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventStateMsg) => void): grpc.ClientUnaryCall;
    updateEvent(request: eventApp_pb.updateEventInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventStateMsg) => void): grpc.ClientUnaryCall;
}

export class EventServiceClient extends grpc.Client implements IEventServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUserEventInfo(request: eventApp_pb.infoId, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventUserInfo) => void): grpc.ClientUnaryCall;
    public getUserEventInfo(request: eventApp_pb.infoId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventUserInfo) => void): grpc.ClientUnaryCall;
    public getUserEventInfo(request: eventApp_pb.infoId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventUserInfo) => void): grpc.ClientUnaryCall;
    public getAdminEventInfo(request: eventApp_pb.infoId, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventAdminInfo) => void): grpc.ClientUnaryCall;
    public getAdminEventInfo(request: eventApp_pb.infoId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventAdminInfo) => void): grpc.ClientUnaryCall;
    public getAdminEventInfo(request: eventApp_pb.infoId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventAdminInfo) => void): grpc.ClientUnaryCall;
    public getStatisticsInfo(request: eventApp_pb.infoId, callback: (error: grpc.ServiceError | null, response: eventApp_pb.ocupationResponse) => void): grpc.ClientUnaryCall;
    public getStatisticsInfo(request: eventApp_pb.infoId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.ocupationResponse) => void): grpc.ClientUnaryCall;
    public getStatisticsInfo(request: eventApp_pb.infoId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.ocupationResponse) => void): grpc.ClientUnaryCall;
    public createEvent(request: eventApp_pb.createEventInfo, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventStateMsg) => void): grpc.ClientUnaryCall;
    public createEvent(request: eventApp_pb.createEventInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventStateMsg) => void): grpc.ClientUnaryCall;
    public createEvent(request: eventApp_pb.createEventInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventStateMsg) => void): grpc.ClientUnaryCall;
    public updateEvent(request: eventApp_pb.updateEventInfo, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventStateMsg) => void): grpc.ClientUnaryCall;
    public updateEvent(request: eventApp_pb.updateEventInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventStateMsg) => void): grpc.ClientUnaryCall;
    public updateEvent(request: eventApp_pb.updateEventInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.eventStateMsg) => void): grpc.ClientUnaryCall;
}

interface IAccessEventServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getEntryCode: IAccessEventServiceService_IgetEntryCode;
    getUserInviteLink: IAccessEventServiceService_IgetUserInviteLink;
    getGlobalinviteLink: IAccessEventServiceService_IgetGlobalinviteLink;
}

interface IAccessEventServiceService_IgetEntryCode extends grpc.MethodDefinition<eventApp_pb.entryParam, eventApp_pb.entryInfo> {
    path: "/file.AccessEventService/getEntryCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.entryParam>;
    requestDeserialize: grpc.deserialize<eventApp_pb.entryParam>;
    responseSerialize: grpc.serialize<eventApp_pb.entryInfo>;
    responseDeserialize: grpc.deserialize<eventApp_pb.entryInfo>;
}
interface IAccessEventServiceService_IgetUserInviteLink extends grpc.MethodDefinition<eventApp_pb.entryGuestParam, eventApp_pb.entryInfo> {
    path: "/file.AccessEventService/getUserInviteLink";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.entryGuestParam>;
    requestDeserialize: grpc.deserialize<eventApp_pb.entryGuestParam>;
    responseSerialize: grpc.serialize<eventApp_pb.entryInfo>;
    responseDeserialize: grpc.deserialize<eventApp_pb.entryInfo>;
}
interface IAccessEventServiceService_IgetGlobalinviteLink extends grpc.MethodDefinition<eventApp_pb.entryGlobalParam, eventApp_pb.entryInfo> {
    path: "/file.AccessEventService/getGlobalinviteLink";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.entryGlobalParam>;
    requestDeserialize: grpc.deserialize<eventApp_pb.entryGlobalParam>;
    responseSerialize: grpc.serialize<eventApp_pb.entryInfo>;
    responseDeserialize: grpc.deserialize<eventApp_pb.entryInfo>;
}

export const AccessEventServiceService: IAccessEventServiceService;

export interface IAccessEventServiceServer {
    getEntryCode: grpc.handleUnaryCall<eventApp_pb.entryParam, eventApp_pb.entryInfo>;
    getUserInviteLink: grpc.handleUnaryCall<eventApp_pb.entryGuestParam, eventApp_pb.entryInfo>;
    getGlobalinviteLink: grpc.handleUnaryCall<eventApp_pb.entryGlobalParam, eventApp_pb.entryInfo>;
}

export interface IAccessEventServiceClient {
    getEntryCode(request: eventApp_pb.entryParam, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    getEntryCode(request: eventApp_pb.entryParam, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    getEntryCode(request: eventApp_pb.entryParam, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    getUserInviteLink(request: eventApp_pb.entryGuestParam, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    getUserInviteLink(request: eventApp_pb.entryGuestParam, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    getUserInviteLink(request: eventApp_pb.entryGuestParam, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    getGlobalinviteLink(request: eventApp_pb.entryGlobalParam, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    getGlobalinviteLink(request: eventApp_pb.entryGlobalParam, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    getGlobalinviteLink(request: eventApp_pb.entryGlobalParam, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
}

export class AccessEventServiceClient extends grpc.Client implements IAccessEventServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getEntryCode(request: eventApp_pb.entryParam, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    public getEntryCode(request: eventApp_pb.entryParam, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    public getEntryCode(request: eventApp_pb.entryParam, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    public getUserInviteLink(request: eventApp_pb.entryGuestParam, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    public getUserInviteLink(request: eventApp_pb.entryGuestParam, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    public getUserInviteLink(request: eventApp_pb.entryGuestParam, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    public getGlobalinviteLink(request: eventApp_pb.entryGlobalParam, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    public getGlobalinviteLink(request: eventApp_pb.entryGlobalParam, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    public getGlobalinviteLink(request: eventApp_pb.entryGlobalParam, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
}

interface IFileUploaderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    uploadFile: IFileUploaderServiceService_IuploadFile;
}

interface IFileUploaderServiceService_IuploadFile extends grpc.MethodDefinition<eventApp_pb.fileUploadRequest, eventApp_pb.fileUploadResponse> {
    path: "/file.FileUploaderService/uploadFile";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.fileUploadRequest>;
    requestDeserialize: grpc.deserialize<eventApp_pb.fileUploadRequest>;
    responseSerialize: grpc.serialize<eventApp_pb.fileUploadResponse>;
    responseDeserialize: grpc.deserialize<eventApp_pb.fileUploadResponse>;
}

export const FileUploaderServiceService: IFileUploaderServiceService;

export interface IFileUploaderServiceServer {
    uploadFile: handleClientStreamingCall<eventApp_pb.fileUploadRequest, eventApp_pb.fileUploadResponse>;
}

export interface IFileUploaderServiceClient {
    uploadFile(callback: (error: grpc.ServiceError | null, response: eventApp_pb.fileUploadResponse) => void): grpc.ClientWritableStream<eventApp_pb.fileUploadRequest>;
    uploadFile(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.fileUploadResponse) => void): grpc.ClientWritableStream<eventApp_pb.fileUploadRequest>;
    uploadFile(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.fileUploadResponse) => void): grpc.ClientWritableStream<eventApp_pb.fileUploadRequest>;
    uploadFile(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.fileUploadResponse) => void): grpc.ClientWritableStream<eventApp_pb.fileUploadRequest>;
}

export class FileUploaderServiceClient extends grpc.Client implements IFileUploaderServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public uploadFile(callback: (error: grpc.ServiceError | null, response: eventApp_pb.fileUploadResponse) => void): grpc.ClientWritableStream<eventApp_pb.fileUploadRequest>;
    public uploadFile(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.fileUploadResponse) => void): grpc.ClientWritableStream<eventApp_pb.fileUploadRequest>;
    public uploadFile(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.fileUploadResponse) => void): grpc.ClientWritableStream<eventApp_pb.fileUploadRequest>;
    public uploadFile(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.fileUploadResponse) => void): grpc.ClientWritableStream<eventApp_pb.fileUploadRequest>;
}
