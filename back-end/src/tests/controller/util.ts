type Req = {
  body?: any;
  params?: any;
};

type Res = {
  send?: any;
  status?: any;
  json?: any;
};

export const mockRequest = () => {
  const req: Req = {};
  req.body = jest.fn().mockReturnValue(req);
  req.params = jest.fn().mockReturnValue(req);
  return req;
};

export const mockResponse = () => {
  const res: Res = {};
  res.send = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};
