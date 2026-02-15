import { sleep } from "@helpers/index";
import { GitHubIssue } from "../interfaces";
import { environment } from "src/environments/environment.development";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssues = async (): Promise<GitHubIssue[]> => {
  await sleep(1500); // Simula un retraso de 1.5 segundos
  try {
    const resp = fetch(
      `${BASE_URL}/issues`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GITHUB_TOKEN}`
      },
    });
    const data = resp.then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
    if (!data) throw new Error('No data received');
    return await data as GitHubIssue[];

  } catch (error) {
    throw error;
  }
}
