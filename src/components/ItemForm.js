import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [itemCategory, setCategory] = useState("Produce");
  const [itemName, setName] = useState("");

  function handleNameChange(event) {
    setName(event.target.value)
    console.log("name event state set to: " + itemName)
  }

  function handleCategorySelection(event) {
    setCategory(event.target.value)
    // console.log("category event state set to: " + itemCategory)
  }

  function handleFormSubmissionEvent(event) {
    event.preventDefault()

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }; 

    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={(event) => 
    {handleFormSubmissionEvent(event)}}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategorySelection}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;