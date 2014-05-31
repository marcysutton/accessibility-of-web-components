#Accessibility of Web Components
[http://marcysutton.github.io/accessibility-of-web-components/slides.html](http://marcysutton.github.io/accessibility-of-web-components/slides.html)

By [Marcy Sutton](http://marcysutton.com)<br>
Developer at [Substantial](http://substantial.com)<br>
twitter: [@marcysutton](http://twitter.com/marcysutton)

##Presented at:
* JSConf US, May 30 2014
* Seattle JS, May 15 2014
* Inclusive Design 24, May 15 2014
* JSConf Australia (Accessibility of the Shadow DOM), April 10 2014

##Accessibility features
This presentation uses Reveal.js along with a custom plugin I wrote for improved accessibility. (Separate repo coming soon)
* Dynamic skip navigation
* Really hidden offscreen slides (requires linear transitions)
* Slide focus management

## Installation
Should you want to run this presentation from source for some reason, the **full setup** gives you access to all reveal.js features and plugins such as speaker notes as well as the development tasks needed to make changes to the source.

### Building from source locally
Some reveal.js features require that presentations run from a local web server. The following instructions will set up such a server as well as all of the development tasks needed to make edits to the reveal.js source code.

1. Install [Node.js](http://nodejs.org/)

2. Install [Grunt](http://gruntjs.com/getting-started#installing-the-cli)

4. Clone the reveal.js repository
```
$ git clone git@github.com:hakimel/reveal.js.git
```

5. Navigate to the reveal.js folder
```
$ cd reveal.js
```

6. Install dependencies
```
$ npm install
```

7. Serve the presentation and monitor source files for changes
```
$ grunt serve
```

8. Open <http://localhost:8000> to view your presentation

You can change the port by using `grunt serve --port 8001`.

## License

MIT licensed

Copyright (C) 2013 Hakim El Hattab, http://hakim.se
