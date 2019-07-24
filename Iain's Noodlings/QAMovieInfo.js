var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/dora', function (require, response) {
    response.render ('movieInfo.ejs', {
        'image': 'Image link',
        'title': 'Dora And The Lost City Of Gold',
        'cert': 'PG',
        'releaseDate': '16/8/19',
        'cast': 'Eugenio Derbez, Isabela Moner, Jeffrey Wahlberg',
        'director': 'James Bobin',
        'runTime': '1hr 40m',
        'description': "Having spent most of her life exploring the jungle with her parents, nothing could prepare Dora (Isabela Moner) for her most dangerous adventure ever - high school."
    });});

app.get('/onceuponatime', function (require, response) {
    response.render ('movieInfo.ejs', {
        'image': 'Image link',
        'title': 'Once Upon A Time In Hollywood',
        'cert': '15',
        'releaseDate': '16/8/19',
'cast': 'Brad Pitt, Leonardo DiCaprio, Margot Robbie, Al Pacino',
        'director': 'Quentin Tarantino',
        'runTime': '2hr 45m',
'description': "Quentin Tarantino's Once Upon a Time in... Hollywood visits 1969 Los Angeles, where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognise anymore."
    });});

app.get('/tellit', function (require, response) {
    response.render ('movieInfo.ejs', {
        'image': 'Image link',
        'title': 'Tell It To The Bees',
        'cert': '15',
        'releaseDate': '26/7/19',
        'cast': 'Anna Paquin, Gregor Selkirk',
        'director': 'Annabel Jankel',
        'runTime': '1hr 48m',
        'description': "Dr Jean Markham (Paquin) returns to the town she left as a teenager to take over her late father's medical practice. When a school-yard scuffle lands Charlie (Gregor Selkirk) in her surgery, she invites him to visit the hives in her garden and tell his secrets to the bees, as she once did."
    });});

app.get('/annabelle', function (require, response) {
    response.render ('movieInfo.ejs', {
        'image': 'Image link',
        'title': 'Annabelle',
        'cert': '15',
        'releaseDate': '10/7/19',
        'cast': 'Mckenna Grace, Patrick Wilson, Vera Farmiga',
        'director': 'Gary Dauberman',
        'runTime': '1hr 46m',
        'description': "Determined to keep Annabelle from wreaking havoc, demonologists Ed and Lorraine Warren bring the possessed doll to the locked artifacts room in their house, placing her 'safely' behind sacred glass and enlisting a priest's holy blessing..."
    });});

    app.listen(9000);