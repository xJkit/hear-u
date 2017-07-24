# HearU

HearU is an app for multimedia operations, including the following features:

* Sound recording
* Basic file systems
* Google cloud platform integration (OAuth)

## Module Environments

Because the scenario of `creact-react-app` is designed for general purpose, they don't want too much customization. For module import, please use `.env` file of **NODE_PATH** princlple rather than babel-import-resolver or webpack module resolves.

You can import any top-level modules under `/src` directory owing to **NODE_PATH=src** in `.env` file.

## license

MIT
