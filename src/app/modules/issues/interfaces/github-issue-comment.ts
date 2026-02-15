export interface GitHubIssueComment {
  url:                      string;
  html_url:                 string;
  issue_url:                string;
  id:                       number;
  node_id:                  string;
  user:                     User;
  created_at:               Date;
  updated_at:               Date;
  body:                     string;
  author_association:       AuthorAssociation;
  pin:                      null;
  reactions:                Reactions;
  performed_via_github_app: null;
}

export enum AuthorAssociation {
  Contributor = "CONTRIBUTOR",
  None = "NONE",
}

export interface Reactions {
  url:         string;
  total_count: number;
  "+1":        number;
  "-1":        number;
  laugh:       number;
  hooray:      number;
  confused:    number;
  heart:       number;
  rocket:      number;
  eyes:        number;
}

export interface User {
  login:               string;
  id:                  number;
  node_id:             string;
  avatar_url:          string;
  gravatar_id:         string;
  url:                 string;
  html_url:            string;
  followers_url:       string;
  following_url:       string;
  gists_url:           string;
  starred_url:         string;
  subscriptions_url:   string;
  organizations_url:   string;
  repos_url:           string;
  events_url:          string;
  received_events_url: string;
  type:                Type;
  user_view_type:      UserViewType;
  site_admin:          boolean;
}

export enum Type {
  User = "User",
}

export enum UserViewType {
  Public = "public",
}
