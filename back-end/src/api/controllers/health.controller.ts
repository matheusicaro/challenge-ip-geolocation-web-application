import { Request, Response } from 'express';
import { Logger } from '../../config/logger';
import { Health } from '../models';

export default class AuthController {
  /**
   * Controller designed to obtain application health status
   *
   * @param  {Request} req
   * @param  {Response} res
   * @returns Promise<Response<Health>>
   */
  public static async getHealth(req: Request, res: Response): Promise<Response<Health>> {
    try {
      return res.status(200).json(new Health('ONLINE', new Date()));
    } catch (error) {
      Logger.error(error);
      return res.status(500).json(new Health('FAILED', new Date()));
    }
  }
}
