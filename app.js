
//declarations des variables à utiliser
let solde = 10000;
let monT = 0;
let numero = "";

//transfert
let numCompt = ""; 
let montPaie = "";

//validation du code orange money
let pattern = /#144#/;
let code = prompt('Le code svp ?');
if (pattern.test(code)) {
    saisieCode();
} else {
    alert('Code erroné');
}

// valider les transactions
function validSoldeTransf() {
    if ((monT < solde) && (monT > 0)) {
        solde -= monT;
        alert(`Votre transfert de ${monT} FCFA a été envoyé avec succès au ${numero}.\nVous avez ${solde} FCFA dans votre compte.`)
    }else{
        alert("Votre solde est insuffisant pour effectuer cette opération");
    }
}

//valider les paiements
function validSoldePaie() {
    if (montPaie < solde ) {
        solde -= montPaie;
        alert(`Votre paiement de ${montPaie} FCFA a été effectuer avec succès.\nVous avez ${solde} FCFA dans votre compte.`)
    }else{
        alert("Votre solde est insuffisant pour effectuer cette opération");
    }
}

function validSoldePaieS() {
    if (montPaie < solde && (typeof montPaie) === 'string') {
        solde -= montPaie;
        alert(`Votre paiement de ${montPaie} FCFA a été effectuer avec succès.\nVous avez ${solde} FCFA dans votre compte.`)
    }else{
        alert("Votre solde est insuffisant pour effectuer cette opération");
    }
}

// gestion application
function saisieCode() {
    let nb = parseInt(prompt("1. Solde de mon compte\n2. Transfert d'argent\n3. Paiement de facture\n4. Achats de credits\n5.Quitter"));
   
    if (nb == 1) {
        alert(`Votre solde est ${solde} FCFA`);
    }else if (nb == 2) {
        let option = parseInt(prompt("1. Saisir le montant à transferer\n2. Quitter"));
        if (option == 1) {
            numero = prompt(`saisissez le numéro`);
            monT = prompt( "saisissez le montant a transferer");
            validSoldeTransf();
        }else if (option == 2) {
            alert("voulez-vous sortir");
            saisieCode()
        }
    }else if (nb == 3) {
        let opt = prompt("1. Liquide\n2. Chèque\n3. Quitter\n");
        if (opt == 1) {
            montPaie = prompt(`entrez le montant`); 
            validSoldePaie();
        }else if (opt == 2) {
            montPaie = prompt(`entrez le montant`); 
            validSoldePaieS();
        }else if (opt == 3) {
            alert("voulez-vous sortir");
            saisieCode();
        }
    }else if (nb == 4) {
        numero = prompt(`saisissez le numéro`);
        monT = prompt( "saisissez le montant du crédit");
        validSoldeTransf();
    }else if (nb == 5) {
        let exit = prompt("taper 0 pour quitter ou 1 pour revenir à la page d'accueil");
        if (exit == 0) {
            alert("vous avez mis fin à votre programme")
        }else{
            saisieCode();
        }
    }else{
        alert("la valeur saisie n'existe pas dans la liste");
    }
    
}

