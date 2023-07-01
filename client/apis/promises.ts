import request from 'superagent'
import { PledgeFrontEnd, PledgeStatusUpdate } from '../../models/pledge_models'

const rootUrl = '/api/v1/promises'

export async function getPromiseByPromiseId(promiseId: number, token: string): Promise<PledgeFrontEnd> {
  const res = await request
  .get(rootUrl + `/` + promiseId)
  .set('Authorization', `Bearer ${token}`)
    return res.body
}

export async function resolvePromise(promiseUpdate:PledgeStatusUpdate, token:string) { 
  
    console.log(promiseUpdate);
    
  return await request
  .post(rootUrl + '/' + promiseUpdate.promiseId)
  .set('Authorization', `Bearer ${token}`)
  .set('Content-Type', 'application/json')
  .send(promiseUpdate)
}