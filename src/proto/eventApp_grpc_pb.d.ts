// package: file
// file: eventApp.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as eventApp_pb from "./eventApp_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IEventServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUserEventInfo: IEventServiceService_IgetUserEventInfo;
    getAdminEventInfo: IEventServiceService_IgetAdminEventInfo;
    getStatisticsInfo: IEventServiceService_IgetStatisticsInfo;
    createEvent: IEventServiceService_IcreateEvent;
    updateEvent: IEventServiceService_IupdateEvent;
    getUpcomingEvents: IEventServiceService_IgetUpcomingEvents;
    getMyEvents: IEventServiceService_IgetMyEvents;
    getOtherEvents: IEventServiceService_IgetOtherEvents;
    getExploreEvents: IEventServiceService_IgetExploreEvents;
    getInviteEvents: IEventServiceService_IgetInviteEvents;
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
interface IEventServiceService_IgetUpcomingEvents extends grpc.MethodDefinition<eventApp_pb.infoUserId, eventApp_pb.upcomingReturn> {
    path: "/file.EventService/getUpcomingEvents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.infoUserId>;
    requestDeserialize: grpc.deserialize<eventApp_pb.infoUserId>;
    responseSerialize: grpc.serialize<eventApp_pb.upcomingReturn>;
    responseDeserialize: grpc.deserialize<eventApp_pb.upcomingReturn>;
}
interface IEventServiceService_IgetMyEvents extends grpc.MethodDefinition<eventApp_pb.infoUserId, eventApp_pb.upcomingReturn> {
    path: "/file.EventService/getMyEvents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.infoUserId>;
    requestDeserialize: grpc.deserialize<eventApp_pb.infoUserId>;
    responseSerialize: grpc.serialize<eventApp_pb.upcomingReturn>;
    responseDeserialize: grpc.deserialize<eventApp_pb.upcomingReturn>;
}
interface IEventServiceService_IgetOtherEvents extends grpc.MethodDefinition<eventApp_pb.infoUserId, eventApp_pb.upcomingReturn> {
    path: "/file.EventService/getOtherEvents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.infoUserId>;
    requestDeserialize: grpc.deserialize<eventApp_pb.infoUserId>;
    responseSerialize: grpc.serialize<eventApp_pb.upcomingReturn>;
    responseDeserialize: grpc.deserialize<eventApp_pb.upcomingReturn>;
}
interface IEventServiceService_IgetExploreEvents extends grpc.MethodDefinition<eventApp_pb.infoUserId, eventApp_pb.upcomingReturn> {
    path: "/file.EventService/getExploreEvents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.infoUserId>;
    requestDeserialize: grpc.deserialize<eventApp_pb.infoUserId>;
    responseSerialize: grpc.serialize<eventApp_pb.upcomingReturn>;
    responseDeserialize: grpc.deserialize<eventApp_pb.upcomingReturn>;
}
interface IEventServiceService_IgetInviteEvents extends grpc.MethodDefinition<eventApp_pb.infoUserId, eventApp_pb.upcomingReturn> {
    path: "/file.EventService/getInviteEvents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.infoUserId>;
    requestDeserialize: grpc.deserialize<eventApp_pb.infoUserId>;
    responseSerialize: grpc.serialize<eventApp_pb.upcomingReturn>;
    responseDeserialize: grpc.deserialize<eventApp_pb.upcomingReturn>;
}

export const EventServiceService: IEventServiceService;

export interface IEventServiceServer {
    getUserEventInfo: grpc.handleUnaryCall<eventApp_pb.infoId, eventApp_pb.eventUserInfo>;
    getAdminEventInfo: grpc.handleUnaryCall<eventApp_pb.infoId, eventApp_pb.eventAdminInfo>;
    getStatisticsInfo: grpc.handleUnaryCall<eventApp_pb.infoId, eventApp_pb.ocupationResponse>;
    createEvent: grpc.handleUnaryCall<eventApp_pb.createEventInfo, eventApp_pb.eventStateMsg>;
    updateEvent: grpc.handleUnaryCall<eventApp_pb.updateEventInfo, eventApp_pb.eventStateMsg>;
    getUpcomingEvents: grpc.handleUnaryCall<eventApp_pb.infoUserId, eventApp_pb.upcomingReturn>;
    getMyEvents: grpc.handleUnaryCall<eventApp_pb.infoUserId, eventApp_pb.upcomingReturn>;
    getOtherEvents: grpc.handleUnaryCall<eventApp_pb.infoUserId, eventApp_pb.upcomingReturn>;
    getExploreEvents: grpc.handleUnaryCall<eventApp_pb.infoUserId, eventApp_pb.upcomingReturn>;
    getInviteEvents: grpc.handleUnaryCall<eventApp_pb.infoUserId, eventApp_pb.upcomingReturn>;
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
    getUpcomingEvents(request: eventApp_pb.infoUserId, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    getUpcomingEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    getUpcomingEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    getMyEvents(request: eventApp_pb.infoUserId, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    getMyEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    getMyEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    getOtherEvents(request: eventApp_pb.infoUserId, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    getOtherEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    getOtherEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    getExploreEvents(request: eventApp_pb.infoUserId, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    getExploreEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    getExploreEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    getInviteEvents(request: eventApp_pb.infoUserId, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    getInviteEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    getInviteEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
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
    public getUpcomingEvents(request: eventApp_pb.infoUserId, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    public getUpcomingEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    public getUpcomingEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    public getMyEvents(request: eventApp_pb.infoUserId, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    public getMyEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    public getMyEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    public getOtherEvents(request: eventApp_pb.infoUserId, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    public getOtherEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    public getOtherEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    public getExploreEvents(request: eventApp_pb.infoUserId, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    public getExploreEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    public getExploreEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    public getInviteEvents(request: eventApp_pb.infoUserId, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    public getInviteEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
    public getInviteEvents(request: eventApp_pb.infoUserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.upcomingReturn) => void): grpc.ClientUnaryCall;
}

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IUserServiceService_Ilogin;
    createUser: IUserServiceService_IcreateUser;
    updateUser: IUserServiceService_IupdateUser;
}

interface IUserServiceService_Ilogin extends grpc.MethodDefinition<eventApp_pb.loginInfo, eventApp_pb.authResponse> {
    path: "/file.UserService/login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.loginInfo>;
    requestDeserialize: grpc.deserialize<eventApp_pb.loginInfo>;
    responseSerialize: grpc.serialize<eventApp_pb.authResponse>;
    responseDeserialize: grpc.deserialize<eventApp_pb.authResponse>;
}
interface IUserServiceService_IcreateUser extends grpc.MethodDefinition<eventApp_pb.createUserInfo, eventApp_pb.userStateMsg> {
    path: "/file.UserService/createUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.createUserInfo>;
    requestDeserialize: grpc.deserialize<eventApp_pb.createUserInfo>;
    responseSerialize: grpc.serialize<eventApp_pb.userStateMsg>;
    responseDeserialize: grpc.deserialize<eventApp_pb.userStateMsg>;
}
interface IUserServiceService_IupdateUser extends grpc.MethodDefinition<eventApp_pb.updateUserInfo, eventApp_pb.userStateMsg> {
    path: "/file.UserService/updateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.updateUserInfo>;
    requestDeserialize: grpc.deserialize<eventApp_pb.updateUserInfo>;
    responseSerialize: grpc.serialize<eventApp_pb.userStateMsg>;
    responseDeserialize: grpc.deserialize<eventApp_pb.userStateMsg>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    login: grpc.handleUnaryCall<eventApp_pb.loginInfo, eventApp_pb.authResponse>;
    createUser: grpc.handleUnaryCall<eventApp_pb.createUserInfo, eventApp_pb.userStateMsg>;
    updateUser: grpc.handleUnaryCall<eventApp_pb.updateUserInfo, eventApp_pb.userStateMsg>;
}

export interface IUserServiceClient {
    login(request: eventApp_pb.loginInfo, callback: (error: grpc.ServiceError | null, response: eventApp_pb.authResponse) => void): grpc.ClientUnaryCall;
    login(request: eventApp_pb.loginInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.authResponse) => void): grpc.ClientUnaryCall;
    login(request: eventApp_pb.loginInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.authResponse) => void): grpc.ClientUnaryCall;
    createUser(request: eventApp_pb.createUserInfo, callback: (error: grpc.ServiceError | null, response: eventApp_pb.userStateMsg) => void): grpc.ClientUnaryCall;
    createUser(request: eventApp_pb.createUserInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.userStateMsg) => void): grpc.ClientUnaryCall;
    createUser(request: eventApp_pb.createUserInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.userStateMsg) => void): grpc.ClientUnaryCall;
    updateUser(request: eventApp_pb.updateUserInfo, callback: (error: grpc.ServiceError | null, response: eventApp_pb.userStateMsg) => void): grpc.ClientUnaryCall;
    updateUser(request: eventApp_pb.updateUserInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.userStateMsg) => void): grpc.ClientUnaryCall;
    updateUser(request: eventApp_pb.updateUserInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.userStateMsg) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public login(request: eventApp_pb.loginInfo, callback: (error: grpc.ServiceError | null, response: eventApp_pb.authResponse) => void): grpc.ClientUnaryCall;
    public login(request: eventApp_pb.loginInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.authResponse) => void): grpc.ClientUnaryCall;
    public login(request: eventApp_pb.loginInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.authResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: eventApp_pb.createUserInfo, callback: (error: grpc.ServiceError | null, response: eventApp_pb.userStateMsg) => void): grpc.ClientUnaryCall;
    public createUser(request: eventApp_pb.createUserInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.userStateMsg) => void): grpc.ClientUnaryCall;
    public createUser(request: eventApp_pb.createUserInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.userStateMsg) => void): grpc.ClientUnaryCall;
    public updateUser(request: eventApp_pb.updateUserInfo, callback: (error: grpc.ServiceError | null, response: eventApp_pb.userStateMsg) => void): grpc.ClientUnaryCall;
    public updateUser(request: eventApp_pb.updateUserInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.userStateMsg) => void): grpc.ClientUnaryCall;
    public updateUser(request: eventApp_pb.updateUserInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.userStateMsg) => void): grpc.ClientUnaryCall;
}

interface IAccessEventServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getEntryCode: IAccessEventServiceService_IgetEntryCode;
    getGlobalinviteLink: IAccessEventServiceService_IgetGlobalinviteLink;
    addUserToEvent: IAccessEventServiceService_IaddUserToEvent;
    validateKeycode: IAccessEventServiceService_IvalidateKeycode;
    registerPublicEvent: IAccessEventServiceService_IregisterPublicEvent;
    registerInviteEvent: IAccessEventServiceService_IregisterInviteEvent;
    registerQREvent: IAccessEventServiceService_IregisterQREvent;
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
interface IAccessEventServiceService_IgetGlobalinviteLink extends grpc.MethodDefinition<eventApp_pb.entryGlobalParam, eventApp_pb.entryInfo> {
    path: "/file.AccessEventService/getGlobalinviteLink";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.entryGlobalParam>;
    requestDeserialize: grpc.deserialize<eventApp_pb.entryGlobalParam>;
    responseSerialize: grpc.serialize<eventApp_pb.entryInfo>;
    responseDeserialize: grpc.deserialize<eventApp_pb.entryInfo>;
}
interface IAccessEventServiceService_IaddUserToEvent extends grpc.MethodDefinition<eventApp_pb.entryAddUser, eventApp_pb.entryResponse> {
    path: "/file.AccessEventService/addUserToEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.entryAddUser>;
    requestDeserialize: grpc.deserialize<eventApp_pb.entryAddUser>;
    responseSerialize: grpc.serialize<eventApp_pb.entryResponse>;
    responseDeserialize: grpc.deserialize<eventApp_pb.entryResponse>;
}
interface IAccessEventServiceService_IvalidateKeycode extends grpc.MethodDefinition<eventApp_pb.entryInfoRequest, eventApp_pb.entryValidation> {
    path: "/file.AccessEventService/validateKeycode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.entryInfoRequest>;
    requestDeserialize: grpc.deserialize<eventApp_pb.entryInfoRequest>;
    responseSerialize: grpc.serialize<eventApp_pb.entryValidation>;
    responseDeserialize: grpc.deserialize<eventApp_pb.entryValidation>;
}
interface IAccessEventServiceService_IregisterPublicEvent extends grpc.MethodDefinition<eventApp_pb.publicRegisterInfo, eventApp_pb.entryResponse> {
    path: "/file.AccessEventService/registerPublicEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.publicRegisterInfo>;
    requestDeserialize: grpc.deserialize<eventApp_pb.publicRegisterInfo>;
    responseSerialize: grpc.serialize<eventApp_pb.entryResponse>;
    responseDeserialize: grpc.deserialize<eventApp_pb.entryResponse>;
}
interface IAccessEventServiceService_IregisterInviteEvent extends grpc.MethodDefinition<eventApp_pb.publicInviteInfo, eventApp_pb.entryResponse> {
    path: "/file.AccessEventService/registerInviteEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.publicInviteInfo>;
    requestDeserialize: grpc.deserialize<eventApp_pb.publicInviteInfo>;
    responseSerialize: grpc.serialize<eventApp_pb.entryResponse>;
    responseDeserialize: grpc.deserialize<eventApp_pb.entryResponse>;
}
interface IAccessEventServiceService_IregisterQREvent extends grpc.MethodDefinition<eventApp_pb.QRentry, eventApp_pb.entryResponse> {
    path: "/file.AccessEventService/registerQREvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<eventApp_pb.QRentry>;
    requestDeserialize: grpc.deserialize<eventApp_pb.QRentry>;
    responseSerialize: grpc.serialize<eventApp_pb.entryResponse>;
    responseDeserialize: grpc.deserialize<eventApp_pb.entryResponse>;
}

export const AccessEventServiceService: IAccessEventServiceService;

export interface IAccessEventServiceServer {
    getEntryCode: grpc.handleUnaryCall<eventApp_pb.entryParam, eventApp_pb.entryInfo>;
    getGlobalinviteLink: grpc.handleUnaryCall<eventApp_pb.entryGlobalParam, eventApp_pb.entryInfo>;
    addUserToEvent: grpc.handleUnaryCall<eventApp_pb.entryAddUser, eventApp_pb.entryResponse>;
    validateKeycode: grpc.handleUnaryCall<eventApp_pb.entryInfoRequest, eventApp_pb.entryValidation>;
    registerPublicEvent: grpc.handleUnaryCall<eventApp_pb.publicRegisterInfo, eventApp_pb.entryResponse>;
    registerInviteEvent: grpc.handleUnaryCall<eventApp_pb.publicInviteInfo, eventApp_pb.entryResponse>;
    registerQREvent: grpc.handleUnaryCall<eventApp_pb.QRentry, eventApp_pb.entryResponse>;
}

export interface IAccessEventServiceClient {
    getEntryCode(request: eventApp_pb.entryParam, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    getEntryCode(request: eventApp_pb.entryParam, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    getEntryCode(request: eventApp_pb.entryParam, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    getGlobalinviteLink(request: eventApp_pb.entryGlobalParam, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    getGlobalinviteLink(request: eventApp_pb.entryGlobalParam, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    getGlobalinviteLink(request: eventApp_pb.entryGlobalParam, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    addUserToEvent(request: eventApp_pb.entryAddUser, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    addUserToEvent(request: eventApp_pb.entryAddUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    addUserToEvent(request: eventApp_pb.entryAddUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    validateKeycode(request: eventApp_pb.entryInfoRequest, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryValidation) => void): grpc.ClientUnaryCall;
    validateKeycode(request: eventApp_pb.entryInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryValidation) => void): grpc.ClientUnaryCall;
    validateKeycode(request: eventApp_pb.entryInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryValidation) => void): grpc.ClientUnaryCall;
    registerPublicEvent(request: eventApp_pb.publicRegisterInfo, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    registerPublicEvent(request: eventApp_pb.publicRegisterInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    registerPublicEvent(request: eventApp_pb.publicRegisterInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    registerInviteEvent(request: eventApp_pb.publicInviteInfo, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    registerInviteEvent(request: eventApp_pb.publicInviteInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    registerInviteEvent(request: eventApp_pb.publicInviteInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    registerQREvent(request: eventApp_pb.QRentry, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    registerQREvent(request: eventApp_pb.QRentry, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    registerQREvent(request: eventApp_pb.QRentry, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
}

export class AccessEventServiceClient extends grpc.Client implements IAccessEventServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getEntryCode(request: eventApp_pb.entryParam, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    public getEntryCode(request: eventApp_pb.entryParam, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    public getEntryCode(request: eventApp_pb.entryParam, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    public getGlobalinviteLink(request: eventApp_pb.entryGlobalParam, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    public getGlobalinviteLink(request: eventApp_pb.entryGlobalParam, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    public getGlobalinviteLink(request: eventApp_pb.entryGlobalParam, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryInfo) => void): grpc.ClientUnaryCall;
    public addUserToEvent(request: eventApp_pb.entryAddUser, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    public addUserToEvent(request: eventApp_pb.entryAddUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    public addUserToEvent(request: eventApp_pb.entryAddUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    public validateKeycode(request: eventApp_pb.entryInfoRequest, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryValidation) => void): grpc.ClientUnaryCall;
    public validateKeycode(request: eventApp_pb.entryInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryValidation) => void): grpc.ClientUnaryCall;
    public validateKeycode(request: eventApp_pb.entryInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryValidation) => void): grpc.ClientUnaryCall;
    public registerPublicEvent(request: eventApp_pb.publicRegisterInfo, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    public registerPublicEvent(request: eventApp_pb.publicRegisterInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    public registerPublicEvent(request: eventApp_pb.publicRegisterInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    public registerInviteEvent(request: eventApp_pb.publicInviteInfo, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    public registerInviteEvent(request: eventApp_pb.publicInviteInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    public registerInviteEvent(request: eventApp_pb.publicInviteInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    public registerQREvent(request: eventApp_pb.QRentry, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    public registerQREvent(request: eventApp_pb.QRentry, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
    public registerQREvent(request: eventApp_pb.QRentry, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: eventApp_pb.entryResponse) => void): grpc.ClientUnaryCall;
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
