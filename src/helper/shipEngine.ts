import { ShipEngine } from "shipengine";

const shipEngineInstance: ShipEngine = new ShipEngine({
  apiKey: process.env.SHIPENGINE_API_KEY as string
});