// Hardcoded secret (for Gitleaks to fail)
const AWS_SECRET_ACCESS_KEY = "AKIA_FAKE_SECRET_FOR_TESTING";

// Unused variable
let unused = 42;

function nested() {
  if (true) {
    if (true) {
      if (true) {
        console.log("Too deeply nested");
      }
    }
  }
}

function main() {
  nested();
  console.log("Running app");
}

main();
