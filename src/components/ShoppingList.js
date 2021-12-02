import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, onItemFormSubmit }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inputSearch, setSearchInput] = useState("");

  function handleSearchChange(event) {
    if (event.target.name === "search") {
      setSearchInput(event.target.value);
    }
    else if (event.target.name === "filter") {
      setSelectedCategory(event.target.value);
    }
  }

  function handleItemFormSubmit(newItem) {
    // console.log("name event state set to: " + itemName)
    // console.log("category event state set to: " + itemCategory) 

    // console.log("new item: " + newItem)
    
  onItemFormSubmit(newItem)

    // console.log("items array: " + items)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && inputSearch === "" ) {return item}
    else if (selectedCategory === "All"){
      return item.name.includes(inputSearch);
    }
    else if (inputSearch === ""){
      return item.category === selectedCategory;
    } else{
      return item.category === selectedCategory && item.name.includes(inputSearch);
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <Filter search={inputSearch} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
