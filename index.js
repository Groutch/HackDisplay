const words=["mystérieux","évasion","épisode","papillon","anormal","laid", "meurtrier","islamisme", "ver", "sanglier"]
class Hangman {
	constructor() {
        this.word = words[Math.floor(Math.random() * Math.floor(words.length))];
        this.life = 10;
        this.dispword=[];
        console.log(this.word);
    }
    get initdisp() {
        for (var i = 0; i < this.word.length; i++) this.dispword.push("_");
    }
	checkLetter(input){

		if(this.life>0){
            var indice=0;
            for(var i=0; i<this.word.length;i++) {
                if (this.word[i] === input) {
                    this.dispword[i]=input;
                    indice++;
                }
            }
            if (indice==0){
                this.substract()
            }
            return this.dispword;
		}else{
			return false;
		}
    }
    getGuess(){
        return this.dispword;
    }
	substract(){
        //décrémenter la vie

    }
    getAnswer(){
        //retourne le mot (pour affichage lorsque c'est perdu) 
    }
    getLife(){
        //retourne le nombre de vie

    }
}
const hangman = new Hangman();
hangman.initdisp;
function displayGame(){
    let guess = document.getElementById("guess");
    let lf = document.getElementById("lifecount");
    guess.innerHTML="";
    hangman.getGuess().forEach(element => {
        guess.append(element+" ");
    });
    lf.innerHTML="Vies: "+hangman.getLife();
}
function checkletterbt(){
    let inp = document.getElementById("input").value;
    if(hangman.checkLetter(inp)){
        displayGame();
    }else{
        displayGame();
        alert("Perdu! la réponse était "+hangman.getAnswer())
    }

}
displayGame();
