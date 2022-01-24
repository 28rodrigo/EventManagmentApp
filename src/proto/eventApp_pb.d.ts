// package: file
// file: eventApp.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class infoUserId extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): infoUserId;

    getToken(): string;
    setToken(value: string): infoUserId;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): infoUserId.AsObject;
    static toObject(includeInstance: boolean, msg: infoUserId): infoUserId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: infoUserId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): infoUserId;
    static deserializeBinaryFromReader(message: infoUserId, reader: jspb.BinaryReader): infoUserId;
}

export namespace infoUserId {
    export type AsObject = {
        username: string,
        token: string,
    }
}

export class infoId extends jspb.Message { 
    getIdevento(): number;
    setIdevento(value: number): infoId;

    getToken(): string;
    setToken(value: string): infoId;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): infoId.AsObject;
    static toObject(includeInstance: boolean, msg: infoId): infoId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: infoId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): infoId;
    static deserializeBinaryFromReader(message: infoId, reader: jspb.BinaryReader): infoId;
}

export namespace infoId {
    export type AsObject = {
        idevento: number,
        token: string,
    }
}

export class upcomingReturn extends jspb.Message { 
    clearEventsList(): void;
    getEventsList(): Array<eventOverview>;
    setEventsList(value: Array<eventOverview>): upcomingReturn;
    addEvents(value?: eventOverview, index?: number): eventOverview;

    getState(): boolean;
    setState(value: boolean): upcomingReturn;

    getStatusmsg(): string;
    setStatusmsg(value: string): upcomingReturn;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): upcomingReturn.AsObject;
    static toObject(includeInstance: boolean, msg: upcomingReturn): upcomingReturn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: upcomingReturn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): upcomingReturn;
    static deserializeBinaryFromReader(message: upcomingReturn, reader: jspb.BinaryReader): upcomingReturn;
}

export namespace upcomingReturn {
    export type AsObject = {
        eventsList: Array<eventOverview.AsObject>,
        state: boolean,
        statusmsg: string,
    }
}

export class eventOverview extends jspb.Message { 
    getName(): string;
    setName(value: string): eventOverview;

    getImgurl(): string;
    setImgurl(value: string): eventOverview;

    getEventid(): number;
    setEventid(value: number): eventOverview;


    hasStartdate(): boolean;
    clearStartdate(): void;
    getStartdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartdate(value?: google_protobuf_timestamp_pb.Timestamp): eventOverview;

    getEventplace(): number;
    setEventplace(value: number): eventOverview;

    getEventtype(): number;
    setEventtype(value: number): eventOverview;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): eventOverview.AsObject;
    static toObject(includeInstance: boolean, msg: eventOverview): eventOverview.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: eventOverview, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): eventOverview;
    static deserializeBinaryFromReader(message: eventOverview, reader: jspb.BinaryReader): eventOverview;
}

export namespace eventOverview {
    export type AsObject = {
        name: string,
        imgurl: string,
        eventid: number,
        startdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        eventplace: number,
        eventtype: number,
    }
}

export class eventStateMsg extends jspb.Message { 
    getState(): boolean;
    setState(value: boolean): eventStateMsg;

    getId(): number;
    setId(value: number): eventStateMsg;

    getStatusmsg(): string;
    setStatusmsg(value: string): eventStateMsg;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): eventStateMsg.AsObject;
    static toObject(includeInstance: boolean, msg: eventStateMsg): eventStateMsg.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: eventStateMsg, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): eventStateMsg;
    static deserializeBinaryFromReader(message: eventStateMsg, reader: jspb.BinaryReader): eventStateMsg;
}

export namespace eventStateMsg {
    export type AsObject = {
        state: boolean,
        id: number,
        statusmsg: string,
    }
}

export class eventUserInfo extends jspb.Message { 
    getState(): boolean;
    setState(value: boolean): eventUserInfo;

    getName(): string;
    setName(value: string): eventUserInfo;

    getImgurl(): string;
    setImgurl(value: string): eventUserInfo;

    getDescription(): string;
    setDescription(value: string): eventUserInfo;

    getLatitude(): string;
    setLatitude(value: string): eventUserInfo;

    getLongitude(): string;
    setLongitude(value: string): eventUserInfo;

    getEventplace(): number;
    setEventplace(value: number): eventUserInfo;

    getEventtype(): number;
    setEventtype(value: number): eventUserInfo;


    hasStatisticsdate(): boolean;
    clearStatisticsdate(): void;
    getStatisticsdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStatisticsdate(value?: google_protobuf_timestamp_pb.Timestamp): eventUserInfo;

    getOcupationpercentage(): number;
    setOcupationpercentage(value: number): eventUserInfo;

    getStatusmsg(): string;
    setStatusmsg(value: string): eventUserInfo;

    getEventid(): number;
    setEventid(value: number): eventUserInfo;

    getAgerestriction(): number;
    setAgerestriction(value: number): eventUserInfo;


    hasStartdate(): boolean;
    clearStartdate(): void;
    getStartdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartdate(value?: google_protobuf_timestamp_pb.Timestamp): eventUserInfo;


    hasEnddate(): boolean;
    clearEnddate(): void;
    getEnddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnddate(value?: google_protobuf_timestamp_pb.Timestamp): eventUserInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): eventUserInfo.AsObject;
    static toObject(includeInstance: boolean, msg: eventUserInfo): eventUserInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: eventUserInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): eventUserInfo;
    static deserializeBinaryFromReader(message: eventUserInfo, reader: jspb.BinaryReader): eventUserInfo;
}

export namespace eventUserInfo {
    export type AsObject = {
        state: boolean,
        name: string,
        imgurl: string,
        description: string,
        latitude: string,
        longitude: string,
        eventplace: number,
        eventtype: number,
        statisticsdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        ocupationpercentage: number,
        statusmsg: string,
        eventid: number,
        agerestriction: number,
        startdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        enddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class eventAdminInfo extends jspb.Message { 
    getState(): boolean;
    setState(value: boolean): eventAdminInfo;

    getName(): string;
    setName(value: string): eventAdminInfo;

    getImgurl(): string;
    setImgurl(value: string): eventAdminInfo;

    getDescription(): string;
    setDescription(value: string): eventAdminInfo;

    getLatitude(): string;
    setLatitude(value: string): eventAdminInfo;

    getLongitude(): string;
    setLongitude(value: string): eventAdminInfo;

    getEventplace(): number;
    setEventplace(value: number): eventAdminInfo;

    getEventtype(): number;
    setEventtype(value: number): eventAdminInfo;

    clearParticipantsList(): void;
    getParticipantsList(): Array<user>;
    setParticipantsList(value: Array<user>): eventAdminInfo;
    addParticipants(value?: user, index?: number): user;

    getNguests(): number;
    setNguests(value: number): eventAdminInfo;

    getNparticipants(): number;
    setNparticipants(value: number): eventAdminInfo;


    hasStatisticsdate(): boolean;
    clearStatisticsdate(): void;
    getStatisticsdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStatisticsdate(value?: google_protobuf_timestamp_pb.Timestamp): eventAdminInfo;

    getOcupationpercentage(): number;
    setOcupationpercentage(value: number): eventAdminInfo;

    getStatusmsg(): string;
    setStatusmsg(value: string): eventAdminInfo;

    getEventid(): number;
    setEventid(value: number): eventAdminInfo;

    getAgerestriction(): number;
    setAgerestriction(value: number): eventAdminInfo;


    hasStartdate(): boolean;
    clearStartdate(): void;
    getStartdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartdate(value?: google_protobuf_timestamp_pb.Timestamp): eventAdminInfo;


    hasEnddate(): boolean;
    clearEnddate(): void;
    getEnddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnddate(value?: google_protobuf_timestamp_pb.Timestamp): eventAdminInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): eventAdminInfo.AsObject;
    static toObject(includeInstance: boolean, msg: eventAdminInfo): eventAdminInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: eventAdminInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): eventAdminInfo;
    static deserializeBinaryFromReader(message: eventAdminInfo, reader: jspb.BinaryReader): eventAdminInfo;
}

export namespace eventAdminInfo {
    export type AsObject = {
        state: boolean,
        name: string,
        imgurl: string,
        description: string,
        latitude: string,
        longitude: string,
        eventplace: number,
        eventtype: number,
        participantsList: Array<user.AsObject>,
        nguests: number,
        nparticipants: number,
        statisticsdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        ocupationpercentage: number,
        statusmsg: string,
        eventid: number,
        agerestriction: number,
        startdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        enddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class createEventInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): createEventInfo;

    getImgurl(): string;
    setImgurl(value: string): createEventInfo;

    getDescription(): string;
    setDescription(value: string): createEventInfo;

    getLatitude(): string;
    setLatitude(value: string): createEventInfo;

    getLongitude(): string;
    setLongitude(value: string): createEventInfo;

    getEventplace(): number;
    setEventplace(value: number): createEventInfo;

    getEventtype(): number;
    setEventtype(value: number): createEventInfo;

    getAgerestriction(): number;
    setAgerestriction(value: number): createEventInfo;


    hasStartdate(): boolean;
    clearStartdate(): void;
    getStartdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartdate(value?: google_protobuf_timestamp_pb.Timestamp): createEventInfo;


    hasEnddate(): boolean;
    clearEnddate(): void;
    getEnddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnddate(value?: google_protobuf_timestamp_pb.Timestamp): createEventInfo;

    getUsername(): string;
    setUsername(value: string): createEventInfo;

    getToken(): string;
    setToken(value: string): createEventInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): createEventInfo.AsObject;
    static toObject(includeInstance: boolean, msg: createEventInfo): createEventInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: createEventInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): createEventInfo;
    static deserializeBinaryFromReader(message: createEventInfo, reader: jspb.BinaryReader): createEventInfo;
}

export namespace createEventInfo {
    export type AsObject = {
        name: string,
        imgurl: string,
        description: string,
        latitude: string,
        longitude: string,
        eventplace: number,
        eventtype: number,
        agerestriction: number,
        startdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        enddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        username: string,
        token: string,
    }
}

export class updateEventInfo extends jspb.Message { 
    getId(): number;
    setId(value: number): updateEventInfo;

    getName(): string;
    setName(value: string): updateEventInfo;

    getImgurl(): string;
    setImgurl(value: string): updateEventInfo;

    getDescription(): string;
    setDescription(value: string): updateEventInfo;

    getLatitude(): string;
    setLatitude(value: string): updateEventInfo;

    getLongitude(): string;
    setLongitude(value: string): updateEventInfo;

    getEventplace(): number;
    setEventplace(value: number): updateEventInfo;

    getEventtype(): number;
    setEventtype(value: number): updateEventInfo;

    getAgerestriction(): number;
    setAgerestriction(value: number): updateEventInfo;


    hasStartdate(): boolean;
    clearStartdate(): void;
    getStartdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartdate(value?: google_protobuf_timestamp_pb.Timestamp): updateEventInfo;


    hasEnddate(): boolean;
    clearEnddate(): void;
    getEnddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnddate(value?: google_protobuf_timestamp_pb.Timestamp): updateEventInfo;

    getUsername(): string;
    setUsername(value: string): updateEventInfo;

    getToken(): string;
    setToken(value: string): updateEventInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): updateEventInfo.AsObject;
    static toObject(includeInstance: boolean, msg: updateEventInfo): updateEventInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: updateEventInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): updateEventInfo;
    static deserializeBinaryFromReader(message: updateEventInfo, reader: jspb.BinaryReader): updateEventInfo;
}

export namespace updateEventInfo {
    export type AsObject = {
        id: number,
        name: string,
        imgurl: string,
        description: string,
        latitude: string,
        longitude: string,
        eventplace: number,
        eventtype: number,
        agerestriction: number,
        startdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        enddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        username: string,
        token: string,
    }
}

export class user extends jspb.Message { 
    getId(): number;
    setId(value: number): user;

    getUsername(): string;
    setUsername(value: string): user;

    getName(): string;
    setName(value: string): user;

    getImgurl(): string;
    setImgurl(value: string): user;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): user.AsObject;
    static toObject(includeInstance: boolean, msg: user): user.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: user, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): user;
    static deserializeBinaryFromReader(message: user, reader: jspb.BinaryReader): user;
}

export namespace user {
    export type AsObject = {
        id: number,
        username: string,
        name: string,
        imgurl: string,
    }
}

export class ocupation extends jspb.Message { 

    hasStatisticsdate(): boolean;
    clearStatisticsdate(): void;
    getStatisticsdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStatisticsdate(value?: google_protobuf_timestamp_pb.Timestamp): ocupation;

    getOcupationpercentage(): number;
    setOcupationpercentage(value: number): ocupation;

    getNparticipants(): number;
    setNparticipants(value: number): ocupation;

    getNactiveparticipants(): number;
    setNactiveparticipants(value: number): ocupation;

    getNinvites(): number;
    setNinvites(value: number): ocupation;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ocupation.AsObject;
    static toObject(includeInstance: boolean, msg: ocupation): ocupation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ocupation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ocupation;
    static deserializeBinaryFromReader(message: ocupation, reader: jspb.BinaryReader): ocupation;
}

export namespace ocupation {
    export type AsObject = {
        statisticsdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        ocupationpercentage: number,
        nparticipants: number,
        nactiveparticipants: number,
        ninvites: number,
    }
}

export class ocupationResponse extends jspb.Message { 
    getState(): boolean;
    setState(value: boolean): ocupationResponse;

    clearOcupationstatsList(): void;
    getOcupationstatsList(): Array<ocupation>;
    setOcupationstatsList(value: Array<ocupation>): ocupationResponse;
    addOcupationstats(value?: ocupation, index?: number): ocupation;

    getStatusmsg(): string;
    setStatusmsg(value: string): ocupationResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ocupationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ocupationResponse): ocupationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ocupationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ocupationResponse;
    static deserializeBinaryFromReader(message: ocupationResponse, reader: jspb.BinaryReader): ocupationResponse;
}

export namespace ocupationResponse {
    export type AsObject = {
        state: boolean,
        ocupationstatsList: Array<ocupation.AsObject>,
        statusmsg: string,
    }
}

export class loginInfo extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): loginInfo;

    getPassword(): string;
    setPassword(value: string): loginInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): loginInfo.AsObject;
    static toObject(includeInstance: boolean, msg: loginInfo): loginInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: loginInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): loginInfo;
    static deserializeBinaryFromReader(message: loginInfo, reader: jspb.BinaryReader): loginInfo;
}

export namespace loginInfo {
    export type AsObject = {
        username: string,
        password: string,
    }
}

export class authResponse extends jspb.Message { 
    getState(): boolean;
    setState(value: boolean): authResponse;

    getToken(): string;
    setToken(value: string): authResponse;

    getStatusmsg(): string;
    setStatusmsg(value: string): authResponse;

    getName(): string;
    setName(value: string): authResponse;

    getImgurl(): string;
    setImgurl(value: string): authResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): authResponse.AsObject;
    static toObject(includeInstance: boolean, msg: authResponse): authResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: authResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): authResponse;
    static deserializeBinaryFromReader(message: authResponse, reader: jspb.BinaryReader): authResponse;
}

export namespace authResponse {
    export type AsObject = {
        state: boolean,
        token: string,
        statusmsg: string,
        name: string,
        imgurl: string,
    }
}

export class createUserInfo extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): createUserInfo;

    getName(): string;
    setName(value: string): createUserInfo;

    getEmail(): string;
    setEmail(value: string): createUserInfo;

    getAge(): number;
    setAge(value: number): createUserInfo;

    getImageurl(): string;
    setImageurl(value: string): createUserInfo;

    getOrganization(): string;
    setOrganization(value: string): createUserInfo;

    getJob(): string;
    setJob(value: string): createUserInfo;

    getPassword(): string;
    setPassword(value: string): createUserInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): createUserInfo.AsObject;
    static toObject(includeInstance: boolean, msg: createUserInfo): createUserInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: createUserInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): createUserInfo;
    static deserializeBinaryFromReader(message: createUserInfo, reader: jspb.BinaryReader): createUserInfo;
}

export namespace createUserInfo {
    export type AsObject = {
        username: string,
        name: string,
        email: string,
        age: number,
        imageurl: string,
        organization: string,
        job: string,
        password: string,
    }
}

export class updateUserInfo extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): updateUserInfo;

    getName(): string;
    setName(value: string): updateUserInfo;

    getAge(): number;
    setAge(value: number): updateUserInfo;

    getImageurl(): string;
    setImageurl(value: string): updateUserInfo;

    getOrganization(): string;
    setOrganization(value: string): updateUserInfo;

    getJob(): string;
    setJob(value: string): updateUserInfo;

    getId(): number;
    setId(value: number): updateUserInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): updateUserInfo.AsObject;
    static toObject(includeInstance: boolean, msg: updateUserInfo): updateUserInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: updateUserInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): updateUserInfo;
    static deserializeBinaryFromReader(message: updateUserInfo, reader: jspb.BinaryReader): updateUserInfo;
}

export namespace updateUserInfo {
    export type AsObject = {
        username: string,
        name: string,
        age: number,
        imageurl: string,
        organization: string,
        job: string,
        id: number,
    }
}

export class userStateMsg extends jspb.Message { 
    getState(): boolean;
    setState(value: boolean): userStateMsg;

    getId(): number;
    setId(value: number): userStateMsg;

    getStatusmsg(): string;
    setStatusmsg(value: string): userStateMsg;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): userStateMsg.AsObject;
    static toObject(includeInstance: boolean, msg: userStateMsg): userStateMsg.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: userStateMsg, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): userStateMsg;
    static deserializeBinaryFromReader(message: userStateMsg, reader: jspb.BinaryReader): userStateMsg;
}

export namespace userStateMsg {
    export type AsObject = {
        state: boolean,
        id: number,
        statusmsg: string,
    }
}

export class QRentry extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): QRentry;

    getToken(): string;
    setToken(value: string): QRentry;

    getKeycode(): string;
    setKeycode(value: string): QRentry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QRentry.AsObject;
    static toObject(includeInstance: boolean, msg: QRentry): QRentry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QRentry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QRentry;
    static deserializeBinaryFromReader(message: QRentry, reader: jspb.BinaryReader): QRentry;
}

export namespace QRentry {
    export type AsObject = {
        username: string,
        token: string,
        keycode: string,
    }
}

export class publicInviteInfo extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): publicInviteInfo;

    getEventid(): number;
    setEventid(value: number): publicInviteInfo;

    getToken(): string;
    setToken(value: string): publicInviteInfo;

    getAccept(): boolean;
    setAccept(value: boolean): publicInviteInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): publicInviteInfo.AsObject;
    static toObject(includeInstance: boolean, msg: publicInviteInfo): publicInviteInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: publicInviteInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): publicInviteInfo;
    static deserializeBinaryFromReader(message: publicInviteInfo, reader: jspb.BinaryReader): publicInviteInfo;
}

export namespace publicInviteInfo {
    export type AsObject = {
        username: string,
        eventid: number,
        token: string,
        accept: boolean,
    }
}

export class publicRegisterInfo extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): publicRegisterInfo;

    getEventid(): number;
    setEventid(value: number): publicRegisterInfo;

    getToken(): string;
    setToken(value: string): publicRegisterInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): publicRegisterInfo.AsObject;
    static toObject(includeInstance: boolean, msg: publicRegisterInfo): publicRegisterInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: publicRegisterInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): publicRegisterInfo;
    static deserializeBinaryFromReader(message: publicRegisterInfo, reader: jspb.BinaryReader): publicRegisterInfo;
}

export namespace publicRegisterInfo {
    export type AsObject = {
        username: string,
        eventid: number,
        token: string,
    }
}

export class entryInfoRequest extends jspb.Message { 
    getKeycode(): string;
    setKeycode(value: string): entryInfoRequest;

    getUsername(): string;
    setUsername(value: string): entryInfoRequest;

    getEventid(): number;
    setEventid(value: number): entryInfoRequest;

    getToken(): string;
    setToken(value: string): entryInfoRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): entryInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: entryInfoRequest): entryInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: entryInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): entryInfoRequest;
    static deserializeBinaryFromReader(message: entryInfoRequest, reader: jspb.BinaryReader): entryInfoRequest;
}

export namespace entryInfoRequest {
    export type AsObject = {
        keycode: string,
        username: string,
        eventid: number,
        token: string,
    }
}

export class entryValidation extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): entryValidation;

    getStatusmsg(): string;
    setStatusmsg(value: string): entryValidation;

    getValidating(): boolean;
    setValidating(value: boolean): entryValidation;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): entryValidation.AsObject;
    static toObject(includeInstance: boolean, msg: entryValidation): entryValidation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: entryValidation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): entryValidation;
    static deserializeBinaryFromReader(message: entryValidation, reader: jspb.BinaryReader): entryValidation;
}

export namespace entryValidation {
    export type AsObject = {
        status: boolean,
        statusmsg: string,
        validating: boolean,
    }
}

export class entryAddUser extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): entryAddUser;

    getEventid(): number;
    setEventid(value: number): entryAddUser;

    getGuestusername(): string;
    setGuestusername(value: string): entryAddUser;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): entryAddUser.AsObject;
    static toObject(includeInstance: boolean, msg: entryAddUser): entryAddUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: entryAddUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): entryAddUser;
    static deserializeBinaryFromReader(message: entryAddUser, reader: jspb.BinaryReader): entryAddUser;
}

export namespace entryAddUser {
    export type AsObject = {
        username: string,
        eventid: number,
        guestusername: string,
    }
}

export class entryResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): entryResponse;

    getStatusmsg(): string;
    setStatusmsg(value: string): entryResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): entryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: entryResponse): entryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: entryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): entryResponse;
    static deserializeBinaryFromReader(message: entryResponse, reader: jspb.BinaryReader): entryResponse;
}

export namespace entryResponse {
    export type AsObject = {
        status: boolean,
        statusmsg: string,
    }
}

export class entryParam extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): entryParam;

    getEventid(): number;
    setEventid(value: number): entryParam;

    getToken(): string;
    setToken(value: string): entryParam;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): entryParam.AsObject;
    static toObject(includeInstance: boolean, msg: entryParam): entryParam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: entryParam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): entryParam;
    static deserializeBinaryFromReader(message: entryParam, reader: jspb.BinaryReader): entryParam;
}

export namespace entryParam {
    export type AsObject = {
        username: string,
        eventid: number,
        token: string,
    }
}

export class entryGuestParam extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): entryGuestParam;

    getEventid(): number;
    setEventid(value: number): entryGuestParam;

    getGuestid(): number;
    setGuestid(value: number): entryGuestParam;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): entryGuestParam.AsObject;
    static toObject(includeInstance: boolean, msg: entryGuestParam): entryGuestParam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: entryGuestParam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): entryGuestParam;
    static deserializeBinaryFromReader(message: entryGuestParam, reader: jspb.BinaryReader): entryGuestParam;
}

export namespace entryGuestParam {
    export type AsObject = {
        userid: number,
        eventid: number,
        guestid: number,
    }
}

export class entryGlobalParam extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): entryGlobalParam;

    getEventid(): number;
    setEventid(value: number): entryGlobalParam;

    getToken(): string;
    setToken(value: string): entryGlobalParam;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): entryGlobalParam.AsObject;
    static toObject(includeInstance: boolean, msg: entryGlobalParam): entryGlobalParam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: entryGlobalParam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): entryGlobalParam;
    static deserializeBinaryFromReader(message: entryGlobalParam, reader: jspb.BinaryReader): entryGlobalParam;
}

export namespace entryGlobalParam {
    export type AsObject = {
        username: string,
        eventid: number,
        token: string,
    }
}

export class entryInfo extends jspb.Message { 
    getKeycode(): string;
    setKeycode(value: string): entryInfo;

    getStatus(): boolean;
    setStatus(value: boolean): entryInfo;

    getStatusmsg(): string;
    setStatusmsg(value: string): entryInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): entryInfo.AsObject;
    static toObject(includeInstance: boolean, msg: entryInfo): entryInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: entryInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): entryInfo;
    static deserializeBinaryFromReader(message: entryInfo, reader: jspb.BinaryReader): entryInfo;
}

export namespace entryInfo {
    export type AsObject = {
        keycode: string,
        status: boolean,
        statusmsg: string,
    }
}

export class fileUploadRequest extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): string;
    setName(value: string): fileUploadRequest;


    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): Uint8Array | string;
    getChunk_asU8(): Uint8Array;
    getChunk_asB64(): string;
    setChunk(value: Uint8Array | string): fileUploadRequest;


    getDataCase(): fileUploadRequest.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): fileUploadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: fileUploadRequest): fileUploadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: fileUploadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): fileUploadRequest;
    static deserializeBinaryFromReader(message: fileUploadRequest, reader: jspb.BinaryReader): fileUploadRequest;
}

export namespace fileUploadRequest {
    export type AsObject = {
        name: string,
        chunk: Uint8Array | string,
    }

    export enum DataCase {
        DATA_NOT_SET = 0,
    
    NAME = 1,

    CHUNK = 2,

    }

}

export class fileUploadResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): fileUploadResponse;

    getName(): string;
    setName(value: string): fileUploadResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): fileUploadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: fileUploadResponse): fileUploadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: fileUploadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): fileUploadResponse;
    static deserializeBinaryFromReader(message: fileUploadResponse, reader: jspb.BinaryReader): fileUploadResponse;
}

export namespace fileUploadResponse {
    export type AsObject = {
        id: string,
        name: string,
    }
}
