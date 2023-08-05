# Token Transformer CLI Presets
![NPM License](https://img.shields.io/npm/l/token-transformer-presets)
![NPM Downloads](https://img.shields.io/npm/dw/token-transformer-presets)

[`token-transformer-cli`](https://www.npmjs.com/package/token-transformer-cli) official presets. 🥳

## Installation

The easiest way to install [`token-transformer-presets`](https://www.npmjs.com/package/token-transformer-presets) is with [npm](https://www.npmjs.com/).

```bash
npm install token-transformer-presets token-transformer-cli -g # To use `token-transformer-presets`, you also need to install `token-transformer-cli`
```

## Quick Starts

Get started quickly with [`token-transformer-presets`](https://www.npmjs.com/package/token-transformer-presets)

* **Convert Zeplin design token to a CSS file.**
  ```bash
  tt run -p token-transformer-presets/zeplin-css -t <tokenFilePath>
  ```

* **Convert Zeplin design token to a SCSS file.**
  ```bash
  tt run -p token-transformer-presets/zeplin-scss -t <tokenFilePath>
  ```

* **Parsing JWT tokens and displaying them on the screen.**
  ```bash
  tt run <token> -p token-transformer-presets/jwt-viewer # or `tt -p token-transformer-presets/jwt-viewer` -t <tokenFilePath>
  ```

### Quick Setting Example

This configuration sets Token Transformer CLI to run with `jwt-viewer` preset as the default.

* Create a dedicated CLI configuration file.
  ```bash
  cd ~ && tt init --cli 
  ```

* Save the `jwt-viewer` preset configuration.
  ```bash
  tt config set -n presets -v token-transformer-presets/jwt-viewer
  ```
* Runt Token Transformer CLI with `jwt-viewer`
  ```bash
  tt run "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
  ```