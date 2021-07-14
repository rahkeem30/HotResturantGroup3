class MakeCard{
    //table: table(card) number; 
    constructor(table,id,name,email,phone){
        this.table = table;
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    createCard = () =>{
        return `<li class="list-group-item mt-4" id=${this.id}><h2>Table #${this.table}</h2><hr><h2>ID: ${this.id}</h2><h2>Name: ${this.name}</h2><h2>Email: ${this.email}</h2><h2>Phone: ${this.phone}</h2></li>
        `;
    }

    removeCard =() =>{
        var cardDiv = document.getElementById(this.id);
        cardDiv.remove();
    }   
}