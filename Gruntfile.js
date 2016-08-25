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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-imageoptim');
  
  grunt.registerTask('default', ['uglify', 'cssmin', 'imagemin', 'imageoptim']);

};
