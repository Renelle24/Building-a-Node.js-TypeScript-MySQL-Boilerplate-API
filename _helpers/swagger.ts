import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

const router = express.Router();

// load swagger file (IMPORTANT: correct path)
const swaggerDocument = YAML.load(
    path.join(__dirname, '../swagger.yaml')
);

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;