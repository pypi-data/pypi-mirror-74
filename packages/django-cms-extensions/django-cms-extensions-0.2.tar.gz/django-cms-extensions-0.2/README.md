# Django CMS Extensions
## Installation
`pip install django-cms-extensions`

## Features
### HTML-Export
Once django-cms-extensions are installed you can export every page from the toolbar (Page -> Export).
Pages will be exported to `$EXPORT_ROOT/$SITE/$PAGE_LANGCODE/$PAGE_URL`.

#### Settings
```
AUTO_EXPORT = False
EXPORT_ROOT = 'html'
```
