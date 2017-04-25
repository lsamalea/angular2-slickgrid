"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const Rx_1 = require('rxjs/Rx');
(function (NotificationType) {
    NotificationType[NotificationType["Error"] = 0] = "Error";
    NotificationType[NotificationType["UpdateAvailable"] = 1] = "UpdateAvailable";
    NotificationType[NotificationType["UpdateDownloaded"] = 2] = "UpdateDownloaded";
})(exports.NotificationType || (exports.NotificationType = {}));
var NotificationType = exports.NotificationType;
(function (CollectionChange) {
    CollectionChange[CollectionChange["ItemsReplaced"] = 0] = "ItemsReplaced";
})(exports.CollectionChange || (exports.CollectionChange = {}));
var CollectionChange = exports.CollectionChange;
class CancellationToken {
    constructor() {
        this._isCanceled = false;
        this._canceled = new Rx_1.Subject();
    }
    cancel() {
        this._isCanceled = true;
        this._canceled.next(undefined);
    }
    get isCanceled() {
        return this._isCanceled;
    }
    get canceled() {
        return this._canceled;
    }
}
exports.CancellationToken = CancellationToken;
//commnent lsamalea: it's better if each type is string.
class FieldType {
    constructor() {
        this.string = "string";
        this.string = "boolean";
        this.string = "integer";
        this.string = "decimal";
        this.string = "date";
        this.string = "unknown";
    }
}
FieldType.readonly = string;
FieldType.readonly = boolean;
FieldType.readonly = integer;
FieldType.readonly = decimal;
FieldType.readonly = date;
FieldType.readonly = unknown;
exports.FieldType = FieldType;
