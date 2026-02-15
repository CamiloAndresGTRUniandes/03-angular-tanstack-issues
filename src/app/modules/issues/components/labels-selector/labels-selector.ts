import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { GitHubLabel } from '@modules/issues/interfaces';

@Component({
  selector: 'issues-labels-selector',
  imports: [NgStyle],
  templateUrl: './labels-selector.html'
})
export default class LabelsSelector {
  labels = input.required<GitHubLabel[]>();
 }
