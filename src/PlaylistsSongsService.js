const { Pool } = require("pg");

class PlaylistsService {
  constructor() {
    this._pool = new Pool();
  }

  async getSongsFromPlaylists(id) {
    const query = {
      text: `SELECT songs.id, songs.title, songs.performer
      FROM playlists
      INNER JOIN playlist_songs ON playlist_songs.playlist_id = playlists.id
      INNER JOIN songs ON songs.id = playlist_songs.song_id
      WHERE playlists.id = $1`,
      values: [id],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }
}

module.exports = PlaylistsService;
