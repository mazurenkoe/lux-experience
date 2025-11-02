import { Octokit } from "octokit";
import { PullRequest } from "./models/PullRequest";

export class GitHubClient {
 private client: Octokit;
 private owner: string;
 private repo: string;

 constructor(owner: string, repo: string) {
  this.owner = owner;
  this.repo = repo;
  this.client = new Octokit({});
 }

 async getOpenPullRequests(): Promise<PullRequest[]> {
  const prs = await this.client.paginate("GET /repos/{owner}/{repo}/pulls", {
   owner: this.owner,
   repo: this.repo,
   state: "open",
  });

  return prs.map(
   (pr: { title: string; created_at: string; user: any; html_url: string }) =>
    new PullRequest(pr.title, pr.created_at, pr.user.login, pr.html_url)
  );
 }

 convertPullRequestsToCSV(pullRequests: PullRequest[]): string {
  const formatCsvValue = (s: string) =>
   /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;

  const header = "PR name,created date,author,url";
  const rows = pullRequests.map((i) =>
   [formatCsvValue(i.title), i.created_at, i.author, i.html_url].join(",")
  );

  return [header, ...rows].join("\n");
 }
}
