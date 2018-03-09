/* ============
 * room Transformer
 * ============
 *
 * The transformer for the room.
 */

import Transformer from './Transformer';

export default class RoomTransformer extends Transformer {
  /**
   * Method used to transform a fetched room.
   *
   * @param room The fetched room.
   *
   * @returns {Object} The transformed room.
   */
  static fetch(rooms) {
    return rooms;
  }

  /**
   * Method used to transform a send room.
   *
   * @param room The room to be send.
   *
   * @returns {Object} The transformed room.
   */
  static send(room) {
    return {
      email: room.email,
      first_name: room.firstName,
      last_name: room.lastName,
    };
  }
}
