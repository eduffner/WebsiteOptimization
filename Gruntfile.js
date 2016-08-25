module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      dist: {
        files: [{
          expand: true,
          src: ['js/*.js','!js/*.min.js', 'views/js/*.js', '!views/js/*.min.js'],
          dest: 'destdir',
          rename: function(dest, src) { return '' + src.replace('.js', '.min.js'); }
        }]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          src: ['css/*.css', '!css/*.min.css', 'views/css/*.css','!views/css/*.min.css'],
          dest: 'destdir',
          rename: function(dest, src) { return '' + src.replace('.css', '.min.css'); }
        }]
      }
    },

    imagemin: {
     dist: {
        options: {
          optimizationLevel: 5
        },
        files: [{
           expand: true,
           src: ['**/*.{png,jpg,gif}', '!node_modules/**/*.{png,jpg,gif}'],
           dest: 'dist/',
           rename: function(dest, src) {return '' + src; }
        }]
     }
    },

    imageoptim: {
      myTask: {
        src: ['views/images/', 'img/']
      }
    },

    inlinecss: {
        main: {
            options: {
            },
            files: {
                'index.html': 'index.html'
            }
        }
    },

    // cacheBust: {
    //   taskName: {
    //       options: {
    //           assets: ['views/images/pizzeria.jpg']
    //       },
    //       src: ['index.html']
    //   }
    // }, 

    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
              width: 400,
              suffix: "",
              quality: 60
            }]
        },
        files: [{
          expand: true,
          src: ['views/images/pizzeria.jpg'],
          dest: 'views/images/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-inline-css');
  grunt.loadNpmTasks('grunt-cache-bust');
  grunt.loadNpmTasks('grunt-responsive-images');
  
  grunt.registerTask('default', ['uglify', 'cssmin', 'imagemin', 'imageoptim', 'inlinecss', /*'cacheBust',*/'responsive_images']);

};
