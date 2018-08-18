const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const glob = require('glob');
const chalk = require('chalk');

const server = new Hapi.Server({
    port: 3000,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'dist')
        }
    }
});

const provision = async () => {

    await server.register(Inert);

    glob(
        // adds all .js files from routes/ to routes
        Path.join(__dirname, 'routes', `**/*.js`), 

        // ignore files with underscores & t
        { ignore: `**/*/_*.js`}, 

        // add routes to server & log them in console (in a fancy way)
        (err, files) => {
            if (err) return err;

            files.forEach(f => {
                const routes = require(f);
                server.route(routes);

                console.log(' ')
                console.log('------------------------')
                console.log(' ')
                routes.map(r => console.log(`   ${chalk.magenta(r.method)} -> ${chalk.cyan(r.path)}`))
            });
        }
    )

    await server.start();

    console.log('Server running at:', server.info.uri);
};

provision();