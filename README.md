# Font Override

A Firefox WebExtension for choosing website font families and adjusting text size. The popup is designed for narrow mobile screens with a Firefox-inspired dark interface and purple accent.

## Features
- Global font and text-size settings
- Per-website overrides
- Enable/disable switch
- Built-in fonts including **Playfair Display**
- Custom font-family field
- Local settings storage; no browsing data is transmitted

## Playfair Display
Selecting Playfair Display loads the typeface from Google Fonts. It requires an internet connection. Other custom fonts generally need to be installed on the device or provided by the website.

## Install / test
This repository contains the extension source. Firefox Android release installation requires a Mozilla-signed add-on; simply renaming a ZIP to XPI does not sign it. For Android Nightly, use Mozilla's supported add-on debugging/installation workflow or publish the add-on through addons.mozilla.org.

## Permissions
- `storage`: save preferences locally
- `tabs`: identify the active website for per-site settings
- `<all_urls>`: apply the chosen font on websites

## Build
The source files are at the repository root. To package locally, ZIP the contents of this repository with `manifest.json` at the archive root. For public Firefox distribution, submit the package to [addons.mozilla.org](https://addons.mozilla.org/developers/) for signing.
