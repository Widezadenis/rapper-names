const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
    'age': 29,
    'birtName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },
    'nicki minaj': {
        'age': 39,
        'birtName': 'Onika Tanya Maraj-Petty',
        'birthLocation': 'Saint James, Port of Spain, Trinidad and Tobago'
    },
    'dylan': {
        'age': 29,
        'birtName': 'Dylan',
        'birthLocation': 'Dylan'
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]) {
        response.json(rappers[rappersName])
    }
    else{
        response.json(rappers['dylan'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is runing on port ${PORT}! You better go catch it!`)
})