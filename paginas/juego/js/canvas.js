async function askOllama(question) {
    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama2', // Cambia por el modelo que uses
                prompt: question,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log('📝 Pregunta:', question);
        console.log('🤖 Respuesta:', data.response);
        console.log('⏱️  Tiempo de respuesta:', data.total_duration / 1000000000 + 's');
        
        return data.response;
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

// Ejemplo de uso
askOllama('lo que te preguntare solo contestame en forma de palabras  de apollo emocionalestoy triste porque no puedo avanzar en mi tesis');