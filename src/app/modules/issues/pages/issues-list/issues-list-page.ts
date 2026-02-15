import {  Component, inject } from '@angular/core';
import { IssueItem } from '@modules/issues/components/issue-item/issue-item';
import LabelsSelector from '@modules/issues/components/labels-selector/labels-selector';
import { Issues } from '@modules/issues/services/issues';


@Component({
  selector: 'app-issues-list-page',
  imports: [LabelsSelector, IssueItem],
  templateUrl: './issues-list-page.html',
})
export default class IssuesListPage {

  public issuesService = inject(Issues);
  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }
  get issuesQuery() {
    return this.issuesService.issuesQuery;
  }

}
