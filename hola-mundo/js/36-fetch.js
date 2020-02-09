'use strict'
//Para pruebas...
//https://jsonplaceholder.typicode.com/ 
//Si la anterior URL no funciona usar eta otra página "https://reqres.in/"

// Instalar "JSON Viewer" en el navegador Chrome para ver definidos los JSON en el navegador

// Fetch (sustituto del ajax) y peticiones a servicios / apis rest


window.addEventListener('load', () => {

    var div_usuarios = document.querySelector('#usuarios');

    var div_janet = document.querySelector('#janet');

    

        //promesas*******

        //Version antigua
        //.then(function(data){
        //   return data.json()
        //})

      getUsuarios()  
        .then(data => data.json())
        .then(users => {
            listadoUsuarios(users.data);
            return getJanet();
        })
        .then(data => data.json())
        .then(user => {
            mostrarJanet(user.data);
            return getInfo();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error + " - Error en la secuencia de Promesas!");
        });

        //pasamos URL con los datos remotos
    function getUsuarios() {        
        //fetch('https://jsonplaceholder.typicode.com/users');
        return fetch('https://reqres.in/api/users?page=2');
    }

    function getJanet() {
        return fetch('https://reqres.in/api/users/2');
    }

    function getInfo() {
        var profesor = {
            nombre: 'Victor',
            apellidos: 'Robles',
            url: 'https://victorroblesweb.es'
        };

        return new Promise((resolve, reject) => {
            var profesor_string = JSON.stringify(profesor);
            if (typeof profesor_string != 'string') {
                return reject('error');
            } else {
                return resolve(profesor_string);
            }
        });

    }

    const listadoUsuarios = (usuarios) => {

        //   function listadoUsuarios(usuarios) {
        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = `${i} . ${user.first_name}  ${user.last_name} `
            div_usuarios.appendChild(nombre);
            document.querySelector('.loading').style.display = 'none';
        });
    }

    const mostrarJanet = (user) => {

        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');
        nombre.innerHTML = ` ${user.first_name}  ${user.last_name} `
        avatar.src = user.avatar;
        avatar.width = '100';

        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);

        document.querySelector('#janet .loading').style.display = 'none';

    }

});