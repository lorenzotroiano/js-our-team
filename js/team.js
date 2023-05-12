/*

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe






Dati
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/



const nomeTeam = document.getElementById("nome");




// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const elTeam = [

    { 
        nome: "Wayne Barnett",
        posizione: "Chief Editor",
        foto: "wayne-barnett-founder-ceo.jpg"
    },

    { 
        nome: "Angela Caroll",
        posizione: "Founder & CEO",
        foto: "angela-caroll-chief-editor.jpg"
    },

    { 
        nome: "Walter Gordon",
        posizione: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },

    { 
        nome: "Angela Lopez",
        posizione: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },

    { 
        nome: "Scott Estrada",
        posizione: "Developer",
        foto: "scott-estrada-developer.jpg"
    },

    { 
        nome: "Barbara Ramos",
        posizione: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];


// console.log(elTeam);



// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto


for (let i = 0; i < elTeam.length; i++) {

    let objesimo = elTeam[i];
    // console.log(objesimo);
    
    
    let nomeUser = `<div class="flex-div"><span>${objesimo.nome}</span> <span>${objesimo.posizione}</span> <img src="img/${objesimo.foto}"></div>`;
    nomeTeam.innerHTML += nomeUser;
   

    // MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

/*
    for (let chiaveObj in objesimo) {

        team.innerHTML += objesimo[chiaveObj] + " ";
        console.log(objesimo[chiaveObj]);
    }  */
}


// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
