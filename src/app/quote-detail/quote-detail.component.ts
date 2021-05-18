import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote!: Quote;
  // @Output() submit = new EventEmitter<boolean>();
  @Output() upVote = new EventEmitter<boolean>();
  @Output() downVote = new EventEmitter<boolean>()
  @Output() quotesDelete = new EventEmitter<boolean>();

  quoteDelete(deletes: boolean) {
    this.quotesDelete.emit(deletes);
  }
  quoteUpvote(upvote: boolean) {
    this.upVote.emit(upvote);
  }
  quoteDownvote(downvote: boolean) {
    this.downVote.emit(downvote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
