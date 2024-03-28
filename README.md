# Laravel + Vue + Playwright testing demo

This project has been setup in order to provide an example of how playwright.js can be utilised within a Laravel installation.

### Running Playwright test

The playwright test file is located @../e2e/example.spec.js. The test is end-to-end and registers a new user. The test uses faker.js to randomise user data.

In order to run the test, two CLI processes need to be ran in parallel.

The first is:

    php artisan serve.

The second is:

    npx playwright test --ui.

Once the second command is ran, a new Playwright Test window will appear. Within the left pane of the window, 'example.spec.js' should be visible. Click the dropdown to the left of the text 'example.spec.js' to drill down into the test. There should now be a 'Complete registration process' test, which can be ran by hovering over the text and clicking the play button next to the text (please see below before running the test).

Note: One may have to click on 'Projects', which is located above the 'example.spec.js' text in order to tick which browsers one would prefer to run the test within.

Once one has selected all the browser environments one wishes to run the test within, click the play button next to the 'Complete registration process' text. One can click the dropdown arrows in order to drill down and see each individual test running.

One should see the test running and all tests should pass. If a warning message appears regarding 'Teardown time', open up the 'example.spec.js' file in a code editor and edit line 18, 'test.setTimeout(60000)'. The timeout is currently set to one minute, but when an instance of playwright is ran on different machines, the teardown process may take longer. Adjust the 'test.setTimeout(60000)' to 'test.setTimeout(70000)' initially and increment if necessary.

Once the tests have been ran one can use the dropdown arrows located next to the text 'Complete registration process' and 'User can Register as new user' to drill down into the individual tests for each browser environment. If one clicks a listed browser (e.g. chromium) one will see a visualised run through of the test in the top-pane of the Playwright window. One can hover and move along the pane to view the progress of the test. One can also click on each test instruction to view the state of the application at that point in the test.

### SQLite database management

The sqlite database file is located @../database/database.sqlite. This will be the default testing database as 'DB_CONNECTION=sqlite' is used within the .env file.

In order to run the below scripts inside the CLI, first run: php artisan tinker

##### Check if users within User

    $users = User::all()

##### Delete a single user

    use DB;

    $userId = 2;

    DB::delete('DELETE FROM users WHERE id = ?', [$userId]);

#### Delete all users

    use DB

    DB::delete('DELETE FROM users')
