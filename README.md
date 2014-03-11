# WP Gist

## Description

WP Gist adds support for [GitHub Gist](https://gist.github.com/) embeds in [WordPress](http://wordpress.org/).

## Documentation

Please visit the [WP Gist](http://manovotny.github.io/wp-gist/) website for a full description of features and installation.

## Local Development Environment

WP Gist, both the plugin and the website, is built using [Ruby](https://www.ruby-lang.org/en/) (needed for Sass compilation), [Node.js](http://nodejs.org/) & [NPM](https://www.npmjs.org/), [Bower](http://bower.io/), [Grunt](http://gruntjs.com/), [Sass](http://sass-lang.com/), and [Jekyll](http://jekyllrb.com/). 

If you wish to contribute to the project, you'll need to install these components.

### Install Ruby

Mac:

1. Mac's already come with Ruby installed, so there is nothing for you to do!

Windows:

1. Install [Ruby Installer](http://www.rubyinstaller.org/).

### Install NPM

Mac:

1. Install [Homebrew](http://brew.sh/) by running the following command: `ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"`
2. Install Node.js and NPM by running the following command: `brew install node`

Windows:

1. Head to the Node.js Download page
2. Click on "Windows Installer" to begin downloading
3. Run installer to install Node.js and NPM

### Install Bower

Run the following command: `npm install -g bower`

### Install Grunt

Run the following command: `npm install -g grunt-cli`

### Install Sass

Run the following command: `gem install sass`

### Install Jekyll

Run the following command: `gem install jekyll`

## Plugin Development

After everything above is installed, You need to: 

1. Fork and clone the WP Gist repository
2. Navigate to the local WP Gist directory via command line
3. Run the following commands to build the environment
    * `npm install`
    * `grunt`

This will download the project dependencies and build the project.

A full list of Grunt tasks are available in the `grunt/tasks.js` file within the project. You'll use the `grunt` and `grunt build` commands most often.

When committing your changes, please make a pull request to the `master` branch, unless otherwise specified.

## GitHub Pages Development

1. Navigate to the local WP Gist directory via command line
2. Make sure the `gh-pages` branch is checked out
3. Run the `jekyll serve --watch --baseurl ''` command to start Jekyll and have it watch for changes, which will auto regenerate pages
4. Go to [http://localhost:4000/](http://localhost:4000/) in your browser to see the WP Gist GitHub Page
5. Use `⌃C` (Mac) or `Ctrl+C` (Windows) to stop the local server.

When committing your changes, please make a pull request to the `gh-pages` branch.