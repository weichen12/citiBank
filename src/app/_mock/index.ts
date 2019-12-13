import Mock from 'mockjs';
import { infoApi } from './appInfo';

Mock.mock('/\/api\/msdk\/proxy\/query_common_credit/', infoApi.cardInfo);
