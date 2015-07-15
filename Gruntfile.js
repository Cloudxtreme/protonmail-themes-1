"use strict";

var path = require("path");

var CHAR_LIMIT = 9000;

var paths = {
  dev: ".tmp",
  dist: "dist",
  src: "src"
};

module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-postcss');

  grunt.initConfig({

    clean: {
      dev: paths.dev,
      dist: paths.dist
    },

    compile: {
      options: {files: paths.src + "/**/*.json"},
      dev: {options: {dest: paths.dev, ending: "min.css"}},
      dist: {options: {dest: paths.dist, ending: "min.css"}}
    },

    less: {
      options: {
        paths: [paths.src]
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({browsers: "last 2 versions, > 5%"}),
          require('cssnano')()
        ]
      },
      dev: {src: paths.dev + "/*.css"},
      dist: {src: paths.dist + "/*.css"}
    },

    watch: {
      less: {
        files: paths.src + "/**/*",
        tasks: ["dev_once"]
      }
    },

    checklimit: {
      dev: {options: {files: paths.dev + "/*.css"}},
      dist: {options: {files: paths.dist + "/*.css"}}
    }

  });

  grunt.registerMultiTask("compile", function () {
    var target = this.target;
    var options = this.options();
    var files = {};
    grunt.file.expand(options.files).forEach(function (filename) {
      var theme = grunt.file.readJSON(filename), cwd = path.dirname(filename);
      var destinationFilename = theme.name;
      if (theme.hasOwnProperty("version")) {
        destinationFilename += "-v" + theme.version;
      }
      destinationFilename += "." + (options.ending || "css");
      files[path.join(options.dest, destinationFilename)] = path.join(cwd, theme.main);
    });
    grunt.config.set("less." + target + ".files", files);
    grunt.task.run("less:" + target, "postcss:" + target, "checklimit:" + target);
  });

  grunt.registerMultiTask("checklimit", function () {
    var options = this.options();
    var files = grunt.file.expand(options.files);
    for (var i = 0; i < files.length; i ++) {
      var len = grunt.file.read(files[i]).length;
      if (len > CHAR_LIMIT) {
        grunt.fail.warn("File " + files[i] + " failed - " + (CHAR_LIMIT - len) + " characters to much.");
      } else {
        grunt.log.ok("File " + files[i] + " ok - " + (CHAR_LIMIT - len) + " characters spare.");
      }
    }
  });

  grunt.registerTask("dev_once", ["compile:dev"]);
  grunt.registerTask("dev", ["dev_once", "watch"]);

  grunt.registerTask("dist", ["clean:dist", "compile:dist"]);
  grunt.registerTask("default", ["dist"]);
};
