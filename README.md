# CSESoc Projects Frontend Assessment

In this challenge, you will need to build the frontend for a simple login page.

Currently, the page just consists of a Header and a body containing some text. We need to spruce this page up a little ✨

<p align="center">
  <a href="#specifications">Specifications</a> •
  <a href="#extension">Extension</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#submission">Submission</a>
</p>

<hr />

<h2 id="specifications">1. Specifications 🔧</h2>

#### 1.1 Warmup
Once you have got the frontend up and running, you will notice that on the Header, there is a text that says "Vue is Fun". Your task here is to change it so that it says "Vue is Mega Fun" or "Vue > React".

### 1.2 Footer
No personal project is complete without a footer that says "Made with love..." am I right? Your task is to make a footer that is positioned at the bottom of the page even if the user scrolls anywhere on the page.

#### 1.2 Login Form
- The page shall have a form which allows the user to input their username and password.
- The username field will be displayed as text while the password field will be displayed as password.
- There should be a button that says 'Login'

#### 1.3 Login Request
- When the login button is clicked, there should be a modal popup displaying the message that you will receive from the backend
- One of 2 scenarios can occur after clicking the login button:
  1. The user receives a status 401 response, this can happen if either the username or password field is empty or both are empty (i.e. length === 0)
  2. The user receives a status 200 response, this can happen if both the username and password are not empty (i.e. length > 0)

#### 1.4 Styling
You are free to express your creativity here, the only limit is your imagination. Note that presentation **will be taken into account** when assessing your work.

<hr /> 

<h2 id="extension">2. Extension 🏗️</h2>
There are a few challenges that you can attempt for those sweet extra bonus points:

#### 2.1 Linting
The frontend has a linter set up. Make sure that your code conforms to the linter's style expectations when running the command `pnpm run lint`.

#### 2.2 User Profile Page
Make a profile page for the user when logging in. It is up to you how you want this home page to look like.

### 2.3 Tailwind
Some of our flagship projects such as Jobs Board and Chaos uses Tailwindcss to style our components. Your task is to refactor the codebase so that it uses Tailwindcss.

*Hint: you may want to take a look into routing for Vue*

<hr /> 

<h2 id="getting-started">3. Getting Started 😎</h2>

Starting up the frontend
1. Fork this repository into your own GitHub account.
2. Navigate to the `/frontend` directory and run `pnpm install`.
3. Run `pnpm run dev`.
4. Open a browser and go to the URL provided.

Starting up the backend
1. In a seperate terminal, navigate to the `/backend` directory and run `pnpm install`.
2. Run `pnpm run start`.


<h2 id="submission">4. Submission 🏁</h2>

To make a submission, ensure that your forked repository is public and paste a link to it in your Projects Application in the relevant field.
