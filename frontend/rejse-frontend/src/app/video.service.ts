import {Injectable} from '@angular/core';
import {FileSystemFileEntry} from "ngx-file-drop";
import {HttpClient,HttpRequest, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {UploadVideoResponse} from "./upload-video/UploadVideoResponse";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

private baseUrl = 'http://localhost:8080/api/videos';

  constructor(private http: HttpClient) {
  }



    /* return fileEntry.file(file => {
      const fd = new FormData();
      fd.append("file", file, file.name);
console.warn(this.httpClient.post<UploadVideoResponse>('http://localhost:8080/api/videos', fd));
      return this.httpClient.post<UploadVideoResponse>('http://localhost:8080/api/videos', fd);
    }) */

}
