<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖  StreamHub ](#--streamhub-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Usage](#usage)
    - [Run tests](#run-tests)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->
# 📖  StreamHub <a name="about-project"></a>

> 'StreamHub' operates as a single-page website, leveraging the TV Maze open API to access comprehensive information about a wide array of movies and television series. This platform welcomes anyone to explore the showcased shows and films, enabling them to express their appreciation through likes and provide insightful comments based on their viewing experience. It serves as a user-friendly hub where individuals can interact with their favorite content and engage with the community by sharing their thoughts and reactions.
## 🛠 Built With <a name="built-with"></a>
- Technology: HTML, CSS & JS
- Tools: VS Code, GIT, GITHUB

### Tech Stack <a name="tech-stack"></a>
<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></li>
  </ul>
</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Features -->

### Key Features <a name="key-features"></a>

Involvement API Integration:

> Utilizes the Involvement API to record user interactions such as likes, comments, and reservations.
Ensures seamless data synchronization with the Involvement API for real-time updates.

User-Friendly Interfaces:

> Home Page: Presents a user-friendly interface displaying a list of items retrieved from the selected API.
Comments Popup: Offers a detailed view of selected items with associated comments.
Reservations Popup (For Groups of 3 Students): Provides a reservation feature tailored for group interactions.

Efficient Data Retrieval:

> Loads data from the selected API to populate the home page with a list of items.
Fetches data from the Involvement API to display item likes, comments, and reservations.

Minimized API Requests:

> Ensures optimized performance by limiting API requests to only two:
One to the base API for data retrieval.
One to the Involvement API for user interaction recording and updates.

Interactive User Actions:

> "Like" Interaction: Allows users to express their appreciation by clicking the "Like" button, recording interactions in the Involvement API, and updating the screen accordingly.
"Comments" Interaction: Enables users to view and post comments with a seamless popup interface.
"Reservations" Interaction (For Groups of 3 Students): Facilitates group reservations with an intuitive popup.

Consistent UI Design:

> Adheres to the provided wireframes for layout while allowing for customization of design elements including colors, typography, and spacing.
Maintains a cohesive design language across all interfaces.

Header and Navigation:

> Home Page Header and Navigation: Provides a familiar and structured navigation experience consistent with the provided mockup.
User-friendly navigation aids in seamless exploration of the platform's content.

Footer Design:

> Home Page Footer: Mirrors the design of the provided mockup, ensuring a polished and professional appearance.
> 
Counter Functionality:

> Displays item counts across all interfaces:
Home Page: Shows the number of items.
Comments Popup: Reflects the number of comments.
Reservations Popup (For Groups of 3 Students): Displays the number of reservations.

Unit Testing with Jest:

> Implements unit tests using the Jest testing library to verify the accuracy of counter functions.
Ensures robust and reliable functionality across the application.

Version Control and Collaboration:

> Sets up a GitHub repository and follows Gitflow for efficient version control and collaborative development.
> 
Webpack Configuration:

> Configures Webpack to streamline the development workflow, including bundling and asset management.
These key features collectively create an engaging and efficient web application, StreamHub, which empowers users to interact with content, leave comments, and make reservations while maintaining a consistent and visually appealing user interface.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## 💻 Getting Started <a name="getting-started"></a>
To get a local copy up and running, follow these steps.

### Prerequisites

You have to use this tools in your local machine.

- NPM
- GIT & GITHUB
- Any Code Editor (VS Code, Brackets, etc)

### Setup

Clone this repository to your desired folder:
Example commands:

```sh
  cd my-folder
  git init # if not initialized git on your folder
  git clone git@github.com:Titus-Kiplagat/Taskade.git
  cd to-do-list
  npm install # to install dependencies
```


### Usage
To run the project, execute the following command:

> Open live server on you editor


### Run tests

To run tests, run the following command on terminal:
Example commands:

Test for webhint errors
```sh
	npx hint .
```

Test for stylelint errors
```sh
  npx stylelint "**/*.{css,scss}"
```

Test for eslint errors
```sh
	npx eslint .
```

Trigger the build process of the project
```sh
	npm run build
```

Start the project 
```sh
	npm start
```

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>
👤 **Shinn Thant Swam Ye**
- GitHub: [@Pi1998](https://github.com/Pi1998)
  

👤 **Ben**
- GitHub: [@Goldinium](https://github.com/Goldinium)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- Limit the number of like that a user can give to a single movie
- Enable unlike feature which has been liked


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>
Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page]().

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>
Your support is crucial to the success of this project! There are ways you can contribute and show your support:

  - Provide Feedback: If you've tried out the project or have any suggestions for improvement, we would love to hear from you. Your feedback is invaluable in shaping the future direction of the project.

  - Give a ⭐️ if you like this project!


Remember, your support matters! Whether it's spreading the word, providing feedback, reporting issues, contributing code, or making a donation, every action makes a difference. Together, we can make this project even better.

Thank you for your support and for being a part of this journey!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to give credit to list of contributors:

- Microverse Team

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
