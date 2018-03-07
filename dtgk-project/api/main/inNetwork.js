import Mock from 'mockjs'

export const inNetworkData = () => {
  return Mock.mock({
    'code': 1,
      'msg': 'success',
      'result': [
        {
          'inNetwork': {
            'terminal|1-10000': 1,
            'controlArea|1-1000': 1
          }
        }
      ]
  })
}