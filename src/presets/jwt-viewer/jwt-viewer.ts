/* eslint-disable import/no-extraneous-dependencies */
import { Preset } from "@stegano/token-transformer";
import chalk from "chalk";

const { log } = console;

/**
 * Apply Formatting to JSON string
 */
const prettyJsonString = (data: string): string => {
  return JSON.stringify(JSON.parse(data), null, 2);
};

function isBase64(data: string) {
  return Buffer.from(Buffer.from(data, "base64").toString(), "utf8").toString("base64") === data;
}

const getJwt = (token: string) => {
  const matches = token.match(/[A-Za-z0-9+/=]{10,}\.[A-Za-z0-9+/=]{5,}\.[A-Za-z0-9+/=]{5,}/g);
  return (
    matches &&
    matches.filter((str) => {
      return str
        .split(".")
        .slice(0, 2)
        .every((partial) => {
          let base64String = partial;
          if (partial.length % 4 !== 0) {
            for (let i = 0; i < 4 - (partial.length % 4); i += 1) {
              base64String += "=";
            }
          }
          return isBase64(base64String);
        });
    })
  );
};

/**
 * A preset that parses JWT
 */
export const JwtViewer: Preset = {
  preProcessors: [
    (token: string) => {
      const tokenList = getJwt(token);
      if (tokenList === null || tokenList.length === 0) {
        log(chalk.bgRed.black("JWT could not be found in the token entered."));
        return {};
      }
      tokenList.forEach((data: string) => {
        const [header, payload, signature] = data.split(".");
        log(chalk.bgBlue.black.bold("# Header(Algorithm)"));
        log("");
        log(chalk.bold(prettyJsonString(Buffer.from(header, "base64").toString("utf-8"))));
        log("");
        log("");
        log(chalk.bgBlue.black.bold("# Payload(Data)"));
        log("");
        log(chalk.bold(prettyJsonString(Buffer.from(payload, "base64").toString("utf-8"))));
        log("");
        log("");
        log(chalk.bgBlue.black.bold("# Signature"));
        log(chalk.bold(signature));
        log("");
        log("");
      });

      return {};
    },
  ],
};

export default JwtViewer;
