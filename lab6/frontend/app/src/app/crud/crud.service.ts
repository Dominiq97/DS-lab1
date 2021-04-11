import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../crud/product';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiServer = "http://localhost:3000";

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }


  constructor(private httpClient: HttpClient) { }

  create(product): Observable<Product> {
    return this.httpClient.post<Product>
      (this.apiServer + '/products/', JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id) {
    return this.httpClient.delete<Product>(this.apiServer + '/products/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = ''; if (error.error instanceof ErrorEvent) { // Get client-sideerror
      errorMessage = error.error.message;
    } else { // Get server-sideerror
      errorMessage = `Error Code: ${error.status}\nMessage:${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getById(id): Observable <Product> {
    return this.httpClient.get<Product>(this.apiServer + '/products/' + id)
    .pipe(catchError(this.errorHandler)
    )
  }
  update(id, product): Observable<Product>{
    return this.httpClient.put<Product>(this.apiServer + '/products/' + id, JSON.stringify(product),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiServer +'/products/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  editProduct(id) {
    return this.httpClient
      .get(`${this.apiServer}/edit/${id}`);
  }

}



