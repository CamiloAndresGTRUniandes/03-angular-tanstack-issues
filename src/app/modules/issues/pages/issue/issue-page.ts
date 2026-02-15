import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { Issue } from '@modules/issues/services/issue';
import { IssueComment } from '@modules/issues/components/issue-comment/issue-comment';

@Component({
  selector: 'issue-page',
  imports: [RouterLink, IssueComment],
  templateUrl: './issue-page.html',
})
export default class IssuePage {

  route = inject(ActivatedRoute);
  issueService = inject(Issue);

  issueNumber = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('number') ?? ''),
      tap(number => this.issueService.setIssueNumber(number))
    )
  );
  issueQuery = this.issueService.issueQuery;
  issueCommentsQuery = this.issueService.issueCommentsQuery;
 }
