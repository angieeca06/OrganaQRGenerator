/*
https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-01-bc-core-gdl-002/users
*/

function organaGenerator() {
    //const url = document.getElementById('url').value;
    const url = 'https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-01-bc-core-gdl-002/users';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const students = data.filter(function (student) {
                return student.role == "student"; //Filter by students
            });
            const namesArr = students.map(student => student.name) //Students names
            const idsArr = students.map(student => student.id) // Map only id's 

            idsArr.forEach((id, index) => { //Inject QR + name on HTML
                const qr = document.createElement('canvas');
                const name = document.createElement('div');
                const br = document.createElement('br');
                qr.setAttribute('id', 'qr' + index);
                name.setAttribute('id', 'name' + index);
                name.setAttribute('class', 'name');
                name.innerHTML = namesArr[index];
                br.innerHTML = namesArr[index];
                document.querySelector('#qr-holder').appendChild(qr);
                document.querySelector('#qr-holder').appendChild(name);
                document.querySelector('#qr-holder').appendChild(br);
            })

            idsArr.forEach(function (student, index) {  //Generate a QR individually
                let qr = new QRious({
                    element: document.getElementById('qr' + index),
                    value: student,
                    size: '250',
                    background: 'white',
                    foreground: 'black',
                    level: 'H',
                });
                console.log(idsArr);
            });
        })
        .catch(error => console.error(error))
};

organaGenerator();


/*
document.getElementById('btn').addEventListener('click', (function () {
    organaGenerator();
})
)
*/

