/**
 * Created by blockost on 14/05/16.
 */


var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var THREE = require('three');

// Load static files
app.use('/static', express.static(__dirname + '/static'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

var players = [];
var world_updates = [];


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/getWorldUpdates', (req, res) => {
    res.json(world_updates);
});


io.on('connection', (socket) => {

    // Attach a nickname to the player
    socket.nickname = 'Bot' + (players.length + 1);


    io.emit('new_player', {
        player: {
            nickname: socket.nickname,
            position: {
                x: 0,
                y: 500,
                z: 0
            }
        }
    });

    // When the player moves
    socket.on('move', (data) => {
        //console.log(JSON.stringify(data));
        socket.broadcast.emit('move', data);
    });

    // When the player fires
    socket.on('shot', (data) => {
        console.log(socket.nickname + ' shot !!');
        console.log(JSON.stringify(data));
        // Save to world updates for future players
        world_updates.push(data.id);
        // Broadcast to all players (including himself => server validation for shooting)
        io.sockets.emit('shot_confirmed', data);
    });

    // Remove the player from the list on disconnection
    socket.on('disconnect', () => {
        console.log(socket.nickname + ' has disco /!\\');
        const index = players.indexOf(socket);
        players.splice(index, 1);
    });

    // Append the player to the players list
    players.push(socket);

    // Say it loud !!
    console.log('A new player has arrived : ' + socket.nickname);
});


http.listen(3000, () => {
    console.log('Listening on *:3000');
});
