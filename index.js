import * as core from "@actions/core";
import * as github from "@actions/github";

try {
  const name = core.getInput("first-name");
  console.log(`hello ${name}`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  const payload = JSON.stringify(github.context.payload);
  console.log(`the payload is ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
