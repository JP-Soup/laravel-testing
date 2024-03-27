# Laravel + Vue + Playwright testing

This project has been setup in order to provide an example of how playwright.js can be utilised within a Laravel installation.

### Running Playwright test

The playwright test file is located @../e2e/example.spec.js. The test is an end-to-test which registers a new user. The test uses faker.js to randomize user data.

In order to run the test, two CLI processes need to be ran in parallel. The first is: php artisan serve. The second is: npx playwright test --ui.

Once the second command is ran, a new Playwright Test window will appear. Within the left pane of the window, example.spec.js should be visible. Click the dropdown to the left of the text 'example.spec.js' to drill down into the file and locate the test. There should now be a 'Complete registration process' test, which can be ran by clicking the play button next to the text.

Note: You may have to click on Projects, which is located above the 'example.spec.js' text in order to tick which browsers you would prefer to run the test within.

Once you have selected all the browser environments you wish to run the test within, click the play button next to the 'Complete registration process' text.

You should see the test running and all tests should pass. If a warning message appears regarding 'Teardown time', open up 'example.spec.js' file in a code editor and edit line 18 'test.setTimeout(60000)'. The timeout is set one minute, but when an instance of playwright is ran on different machines, the teardown process may take longer. I advise adjusting the 'test.setTimeout(60000)' to 'test.setTimeout(70000)' initially and incrementing if necessary.

### SQLite database management

The sqlite database file is located @../database/database.sqlite. This will be the default testing database as DB_CONNECTION=sqlite is used within the .env file.

In order to run the below scripts inside the CLI, first run: php artisan tinker

##### Check if users witin User

    $users = User::all()

##### Delete a user

    use DB;

    $userId = 2;

    DB::delete('DELETE FROM users WHERE id = ?', [$userId]);

#### Delete all users

    use DB

    DB::delete('DELETE FROM users')
