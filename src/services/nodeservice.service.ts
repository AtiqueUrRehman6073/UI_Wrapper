import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';

@Injectable()
export class NodeService {
    constructor(private http: HttpClient) {}

    getFiles() {
        return this.http
            .get<any>('assets/Dock/files/files.json')
            .toPromise()
            .then((res:any) => <TreeNode[]>res.data);
    }

    getLazyFiles() {
        return this.http
            .get<any>('assets/Dock/files/files-lazy.json')
            .toPromise()
            .then((res:any) => <TreeNode[]>res.data);
    }

    getFilesystem() {
        return this.http
            .get<any>('assets/Dock/files/filesystem.json')
            .toPromise()
            .then((res:any) => <TreeNode[]>res.data);
    }

    getLazyFilesystem() {
        return this.http
            .get<any>('assets/Dock/files/filesystem-lazy.json')
            .toPromise()
            .then((res:any) => <TreeNode[]>res.data);
    }
}