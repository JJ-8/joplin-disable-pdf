module.exports = {
	default: function (context) {
		return {
			plugin: function (markdownIt, _options) {
				markdownIt.renderer.render = function (tokens, options, env) {
					return "PDF is disabled";
				};
			},
		};
	},
};
