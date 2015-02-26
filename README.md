# grunt-juice v0.0.2

> Given HTML, juice will inline your CSS properties into the style attribute.



## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-juice --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-juice');
```



## The "juice" task
_Run this task with the `grunt juice` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.
### Options

This task uses the same options as those passed to the juice module.
The original documentation can be found [here](https://github.com/LearnBoost/juice#juicefilepath-options-callback).

#### extraCss
Type: `String`  
Default: `""`

Extra css to apply to the file.

#### applyStyleTags
Type: `Boolean`  
Default: `true`

Whether to inline styles in `<style></style>`.

#### removeStyleTags
Type: `Boolean`  
Default: `true`

Whether to remove the original `<style></style>` tags after (possibly) inlining the css from them.

#### preserveMediaQueries
Type: `Boolean`  
Default: `false`

Preserves all media queries (and contained styles) within `<style></style>` tags as a refinement when `removeStyleTags` is `true`. Other styles are removed.

#### applyWidthAttributes
Type: `Boolean`  
Default: `false`

Whether to use any CSS pixel widths to create `width` attributes on elements set in `juice.widthElements`.

#### webResources
Type: `Object`  
Default: `{}`

An options object that will be passed through to web-resource-inliner for juice functions that will get remote resources (`juiceResources` and `juiceFile`).

### Usage Examples

```js
grunt.initConfig({
	juice: {
		options: {},
		dist: {
			files: [{
				src: 'source/emails/template.html',
				dest: 'public/emails/template.html'
			}]
		}
	}
})
```

This task supports all the file mapping format Grunt supports. Please read [Globbing patterns](http://gruntjs.com/configuring-tasks#globbing-patterns) and [Building the files object dynamically](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically) for additional details.

---

Task submitted by [Filip Mares](http://www.filip-mares.co.uk/)