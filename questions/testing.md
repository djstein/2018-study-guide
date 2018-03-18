# Testing Questions:

## What are some advantages/disadvantages to testing your code?

* advantages include seeing unexpected changes, ensuring that new code does not
  break exisitng code (if tests are correct)
* disadvantages include shipping to production taking longer, having to update
  tests as part of requirement when new features are added to exisiting code

## What tools would you use to test your code's functionality?

* JS: unit test with enzyme + jest (from Facebook and AirBnB)
* Python: unittest from standard lib
* Java: Junit from standard lib
* Integration tests with the appropriate Selenium Test runner
* make use of these tests using continuous integration platforms such as
  Jenkins, CircleCI, or TravisCI

- What is the difference between a unit test and a functional/integration test?

* integration tests interact with the program in a way a user or automatted
  system would. this shows us what will actually happen when the program is put
  in use. allows us to determine if functions actually correspond to correct
  user actions, full flow
* unit tests only test a set of functions and objects work together, not an
  entire system

- What is the purpose of a code style linting tool?

* linting shows us errors that we make as we write code to a. help develop
  better, remove common mistakes or runtime errors before attempting tests or
  pushing and b. enable other engineers who loook at our code a better
  experience
