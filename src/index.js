// Hardcoded secret (for Gitleaks to fail)
const AWS_SECRET_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE";

// Unused variable
let unused = 42;

// Vulnerable eval usage (for SonarQube to fail)
const input = "2 + 2";
const result = eval(input); // ⚠️ Code injection risk

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
  console.log(result);
}

main();
