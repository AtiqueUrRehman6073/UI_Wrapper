import { Image } from '../../../app/Models/ImageModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleriaService {
  constructor(private http: HttpClient) {}

  getImages() {
      return this.http
          .get<any>('assets/Dock/files/photos.json')
          .toPromise()
          .then((res:any) => <Image[]>res.data)
          .then((data:any) => {
              return data;
          });
  }
}

