import { CookieUtil } from '../index';

describe('Cookie Util basic cases', () => {
  it('1 - Check for Cookie Util methods', () => {
    expect(typeof CookieUtil.get).toBe('function');
    expect(typeof CookieUtil.set).toBe('function');
    expect(typeof CookieUtil.remove).toBe('function');
  });

  it('2 - Check for set  method', () => {
    CookieUtil.set('user', 'johnnie');
    expect(document.cookie).not.toEqual('');
    expect(document.cookie).toMatch(/johnnie/);
  });

  it('3 - Check for get method', () => {
    const value = CookieUtil.get('user');
    expect(value).toEqual('johnnie');
  });

  it('4 - Check for remove method', () => {
    CookieUtil.remove('user');
    const value = CookieUtil.get('user');
    expect(value).toBeFalsy();
  });
});

describe('Cookie Util complex cases', () => {
  afterEach(() => {
    CookieUtil.remove('user');
  });

  it('1.1 - Check json data', () => {
    CookieUtil.set('user', { name: 'johnnie', age: 33 });
    const value = CookieUtil.get('user', true);
    expect(value).toEqual({ name: 'johnnie', age: 33 });
  });

  it('1.2 - Check expire in the past', () => {
    CookieUtil.set('user', 'johnnie', { expires: 60 * -1 });
    const value = CookieUtil.get('user');
    expect(value).toBeFalsy();
  });

  it('1.3 - Check expire in the future', () => {
    CookieUtil.set('user', 'johnnie', { expires: 60 * 1000 });
    const value = CookieUtil.get('user');
    expect(value).toEqual('johnnie');
  });

  it('1.4 - Check expire in the future with json data', () => {
    CookieUtil.set(
      'user',
      { name: 'johnnie', age: 33 },
      { expires: 60 * 1000 },
    );
    const value = CookieUtil.get('user', true);
    expect(value).toEqual({ name: 'johnnie', age: 33 });
  });

  it('1.5 - Check path', () => {
    CookieUtil.set('user', 'johnnie', { path: '/some-other-path' });
    const value = CookieUtil.get('user');
    // because we are on root path ('/'), this cookie is not accesible!
    expect(value).toBeFalsy();
  });
});
