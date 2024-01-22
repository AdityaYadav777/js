function practice(str) {
  
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u","A","E","I","O","U"];

    for (let i = 0; i < vowels.length; i++) {

        for(let j of str){
              if(j==vowels[i]){
                count++;
              }
        }

        }
        console.log(count);

    }

   
practice("aeiou");

