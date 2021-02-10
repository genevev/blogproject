import router from './auth/userRoute';
import GenericRes from '../helpers/response';

const apiVersion = '/api/v1';

class MainRoute { 

    static runApp(app) { 
        app.use(apiVersion, router);

        app.get(apiVersion, (req, res) => {
            GenericRes.ok(res, 200, 'Welcome to my blog_api');
        });

        app.all('/', (req, res) => { 
            GenericRes.error(res, 409, 'Failed');
        });

        app.use('*', (req, res) => { 
            GenericRes.error(res, 404, 'Router not found');
        });
    }
}


export default MainRoute;
 