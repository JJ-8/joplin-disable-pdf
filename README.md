# Joplin disable markdown renderer

This plugin disables the Markdown renderer / PDF preview (and export) in Joplin.

This plugin can be useful if you encounter performance issues with large notes in Joplin. Even if you hide the PDF preview panel, it is still re-rendered every time you type some characters in the markdown editor. This causes a notable delay in typing.

This plugin solves this issue by always rendering a simple string instead of the whole note. This is much faster and results in better performance.

Please note: by disabling the PDF preview, **you also disable the PDF export and WYSIWYG editor**. If you want to re-enable the Markdown renderer / PDF preview or export, just simply disable this plugin until you need it again.

## Install

You can install this plugin through the built-in Joplin plugin manager.

You can access the plugin manager by Tools -> Options -> Plugins (Joplin -> Preferences -> Plugins).

Enter "Disable markdown renderer" at the top and an "install" button will appear.
