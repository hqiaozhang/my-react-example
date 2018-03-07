/**
 * @Author:      zhanghq
 * @DateTime:    2017-10-18 11:19:56
 * @Description: 在渝手机排行TOP10数据
 * @Last Modified By:   zhanghq
 * @Last Modified Time:    2017-10-18 11:19:56
 */

import Mock from 'mockjs'
const Random = Mock.Random

export default Mock.mock({
    'code': 1,
    'msg': 'success',
    'result': {
      'inYuTop10': {
        'province|10': [
          {
            'name': '@province',
            'id|+1': ['500242000000', '500236000000', '500238000000', '500101000000', '500229000000'],
            'value|1-1000000000': 1,
            'increase': Random.float(1, 100, 1, 1),
            'flag|1': [0, 1, -1]
          }
        ],
        'city|10': [
          {
            'name|+1': ['恩施(湖北省)', '上海市(上海市)', '广安市(四川省)', '北京市(北京市', '深圳市(广东省)', '达州市(四川省)', '泸州市(四川省)', '广州市(广东省)', '遵义市(贵州省)', '东莞市(广东省)'],
            'value|1-100000': 1,
            'id|+1': ['500242000000', '500236000000', '500238000000', '500101000000', '500229000000'],
            'increase': Random.float(1, 100, 1, 1),
            'flag|1': [0, 1, -1]
          }
        ],
        'abroad|10': [
          {
            'name': '@pick(["俄罗斯", "美国", "墨西哥", "菲律宾", "巴西"])',
            'value|1-100000000': 1,
            'id|+1': ['500242000000', '500236000000', '500238000000', '500101000000', '500229000000'],
            'increase': Random.float(1, 100, 1, 1),
            'flag|1': [0, 1, -1]
          }
        ]
      }
    }
})
