// package: file
// file: eventApp.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class infoId extends jspb.Message { 
    getIdevento(): number;
    setIdevento(value: number): infoId;


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
    }
}

export class eventStateMsg extends jspb.Message { 
    getState(): boolean;
    setState(value: boolean): eventStateMsg;

    getId(): number;
    setId(value: number): eventStateMsg;


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
    }
}

export class user extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): user;

    getName(): string;
    setName(value: string): user;

    getOrganization(): string;
    setOrganization(value: string): user;

    getJob(): string;
    setJob(value: string): user;

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
        username: string,
        name: string,
        organization: string,
        job: string,
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
    }
}

export class entryParam extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): entryParam;

    getEventid(): number;
    setEventid(value: number): entryParam;


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
        userid: number,
        eventid: number,
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
    getUserid(): number;
    setUserid(value: number): entryGlobalParam;

    getEventid(): number;
    setEventid(value: number): entryGlobalParam;


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
        userid: number,
        eventid: number,
    }
}

export class entryInfo extends jspb.Message { 
    getKeycode(): string;
    setKeycode(value: string): entryInfo;


    hasExpiredate(): boolean;
    clearExpiredate(): void;
    getExpiredate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpiredate(value?: google_protobuf_timestamp_pb.Timestamp): entryInfo;


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
        expiredate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class metaData extends jspb.Message { 
    getName(): string;
    setName(value: string): metaData;

    getType(): string;
    setType(value: string): metaData;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): metaData.AsObject;
    static toObject(includeInstance: boolean, msg: metaData): metaData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: metaData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): metaData;
    static deserializeBinaryFromReader(message: metaData, reader: jspb.BinaryReader): metaData;
}

export namespace metaData {
    export type AsObject = {
        name: string,
        type: string,
    }
}

export class file extends jspb.Message { 
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): file;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): file.AsObject;
    static toObject(includeInstance: boolean, msg: file): file.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: file, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): file;
    static deserializeBinaryFromReader(message: file, reader: jspb.BinaryReader): file;
}

export namespace file {
    export type AsObject = {
        content: Uint8Array | string,
    }
}

export class fileUploadRequest extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): metaData | undefined;
    setMetadata(value?: metaData): fileUploadRequest;


    hasFile(): boolean;
    clearFile(): void;
    getFile(): file | undefined;
    setFile(value?: file): fileUploadRequest;


    getRequestCase(): fileUploadRequest.RequestCase;

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
        metadata?: metaData.AsObject,
        file?: file.AsObject,
    }

    export enum RequestCase {
        REQUEST_NOT_SET = 0,
    
    METADATA = 1,

    FILE = 2,

    }

}

export class fileUploadResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): fileUploadResponse;

    getImgurl(): string;
    setImgurl(value: string): fileUploadResponse;

    getStatus(): status;
    setStatus(value: status): fileUploadResponse;


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
        name: string,
        imgurl: string,
        status: status,
    }
}

export enum status {
    PENDING = 0,
    IN_PROGRESS = 1,
    SUCCESS = 2,
    FAILED = 3,
}
