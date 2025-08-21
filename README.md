-------- React Project with Pre-Commit Hook (using Husky) ------

What is a Pre-Commit Hook?
-> A pre-commit hook is a script that runs automatically before every git commit.
-> In this project, we use a pre-commit hook to run tests and block the commit if any test fails.
-> This ensures that only working and tested code can be committed into the repository.


Why Use Pre-Commit Hooks?
-> Prevents broken code from entering the repository.
-> Ensures all tests pass before committing.
-> Maintains a clean and stable main/master branch.
-> Saves time by catching issues early (before pushing or deploying).


Tech Used
-> Husky


How to apply
-> Create React Project
    >>npx create-react-app pre-commit-using-react
    >>cd pre-commit-using-react

->Install Husky
    >>npm install --save-dev husky
    >>npx husky init

-> Configure Pre-Commit Hook
    Edit .husky/pre-commit and add:
        echo "Running tests before commit..." //any message to check where we are doing correct or not
        npm test -- --watchAll=false

-> Make it executable
    >>chmod +x .husky/pre-commit

Now save all changes and make a test to fail intentionally.
then try to commit the change

You will see there will be test running before any commit

if the test fails the commit will not be made.
if we pass all our test the commit will happen.