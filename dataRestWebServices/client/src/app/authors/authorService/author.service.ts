import { Injectable } from '@angular/core';
import { Authors } from '../authorModel/author.model';
import { Book } from 'src/app/books/model/book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authors: Authors[] = [

    new Authors(1, 'Bob', 'T', [new Book(1001, 'Tech', 'Introduction to Angular', 50.25, [], 2017)], 'Expert en Angular et développement web.'),
    new Authors(2, 'Jane', 'C', [new Book(1003, 'Kids', 'A Fantastic Story', 12.25, [], 2009)], 'Auteur prolifique dans le domaine de la littérature pour enfants.'),
    new Authors(3, 'Chef', 'Z', [new Book(1004, 'Cook', 'The Best Shawarmas', 18.99, [], 1978)], 'Chef célèbre et auteur de livres de cuisine.')
    new Authors(4, 'Alice', 'M', [new Book(1005, 'Science', 'Quantum Physics Simplified', 75.00, [], 2018)], 'Physicienne renommée et vulgarisatrice scientifique.'),
    new Authors(5, 'Leo', 'P', [new Book(1006, 'Mystery', 'The Lost Key', 20.45, [], 2020)], 'Écrivain primé dans le genre du roman policier et thriller.'),
    new Authors(6, 'Sophia', 'L', [new Book(1007, 'Romance', 'A Love to Remember', 15.99, [], 2015)], 'Auteur de best-sellers dans le domaine de la romance contemporaine.'),
    new Authors(7, 'Mark', 'D', [new Book(1008, 'History', 'The Ancient World', 55.75, [], 2012)], 'Historien et auteur de plusieurs ouvrages sur les civilisations anciennes.'),
    new Authors(8, 'Emily', 'R', [new Book(1009, 'Adventure', 'The Journey Beyond', 22.50, [], 2019)], 'Exploratrice et écrivaine spécialisée dans les récits d’aventure.'),
    new Authors(9, 'Tom', 'V', [new Book(1010, 'Biography', 'Life of a Visionary', 30.00, [], 2021)], 'Biographe renommé connu pour ses portraits inspirants de figures influentes.'),
    new Authors(10, 'Clara', 'S', [new Book(1011, 'Fantasy', 'The Enchanted Forest', 40.20, [], 2016)], 'Auteure de romans fantastiques acclamés par la critique.'),
    new Authors(11, 'Ravi', 'K', [new Book(1012, 'Self-help', 'Master Your Mind', 25.50, [], 2014)], 'Coach en développement personnel et auteur de plusieurs ouvrages motivants.'),
    new Authors(12, 'Maria', 'J', [new Book(1013, 'Travel', 'Wonders of the World', 35.00, [], 2010)], 'Globetrotteuse et auteure de récits de voyage fascinants.')

];


  getAuthor(id: number): Observable<Authors | null> {
    const author = this.authors.find(a => a.id === id) || null;
    return of(author);



  }

}
