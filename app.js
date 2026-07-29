const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// --- CONFIGURACIONES ---
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// --- BASE DE DATOS RÚSTICA (JSON) ---
const dataPath = path.join(__dirname, 'messages.json');

function getMessages() {
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(rawData);
}

function saveMessages(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// --- RUTAS ---

// 1. Mostrar todos los mensajes (Inicio)
app.get('/', (req, res) => {
    const currentMessages = getMessages();
    res.render('index', { title: "Pizarra de Mensajes", messages: currentMessages });
});

// 2. Mostrar el formulario para crear un mensaje nuevo
app.get('/new', (req, res) => {
    res.render('form', { title: "Escribir un Nuevo Mensaje" });
});

// 3. Procesar y guardar el nuevo mensaje
app.post('/new', (req, res) => {
    const currentMessages = getMessages();

    currentMessages.push({
        id: Date.now().toString(), // Generador de ID único
        text: req.body.messageText,
        user: req.body.messageUser,
        added: new Date().toISOString()
    });

    saveMessages(currentMessages);
    res.redirect('/');
});

// 4. Ver detalles de un mensaje específico
app.get('/message/:id', (req, res) => {
    const currentMessages = getMessages();
    const messageId = req.params.id;

    const foundMessage = currentMessages.find(msg => msg.id === messageId);

    if (!foundMessage) {
        return res.status(404).send('Mensaje no encontrado');
    }

    res.render('message', { title: "Detalles del Mensaje", message: foundMessage });
});

// 5. Actualizar (Editar) un mensaje existente
app.post('/message/:id/edit', (req, res) => {
    const currentMessages = getMessages();
    const messageId = req.params.id;

    const messageIndex = currentMessages.findIndex(msg => msg.id === messageId);

    if (messageIndex !== -1) {
        currentMessages[messageIndex].text = req.body.messageText;
        saveMessages(currentMessages);
    }

    res.redirect('/');
});

// 6. Eliminar un mensaje
app.post('/message/:id/delete', (req, res) => {
    let currentMessages = getMessages();
    const messageId = req.params.id;

    // Filtramos para conservar todos excepto el que queremos borrar
    currentMessages = currentMessages.filter(msg => msg.id !== messageId);

    saveMessages(currentMessages);
    res.redirect('/');
});

// --- INICIAR SERVIDOR ---
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});