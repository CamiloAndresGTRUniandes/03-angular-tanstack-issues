import { sleep } from "@helpers/index";
import { GitHubLabel } from "../interfaces";
import { environment } from "src/environments/environment.development";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getLabels = async (): Promise<GitHubLabel[]> => {
  await sleep(1500); // Simula un retraso de 1 segundo
  try {
    const resp = fetch(
      `${BASE_URL}/labels`, {
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
    return await data as GitHubLabel[];
  } catch (error) {
    throw error;
  }
}
