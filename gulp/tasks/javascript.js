module.exports = function (gulp, plugins, config, env) {
  return function javascript() {
    return gulp.src('app.js')
      .pipe(env.development(plugins.sourcemaps.init()))
      .pipe(plugins.requirejsOptimize(env.production() ? config.requireJs.prod : config.requireJs.dev))
      .pipe(env.production(plugins.uglify({ output: { comments: 'all' } })))
      .pipe(env.development(plugins.sourcemaps.write('.', { addComment: true })))
      .pipe(gulp.dest(config.build));
  };
};