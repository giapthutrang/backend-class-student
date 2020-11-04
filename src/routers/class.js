const Routers = express.Router();
const Controller = require('../controllers/class');
Routers.get('/',Controller.getAllClass);
Routers.get('/class/:id',Controller.getStudentInClass);
Routers.get('/student/:id',Controller.getStudentId)
