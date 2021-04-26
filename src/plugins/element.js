import { ElButton, ElProgress } from 'element-plus';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default app => {
  app.use(ElButton);
  app.use(ElProgress);
};
