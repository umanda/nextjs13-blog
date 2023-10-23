## Title Formatter

Custom string formatter that converts any string into
[Title Case](https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case) for the rules

This package converts any string into title case. This means only using capital letters for the principal words.
Articles, conjunctions, and prepositions do not get capital letters unless they start or end the title

| input                        | output                          |
| ---------------------------- | ------------------------------- |
| `snowWhiteAndTheSevenDwarfs` | Snow White and the Seven Dwarfs |
| `NewcastleUponTyne`          | Newcastle Upon Tyne             |
| `brighton_on_sea`            | Brighton on Sea                 |
| `apple_releases_new_ipad`    | Apple Releases New iPad         |
| `7-food-trends`              | 7 Food Trends                   |

> The package contains a list of words that use some sort of special casing, for example: McDonalds, iPhone, and
> YouTube.

## Installation

```bash
$ npm install @directus/format-title
```

## Usage

The package by default converts camelCase, PascalCase, underscore, and "regular" sentences to
[Title Case](http://www.grammar-monster.com/lessons/capital_letters_title_case.htm)

```js
formatTitle(string, [separator]);

formatTitle('snowWhiteAndTheSevenDwarfs');
// => Snow White and the Seven Dwarfs
```

You can provide an optional `separator` regex as a second parameter to support splitting the string on different
characters. By default, this regex is set to `/\s|-|_/g`.

## Contributing

If your favorite specially cased word isn't being capitalized properly,
[please open an issue](https://github.com/directus/format-title/issues/new) or submit a pull request!

### Requirements

- NodeJS LTS
- pnpm 7.5.0 or newer

### Commands

The following `pnpm` scripts are available:

- `pnpm lint` – Lint the code using Eslint / Prettier
- `pnpm test` – Run the unit tests

Make sure that both commands pass locally before creating a Pull Request.

### Pushing a Release

_This applies to maintainers only_

1. Create a new version / tag by running `pnpm version <version>`. Tip: use `pnpm version patch|minor|major` to
   auto-bump the version number
1. Push the version commit / tag to GitHub (`git push && git push --tags`)

The CI will automatically build and release to npm, and generate the release notes.
