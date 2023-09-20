module.exports = {
	default: function (context) {
		return {
			plugin: function (markdownIt, _options) {
				markdownIt.renderer.render = function (tokens, options, env) {
					return "Markdown renderer is disabled";
				};
			},
		};
	},
};
