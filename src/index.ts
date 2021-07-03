import joplin from 'api';
import { ContentScriptType, SettingItemType, ToolbarButtonLocation } from 'api/types';

joplin.plugins.register({
	onStart: async function() {
		await joplin.contentScripts.register(
			ContentScriptType.MarkdownItPlugin,
			'Disable PDF',
			'./disable-pdf.js'
		);
	},
});