/**
 * @Author:      zhanghq
 * @DateTime:    2017-10-18 11:17:43
 * @Description: 管控任务数量统计数据
 * @Last Modified By:   zhanghq
 * @Last Modified Time:    2017-10-18 11:17:43
 */
import Mock from 'mockjs'
export default Mock.mock({
    'code': 1,
    'msg': 'success',
    'result': {
      'controlTaskCout': {
        'total|1-4000': 1,
        'totalPerson|1-4000': 1,
        'group|1-4000': 1,
        'area|1-4000': 1,
        'taskNumber|1000-400000': 1000,
        'warningRules|1-4000': 1,
        'warningNumber|100000-4000000': 1000 
      }
    }
  }) 

