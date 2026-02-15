import { NgStyle } from '@angular/common';
import {  Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GitHubIssue, State } from '@modules/issues/interfaces';

@Component({
  selector: 'issue-item',
  imports: [NgStyle, RouterLink],
  templateUrl: './issue-item.html'
})
export class IssueItem {
  issue = input.required<GitHubIssue>();

  get isOpen() {
    return this.issue().state === State.Open;
  }
}
