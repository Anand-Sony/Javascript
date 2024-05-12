let person ={
    name:"Joy",
    class : 8,
    location : 'Jaipur',
    hobby : "Cricket",

    displayinfo : function(){
        console.log(`${person.name} study in class ${person.class} in City ${person.location} and likes to play ${person.hobby} `);
    }
}
console.log(person.name);
console.log(person['class']);

person.displayinfo();

// Now print keys and values of the method :-
for(let key in person){
    console.log(key);
}
for(let value in person){
    console.log(person[value]);
}

