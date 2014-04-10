var LIVERELOAD_PORT = 35729;
var APP_PORT = 9001;

module.exports = function (grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: APP_PORT,
                    hostname: 'localhost',
                    base: "",
                    livereload: LIVERELOAD_PORT
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%= connect.server.options.port %>/index.html'
            }
        },
        watch: {
            scripts: {
                files: [
                    'src/**/*.js',
                    'src/**/*.html',
                    'src/**/*.css',
                    'css/*.css',
                    'index.html',
                ],
                options: {
                    livereload: LIVERELOAD_PORT
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('server', [
        'connect',
        'open',
        'watch'
    ]);
};