# relaylichessgames
Relay lichess games.

## Configuration

Set environment variables ( Heroku config vars ) as follows.

### RELAY_URL

Your PGN source url.

### TOKEN

Your lichess API access token ( required if you want to relay your ongoing games ).

### MAX_GAMES

Maximum number of your ongoing games to relay ( default : 1 ).

## Usage

Start server with `node server.js`.

Endpoint `/` path will relay the games you specified in RELAY_URL.

If you provide your API access token, then endpoint `/ongoing` will relay your ongoing games. An attempt will be made to initialize games from RELAY_URL.