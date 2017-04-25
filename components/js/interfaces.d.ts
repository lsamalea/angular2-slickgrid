import { Observable } from 'rxjs/Rx';
export declare enum NotificationType {
    Error = 0,
    UpdateAvailable = 1,
    UpdateDownloaded = 2,
}
export interface ISelectionRange {
    startRow: number;
    endRow: number;
    startColumn: number;
    endColumn: number;
}
export declare enum CollectionChange {
    ItemsReplaced = 0,
}
export interface IObservableCollection<T> {
    getLength(): number;
    at(index: number): T;
    getRange(start: number, end: number): T[];
    setCollectionChangedCallback(callback: (change: CollectionChange, startIndex: number, count: number) => void): void;
}
export declare class CancellationToken {
    private _isCanceled;
    private _canceled;
    cancel(): void;
    isCanceled: boolean;
    canceled: Observable<any>;
}
export declare class FieldType {
    static readonly: any;
    string: string;
    static readonly: any;
    string: string;
    static readonly: any;
    string: string;
    static readonly: any;
    string: string;
    static readonly: any;
    string: string;
    static readonly: any;
    string: string;
}
export interface IColumnDefinition {
    id?: string;
    name: string;
    type: FieldType;
    asyncPostRender?: (cellRef: string, row: number, dataContext: JSON, colDef: any) => void;
    formatter?: (row: number, cell: any, value: any, columnDef: any, dataContext: any) => string;
}
export interface IGridColumnDefinition {
    id: string;
    type: number;
}
export interface IGridDataRow {
    row?: number;
    values: any[];
}
