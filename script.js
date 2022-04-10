//...................
const cardsGrid = document.querySelector(".cards-grid");
const cards = document.querySelectorAll(".card");
const addRecipeBtn = document.getElementById("add-data-btn");

//https://www.youtube.com/watch?v=KA_8eOIsjn4
const allergensList = ["fish", "egg", "gluten", "crustaceans", "sulphites"];
const ingredientList = [
  "Withe crab",
  "lemon juice",
  "lemon zest",
  "red chilli",
  "salt",
  "olive oil",
  "pepper",
  "sugar",
];

//"Stone Basse 2"
//.............

addRecipeBtn.addEventListener("click", () => addItems());

const addItems = async () => {
  // e.preventDefault();
  db.collection("recipes")
    .add({
      allergens: allergensList, // [],
      ingredients: ingredientList, //[],
      // recipeName: "Titre de la recette n¨¨° 2",
      recipeName: "Stone Basse",
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

/* const getItems = async () => {
  //................................................................
  db.collection("recipes").onSnapshot((snapshot) => {
    let items = [];
    console.log(snapshot);

    //+ + + ..........
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
      //-----
      items.push({ id: doc.id, data: doc.data() });
      //-----
    });
    //+ + + ..........
    // console.log(items);
    //...................................................................
    createRecepeCards(items);
    //...................................................................
  });
}; */

function getItems() {
  db.collection("recipes").onSnapshot((snapshot) => {
    let items = [];
    snapshot.docs.forEach((doc) => {
      items.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    createRecepeCards(items);
  });
}

//...................................................................
getItems();
//...................................................................

function createRecepeCards(items) {
  console.log(items);

  //*----
  const cardsGrid = document.querySelector(".cards-grid");
  //*----

  let recipeItems = [];

  /*   <div class="card">
    <img src="${data[i].download_url}" class="top-img" />
    <div class="content">
      <h3 class="card-title">Dressed Dungeness Crab</h3>
      <p class="card-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
        necessitatibus.
      </p>
      <p class="card-text">Lorem, ipsum dolor</p>
    </div>
  </div>; */

  items.forEach((item) => {
    let recipeItem = document.createElement("div");
    recipeItem.classList.add("card", "recipe-item");

    /* recipeItem.addEventListener("click", function(){
            markCompleted(item.id);
        })
         */
    let recipeContent = document.createElement("div");
    recipeContent.classList.add("content");

    let recipeName = document.createElement("div");
    recipeName.classList.add("card-title");
    recipeName.innerText = item["data"].recipeName;

    let ingredients = document.createElement("div");
    ingredients.classList.add("card-text");
    ingredients.innerText = item["data"].ingredients;

    let allergens = document.createElement("div");
    allergens.classList.add("card-text");
    allergens.innerText = item["data"].allergens;

    recipeContent.appendChild(recipeName);
    recipeContent.appendChild(ingredients);
    recipeContent.appendChild(allergens);
    //...
    recipeItem.appendChild(recipeContent);
    //...
    recipeItems.push(recipeItem);
  });

  console.log("moh", recipeItems);
  /* document.querySelector(".recipe-items").replaceChildren(...recipeItems); */
  document.querySelector(".cards-grid").replaceChildren(...recipeItems);
}

//...................................................................
/* const getItems = async () => {
    db.collection("recipes")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()} => ${doc.data().length} `);
      });
    });
 const results = await fetch(
    "https://console.firebase.google.com/project/recette2022-4e5e5/firestore/data/recipes/bHsI57zk7xd1xHdWa8Mk"
  );

  const data = await results.json();*/

//------------------------------------------------
/* const url =
    "https://console.firebase.google.com/project/recette2022-4e5e5/firestore/data/recipes/bHsI57zk7xd1xHdWa8Mk";
  var headers = {};

  fetch(url, {
    method: "GET",
    mode: "no-cors",
    headers: headers,
  })
    .then((response) => {
      console.log(response.json());
      if (!response.ok) {
        throw new Error(response.error);
      }
      return response.json();
    })
    .then((data) => {
      createCards(data);
    })

    .then((data) => {
      document.getElementById("messages").value = data.messages;
    })
    .catch(function (error) {
      document.getElementById("messages").value = error;
    }); 
    
    };*/

// -----------------
