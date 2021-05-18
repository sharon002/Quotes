import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    // { id: 1, name: 'Bethwel', quote: 'Love is a scandal of the personal sort.', author: 'Chekhov' },
    // {
    //   id: 2, name: 'Bethwel', quote: 'Man\'s life is brief, but yet there is no man who cannot boast\
    // that there have been terrible moments in his past.', author: 'Chekhov'
    // },
    // { id: 3, name: 'Bethwel', quote: "You can't have it all, all at once.", author: 'Ruth Ginsberg' },
    // { id: 4, name: 'Bethwel', quote: "All happy families are alike; each unhappy family is unhappy in its own way.", author: ' Leo Tolstoy , Anna Karenina' } 
    // 
    new Quote(1, 'sharon', 'It does not matter how slow you go as long as you do not stop.', 'Chekhov', new Date(2020, 5, 6)),
    new Quote(2, 'Barclay', 'Every thing you can imagine is real.', 'Chekhov', new Date(2016, 5, 6)),
    new Quote(4, 'Boyd', "Whatever you do ,do it well.", ' Leo Tolstoy , Anna Karenina', new Date(2018, 5, 6))

  ];
  showDetails(index: string | number) {
    this.quotes[index].describe = !this.quotes[index].describe;

  }
  deleteQuotes(deletes: any, index: number) {
    if (deletes) {
      this.quotes.splice(index, 1);
    }
  }
  upVote(upvote: any, index: string | number) {
    console.log(index);
    if (upvote) {

      this.quotes[index].upvote += 1;

    }
  }
  downVote(downvote: any, index: string | number) {
    console.log(index);
    if (downvote) {
      this.quotes[index].downvote += 1;

    }
  }
  addQuote(quote: Quote) {
    let len = this.quotes.length;
    quote.id = len + 1;
    this.quotes.push(quote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
