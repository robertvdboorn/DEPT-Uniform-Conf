import { CanvasClient } from "@uniformdev/canvas";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { apiKey, apiHost, projectId },
} = getConfig();


export const canvasClient = new CanvasClient({
  apiKey: process.env.UNIFORM_API_KEY,
  apiHost: apiHost,
  projectId: projectId,
});
