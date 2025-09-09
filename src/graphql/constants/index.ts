let STORE_URL: string;
let APP_KEY: string;
let APP_TOKEN: string;

// Ensure this is on the server
if (typeof window === "undefined") {
  STORE_URL = `https://stylewatchio.vtexcommercestable.com.br`;
  APP_KEY = "vtexappkey-stylewatchio-LFDVQY";
  APP_TOKEN = "VHAFPJULVWSCSDYOKEXWYKLKLNHKAKZWAODSETJJJXOTQJZCOGCFBQINCNKMFUOBJSTJUTCAVLGMLVQSAQEOZHPRLQQNGSXSAYSWQKBHUBIWOVWLITEBKCBVDECAEFGD";
} else {
  throw new Error("This file must only be used on the server");
}

export { APP_KEY, APP_TOKEN, STORE_URL };
