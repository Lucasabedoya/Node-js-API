import app from './app'
import { swaggerDocs } from './swagger';

const main = () => {

    app.listen(app.get('port'), () => {
        console.log(`🚀 server on port ${app.get('port')}`);
        swaggerDocs( app, 4000 )
    });
};

main();