# Netflix clone using Angular 16
## Introducing "Cineflix" – Your Ultimate Movie Destination!
Discover "Cineflix," an Angular-based web app that offers:
Experience the magic of cinema like never before with "Cineflix," a stunning Angular-based web application. We've meticulously crafted every aspect of this platform to bring you an unparalleled movie-watching experience.

## Breathtaking Landing Pages
Dive into a world of cinematic wonder as you explore our beautiful landing pages. From captivating banners to curated lists of trending, action, adventure, animation, comedy, documentary, science fiction, and thriller movies, you'll find something for every taste.
## Effortless Movie Discovery:
With our user-friendly filter functionality, finding your next favorite movie is a breeze. Whether you're in the mood for action-packed adventures or heartwarming comedies, "Cineflix" has you covered.
## Immersive Movie Details:
Get up close and personal with your chosen movies on our movie details pages. Dive into the plot, cast, and all the essential information you need to make your movie night a success.

"Cineflix" is more than just a streaming platform; it's your ticket to a world of cinematic excellence. Join us today and embark on a journey through the best that cinema has to offer.

## Prerequisites
### Angular 16
To ensure a smooth development process and optimal performance for an Angular project, it is recommended to have the following prerequisites in place:
1. Install Node.js: Angular requires Node.js and npm (Node Package Manager) to be installed on your machine. Visit the official Node.js website (https://nodejs.org) and download the LTS (Long Term Support) version suitable for your operating system. Run the installer and follow the instructions to complete the installation.
2. Verify Node.js and npm installation: Open a command prompt or terminal and type the following commands to verify that Node.js and npm are installed correctly:
 ```bash
    node -v
 ```
  ```bash
    npm -v
 ```
 3. Install Angular CLI: Angular provides a Command Line Interface (CLI) tool that simplifies the development process. Install the Angular CLI globally by running the following command in your command prompt or terminal:
  ```bash
    npm install -g @angular/cli
 ```
 4. Verify Angular CLI installation: After the installation is complete, verify that the Angular CLI is installed correctly by running the following command:
   ```bash
    ng version
 ```
 5. Create a new Angular project: To create a new Angular project, navigate to the desired directory in your command prompt or terminal and run the following command:
  ```bash
    ng new project-name
 ```
Replace "project-name" with the desired name for your project.

6. Navigate to the project directory: Change your working directory to the newly created project folder using the following command:
  ```bash
    cd project-name
 ```
7. Run the development server: Start the development server to run and test your Angular application by running the following command:
  ```bash
    ng serve
 ```
# Movies App API Documentation
To use the "https://www.themoviedb.org" Open API in an Angular app, you can follow these steps:
1. Sign up and obtain an API key: Visit the Themoviedb.org website ("https://www.themoviedb.org") and sign up for an account. Once you have an account, navigate to the API section and generate an API key. This key will be required to access the MovieDb services.
2. Create a service file: In your Angular project, create a new service file to encapsulate the logic for making API requests. Run the following command in your terminal to generate the service file:
  ```bash
    ng generate service movie
 ```
3. Import HttpClient: Open the generated weather.service.ts file and import the HttpClient module from @angular/common/http:
  ```bash
    import { HttpClient } from '@angular/common/http';
 ```
4. Inject HttpClient: Inject the HttpClient module in the constructor of the service:
  ```bash
    constructor(private http: HttpClient) { }
 ```
5. Make API requests: Add the baseUrl and apiKey in environment.ts file. For example, you can define a object like this:
  ```bash
export const environment = {
    production: false,
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: 'YOUR_PRIVATE_KEY'
};
 ```
Replace 'YOUR_PRIVATE_KEY' with the API key obtained from the TheMovieDb.org website.
6. Use the service in a component: In your Angular component where you want to fetch movies data, import the service and inject it in the constructor:
  ```bash
import { MovieService } from './movie.service';

constructor(private movieService: MovieService) { }
}
 ```
7. Make API requests from the component: Call the getMovieList method from the service in your component, passing the desired location as an argument:
  ```bash
import { MovieService } from './movie.service';

constructor(private movieService: MovieService) { }
}
 ```
8. Handle the movie data: In the subscribe method, you can handle the received weather data according to your application's requirements. Update your component's properties or render the data in the template as needed.

Remember to import the necessary modules in your app module or respective feature modules, such as HttpClientModule from @angular/common/http.

### Project Screenshots:
### Home Page
![Home](https://github.com/randhirk413/weather-app-using-angular/assets/114358610/a47209d7-f67b-4236-a381-982dfe5d606a)

### Trending Movies
![Trending](https://github.com/randhirk413/weather-app-using-angular/assets/114358610/78840de7-bb8b-4e4c-b866-8477de84e347)

### Movies List
![Movies](https://github.com/randhirk413/weather-app-using-angular/assets/114358610/a6487893-0545-484c-8539-d00eb8edd42b)

### Filter Movies
![Filter](https://github.com/randhirk413/weather-app-using-angular/assets/114358610/d0196c4e-c865-4402-9993-9272dfd57188)

### Movie's Details with cast & crew
![Details](https://github.com/randhirk413/weather-app-using-angular/assets/114358610/9cc885c4-3988-4bb8-a823-62150618172f)

