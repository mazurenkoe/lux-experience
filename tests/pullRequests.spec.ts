import { GitHubClient } from "../src/api/externalApi/gitHub/GitHubClient";
import { expect, test } from "./fixtures/test-fixture";
import * as fs from "fs";
import * as path from "path";

const DIRECTORY = "test-results";
const FILE_NAME = "pull-requests.csv";

test(`Get opened pull-requests`, async () => {
 const client = new GitHubClient("appwrite", "appwrite");
 const pullRequests = await client.getOpenPullRequests();
 const csvContent = client.convertPullRequestsToCSV(pullRequests);

 const outputDir = path.join(process.cwd(), DIRECTORY);
 const outputFile = path.join(DIRECTORY, FILE_NAME);
 fs.mkdirSync(outputDir, { recursive: true });
 fs.writeFileSync(outputFile, csvContent, "utf-8");

 expect(fs.existsSync(outputFile), "CSV file hasn't been created").toBeTruthy();
});
