# ArnoldC Webpack Loader

A [Webpack][webpack] loader for [ArnoldC][arnoldc].

# Configuration

`npm i arnoldc-loader -D`

In your `webpack.config.js`:

```
module: {
    loaders: [
        { test: /\.arnoldc$/, loader: 'arnoldc' }
    ]
}
```

# Usage

ArnoldC doesn't export functions, but you can load modules to get their side effects.

Example:

`main.js`

```
require('./hello.arnoldc');
```

`hello.arnoldc`

```
IT'S SHOWTIME
TALK TO THE HAND Hello World!
YOU HAVE BEEN TERMINATED
```

[webpack]: http://webpack.github.io/
[arnoldc]: https://www.npmjs.com/package/arnoldc.js
