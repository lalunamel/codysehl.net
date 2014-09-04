exports.config =
	plugins:
		jaded:
			staticPatterns: /^app(\/|\\)(.+)\.jade$/
			jade:
				pretty: yes
	files:
		javascripts:
			joinTo:
				'js/index.js': /^app/
				'js/vendor.js': /^vendor/
			order:
				before: []

		stylesheets:
			joinTo:
				'css/index.css': 'app/styl/app.styl'
			order:
				before: []
				after: []