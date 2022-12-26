const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  plugins: [

    // to only use some locales & reduce moment.js bundle size
    new MomentLocalesPlugin({
      localesToKeep: ['fr']
    }),

    // to inject global value definitions
    new webpack.DefinePlugin({
      'STABLE23': JSON.stringify(true),
      'EXPERIMENT22': JSON.stringify(false)
    }),


    // display build status system notifications to the user.
    new WebpackNotifierPlugin({         
      alwaysNotify: true,
      title       : 'Testing23',
      contentImage: path.join(__dirname, 'webpack_notifier_bear.jpeg')
    }),
  ]
};


/*
  The only option to customize the build system
  - was to use the "ng eject" command
  - but this isn’t supported anymore since Angular 6.
*/