module.exports = function( grunt ) {

	grunt.initConfig( {

		express: {
			game: {
				options: {
					script: "server.js"
				}
			}
		},

		open: {
			game: {
				path: "http://127.0.0.1:9000/"
			}
		}

	} );

	grunt.loadNpmTasks( "grunt-open" );
	grunt.loadNpmTasks( "grunt-express-server" );

	grunt.registerTask( "default", [ "open:game", "express:game" ] );
};
