<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site HTML</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Meu Site</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    </header>    
    <section id="home">
        <h2>Bem-vindo ao Meu Site</h2>
        <p>Este é um site de exemplo criado usando HTML.</p>

        <input list="browsers">
        <datalist id="browsers">
            <option value="Internet Explorer">
            <option value="Firefox">
            <option value="Chrome">
            <option value="Opera">
            <option value="Safari">
        </datalist>
    </section>
    <section id="services">
        <h2>Serviços</h2>
        <ul>
            <li>Web Design</li>
            <li>Desenvolvimento Web</li>
            <li>Hospedagem de Sites</li>
        </ul>
    </section>
    <section id="about" class="cor_destaque">
        <h2>Sobre</h2>
        <p>Este é um site fictício usado para demonstrar as tags e estruturas em HTML.</p>
    </section>
    <section id="contact" class="form">
        <h2>Contato</h2>
        <p>Entre em contato conosco:</p>
        <form id="contactForm">
            <label for="tipo_contato">Tipo de Contato:</label><br>
            <select id="tipo_contato" onchange="changeFieldsForm(this)">
                <option selected value="1">Pessoa Fisica</option>
                <option value="2">Pessoa Juridica</option>
            </select><br>
            <label for="name">Nome:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email"><br>
            <label for="message">Mensagem:</label><br>
            <textarea id="message" name="message" rows="4" cols="30"></textarea><br>
            <input id="enviar" type="submit" value="Enviar">
        </form>
    </section>
    <footer>
        &copy; 2024 Meu Site. Todos os direitos reservados.
    </footer>

    <script type="text/javascript">          
        document.addEventListener('DOMContentLoaded', function(event){
            const apiUrl = 'http://localhost:3001/contacts'

            document.getElementById('contactForm').addEventListener('submit', function(event){
                event.preventDefault();

                var name = document.getElementById('name').value;
                var email = document.getElementById('email').value;
                var message = document.getElementById('message').value;
                
                var cnpj = document.getElementById('cnpj') ? document.getElementById('cnpj').value : '';
                 
                fetch(apiUrl, {
                    method: 'POST' , 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify({
                    nome:name,
                    email:email,
                    mensagem:message,
                    cnpj: cnpj
                })
            }).then(response => response.json()).then(() =>{
            alert('Mensagem enviada com sucesso')
                })
                    .catch(error =>{
                        alert("Não foi possivel enviar a mensagem")
                    })
                })
                    
        })
        function LimparTela(){
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            document.getElementById('cnpj') ? document.getElementById('cnpj').value = '':
        }

        function createAndRemoveElement(){
            const newDiv = document.createElement('div')
            newDiv.id = 'tempDiv'
            newDiv.innerText = 'Este é um novo elemento';
            document.body.appendChild(newDiv)  
            setTimeout(() =>{
                removeElement(newDiv.id)
            }, 5000)      
        }
        function changeBackgroundColor(elementId, color){
            const element = document.getElementById(elementId);
            element.style.backgroundColor = color;
        }

        function removeElement(elementId){
            const element = document.getElementById(elementId)
            element.parentNode.removeChild
        }

        function changeFieldsForm(select){
           const tpo_contato = select.value;

           if(tipo_contato == 1){
            document.getElementById('CNPJ').remove();
           }else{
               const newInput = document.createElement('input');
               newInput.setAttribute('type', 'text');
               newInput.setAttribute('id', 'cnpj')
               newInput.setAttribute('name', 'cnpj')

               const form = document.getElementById('contactForm')
               form.appendChild(newInput)
           }
        }
    </script>
</body>
</html>
