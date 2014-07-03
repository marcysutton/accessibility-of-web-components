#Accessibility of Web Components
[http://marcysutton.github.io/accessibility-of-web-components/slides.html](http://marcysutton.github.io/accessibility-of-web-components/slides.html)

Video: <a href="https://www.youtube.com/watch?v=BgvDZZ8Ms8c&feature=youtu.be" target="_blank" title="Link opens in a new window">https://www.youtube.com/watch?v=BgvDZZ8Ms8c</a>

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

## Browser requirements
To view the demos included in the slides, you will need the latest version of Chrome with the `Enable Experimental JavaScript` flag turned on or Firefox 29 with the `dom.webcomponents.enabled` flag set to `true`.

## Installation

Should you want to run this presentation from source for some reason, the **full setup** gives you access to all reveal.js features and plugins such as speaker notes as well as the development tasks needed to make changes to the source.

The full experience of the infamous taco-summoning Web Component requires a Twilio account and set-up of a [separate repository](https://github.com/marcysutton/twilio-app). The Twilio App repo will allow you to create a Node server for Twilio authentication. Otherwise, the button simply shows taco gifs. Cool, but less magical.

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
