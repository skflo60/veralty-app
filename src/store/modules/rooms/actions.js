/* ============
 * Actions for the room module
 * ============
 *
 * The actions that are available on the
 * room module.
 */
import * as types from './mutation-types';

export const find = ({ commit }) => {
  /*
   * Normally you would use a proxy to fetch the room:
   *
   * new Proxy()
   *  .find()
   *  .then((response) => {
   *    commit(types.FIND, Transformer.fetch(response));
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */
  const rooms = [{
    first_name: 'John',
    last_name: 'Doe',
    email: 'jonh@doe.com',
  }];

  commit(types.FIND, rooms);
};

export default {
  find,
};
