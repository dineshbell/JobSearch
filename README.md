# Sign Up Page
The Sign Up Page component is a React-based web page that allows users to create a new account. Users can input their name, email, date of birth, and password to sign up. The page includes form validation and error handling to ensure a smooth user experience.

# Features
Input Fields: Users can enter their name, email, date of birth, and password in the provided input fields.
Form Validation: Input fields are validated to ensure data accuracy.
Error Handling: Users receive error messages for invalid or missing input fields.
Redirect to Sign In: Upon successful sign-up, users are redirected to the sign-in page (/login).
Toasts for Notifications: Toast notifications are used to display error messages to users.
# Usage
Filling Out the Form:

Enter your name in the "Name" input field.
Enter your email address in the "Email" input field.
Select your date of birth using the date picker.
Enter your desired password in the "Password" input field.
Submitting the Form:

Click the "Submit" button to submit your sign-up information.
If any input fields are missing or invalid, error messages will be displayed using toast notifications.
Redirecting to Sign In:

After successful sign-up, users are redirected to the sign-in page.
If any errors occur during sign-up, appropriate error messages are displayed via toast notifications.
# Signin Image
<img width="960" alt="signin" src="https://github.com/dineshbell/JobSearch/assets/121668531/42285206-f471-4693-9d51-0aafddb3b34a">
# Job Search App Landing Page

The Job Search App Landing Page component is a React-based web application that allows users to search for jobs based on programming languages. Users can enter a language, and the application fetches job listings related to that language using the Muse API.
# Features
Search by Language: Users can input a programming language to search for related jobs.
Dynamic Job Listings: Jobs are fetched dynamically from the Muse API based on the user's search query.
Job Details: Users can view detailed information about a specific job by clicking the "View Details" button.
Responsive Design: The landing page is designed to be responsive and accessible on various devices.
# Technologies Used
React: The frontend of the application is built using React.js, a popular JavaScript library for building user interfaces.
Muse API: Job listings are fetched from the Muse API, which provides a vast collection of job data.
React Router: React Router is used for navigation within the application.
CSS: Styling and layout are achieved using CSS for an appealing user interface
# LandingPage Image
<img width="960" alt="landing" src="https://github.com/dineshbell/JobSearch/assets/121668531/2e9b8d84-dd23-4b5a-9d6a-884b7292383d">

# Job Details Page
The Job Details Page component is a React-based web page that displays detailed information about a specific job. It receives job details as props from the previous page (likely the landing page) and allows users to view information such as the job requirement, company name, and company website. Users can also navigate to the job application form from this page.

# Usage
The JobDetails component receives job details as props, typically from a previous page that lists job opportunities. It displays this information and provides a button to navigate to the application form.

# Rendering Job Details:

The component receives job details via the location.state object (React Router's useLocation hook) passed from the previous page.
It displays the job requirement, company name, and company website based on the received props.
Navigating to Application Form:

The component provides a button labeled "Apply."
When the user clicks the "Apply" button, they are redirected to the job application form page (/apply).
# JobDetails Page Image
<img width="960" alt="apply" src="https://github.com/dineshbell/JobSearch/assets/121668531/c92ef0bc-1a54-464e-a87e-a19188ae531d">

# Job Application Form Page
The Job Application Form Page component is a React-based web page that allows users to submit their job applications. Users can enter their name, email, attach a cover letter, and upload their resume. Upon submission, the application provides a confirmation message with a preview of the submitted detail
# Features
Input Fields: Users can enter their name, email, and cover letter note in the provided input fields.
Resume Upload: Users can upload their resume file.
Form Validation: Input fields are required, and proper validation ensures data accuracy.
Submission Confirmation: Upon successful submission, users see a confirmation message with a preview of their submitted details.
# Usage
Filling Out the Form:

Enter your name in the "Name" input field.
Enter your email address in the "Email" input field.
Write your cover letter or additional notes in the "Cover Letter Note" textarea.
Click the "Choose File" button to upload your resume file.
Submitting the Form:

Click the "Apply" button to submit your job application.
Confirmation Page:

After successful submission, you will be redirected to a confirmation page displaying the submitted details, including your name, email, cover letter note, and resume filename (if uploaded).
# Job Application Image
<img width="960" alt="application" src="https://github.com/dineshbell/JobSearch/assets/121668531/c1c615de-5bb9-4555-84e5-3fcc7b5122ac">

# Preview Image
<img width="960" alt="submit" src="https://github.com/dineshbell/JobSearch/assets/121668531/4b3961f6-5e65-47a3-932e-ab2571f64ca1">


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
