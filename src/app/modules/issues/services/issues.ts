import { Injectable } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getLabels } from '../actions/get-labels.action';
import { getIssues } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class Issues {

  public labelsQuery = injectQuery(() => ({
    queryKey: ['labels'],
    queryFn: () =>  getLabels()
  }));

  public issuesQuery = injectQuery(() => ({
    queryKey: ['issues'],
    queryFn: () => getIssues()
  }));
}
