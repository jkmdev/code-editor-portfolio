# Code Editor Portfolio

A developer's portfolio website disguised as, well, a code editor.
The idea is to have a bunch of fun easter eggs and gimmicks to make it more editor-like, but for now it's pretty vanilla.

If you happen to like this idea you're free to fork this and tweak it a bit to make it your own. My only request is that - if you develop a novel new feature that you're willing to share - you make a new PR with said changes.

### V1 Milestones [In progress]

The end product should look very similar to [this](https://i.imgur.com/8JynzX8.jpg).

- Add contact button and modal
- Make site more compatible with all browsers, not just chrome
- Use github API to show updates to developer's account
- Display blog posts durectly from Medium account
- Create section to display codepen creations
- Create SVG animation for title in about section

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node.js (LTS/stable or current version)
- npm package manager
- [Angular, angular-cli](https://angular.io/guide/quickstart)


### Set-Up

Fork this project, then turn it into a github pages repo by going to the `Github Pages` section in `Settings`. Make sure your Github Pages site source is being built from the `gh-pages` branch instead of `master`. If it's not already an option then see the deployment section and deploy the site first.

To deploy the webpage locally run `ng serve` and visit `http://localhost:4200/`.

## Running the tests

Run `ng test` to run the tests. Currently there's just unit tests for the page's components.

## Deployment

### On Linux

If you haven't already, install `angular-cli-ghpages` by running `npm i angular-cli-ghpages --save-dev`.

Then in your `scripts` object in `package.json`, change the site url in `build` to the url of your github pages site.

Run `npm run deploy` in your code-editor-portfolio folder. Wait a minute for the changes to take effect after seeing a message indicating successful deployment.

Go to the `Settings` page again, and make sure your Github Pages site source is being built from the `gh-pages` branch instead of `master`.

### Other OS

This site was primarilly developed and tested on Linux. However getting it to work on MacOS or Windows could be straight-forward, it might just include removing `sudo` from the `deploy` command in the `package.json` `scripts` object.

## Built With

* [Angular](https://angular.io/) - Frontend framework
* [Angular CLI](https://cli.angular.io/) - Deployment
* [Github Pages](https://pages.github.com/) - Hosting

## Contributing

There's no super strict rules for contributions. It's preferable that you write tests for anything you make but I can just do that after the fact if you you decide to not make tests for your version of this site.

