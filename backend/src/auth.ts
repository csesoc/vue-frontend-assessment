import * as express from "express";

/**
 * Do not modify this file.
 */
export default class Auth {
  /**
   * Attempts to authenticate a user with the given credentials.
   * @param req The request object.
   * @param res The response object.
   * @return A success message and status if the credentials are valid,
   *         otherwise returns a message and status indicating failure.
   */
  public static async AuthenticateUser(req: express.Request<{username: string, password: string}>, res: express.Response) {
    if (!req.body) {
      return res.status(401).json({status: 401, message:"Invalid username or password"})
    }
    const body = { username: req.body.username, password: req.body.password };
    console.log(body);
    if (body.username.length !== 0 && body.password.length !== 0) {
      return res.status(200).json({
        status: 200,
        message: 'Login Successful',
      });
    } else {
      return res.status(401).json({
        status: 401,
        message: 'Login Failed',
      });
    }
  }
}