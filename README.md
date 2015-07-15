# protonmail-themes by frissdiegurke

This repository contains themes for the web-interface of [ProtonMail](https://protonmail.ch).

The main part is a base-theme which handles many variables to re-style the web-interface.

In fact all other themes are just using the variables to tune the behavior of the base-theme.

Currently I'm restricted to 9k characters, so the following styles are missing yet:

* */contacts*
* message-view */m/...*
* */settings#labels-filters*
* */settings#settings* - aliases
* attachments
* `.alert-success`, `.alert-* a` (e.g. */report-bug*)
* `#labelMore > #labelLis` (e.g. */inbox*)
* `#sidebar .number`
* am I missing something?

**If you're an ProtonMail-Dev please increase the limit of 9k characters to at least 15k or 20k :-)**

## Installation

All themes are written in LESS and the compiled (automated with `grunt`) CSS-content may be pasted into
[your account-settings](https://protonmail.ch/settings#theme).

The compressed (release) versions may be found within 

## Custom Themes

### Dev Environment

Run `npm i -g grunt-cli` as **root**.

Run `npm i` as **non-root** user.

### Create a custom theme

So it's really simple to create your own ones, just provide a **.json**-file containing
 
 * `name` - The filename of resulting css-files (without ending)
 * `main` - The entry-point of your LESS files
 * `version` - [Optional] A version-suffix for file-names

anywhere within the *src/* directory and run `grunt dev` or `grunt dist` (latter is equivalent to `grunt`) for
compilation.

Hint: *fdg* is short for my nickname, so consider storing **your** themes within any other sub-directory.

## Available themes

### Base Theme ([fdg-base](https://raw.github.com/frissdiegurke/protonmail-themes/master/dist/fdg-base-v0.0.1.min.css)) v0.0.1

This is the code base used for all other themes, with code-switches via variables etc.

The default variables create a dark theme with blue and brown colors.

[![home](https://raw.github.com/frissdiegurke/protonmail-themes/master/screenshots/base-messages.png)](https://raw.github.com/frissdiegurke/protonmail-themes/master/screenshots/base-messages.png)
[![home](https://raw.github.com/frissdiegurke/protonmail-themes/master/screenshots/base-settings.png)](https://raw.github.com/frissdiegurke/protonmail-themes/master/screenshots/base-settings.png)

### Dark Green ([fdg-dark-green](https://raw.github.com/frissdiegurke/protonmail-themes/master/dist/fdg-dark-green-v0.0.1.min.css)) v0.0.1

Dark background, Green, Turkey.

[![home](https://raw.github.com/frissdiegurke/protonmail-themes/master/screenshots/dark-green-messages.png)](https://raw.github.com/frissdiegurke/protonmail-themes/master/screenshots/dark-green-messages.png)
[![home](https://raw.github.com/frissdiegurke/protonmail-themes/master/screenshots/dark-green-settings.png)](https://raw.github.com/frissdiegurke/protonmail-themes/master/screenshots/dark-green-settings.png)
