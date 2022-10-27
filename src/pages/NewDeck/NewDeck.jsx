import { useState } from "react";
import SpellSearch from "../../components/SpellSearch/SpellSearch.jsx";
import styles from "./NewDeck.module.css"
import CardList from "../../components/CardList/CardList.jsx";
import * as deckService from "../../services/deckService"

const NewDeck = () => {

  const [cards, setCards] = useState([])
  const [title, setTitle] = useState("")

  const handleAddCard = (cardData) => {
    const card = {...cardData, colorIdentity: cardData.colorIdentity[0]}
    console.log("**This is CARD**", card)
    setCards([...cards, card])
  }

  const handleRemoveCard = (cardData) => {
    const card = {...cardData, colorIdentity: cardData.colorIdentity[0]}
    console.log("**This is CARD**", card)
    setCards([...cards, card])
  }

  const handleSubmit = async () => {
    const res = await deckService.create({
      title:title,
      cards:cards
    })
    console.log("***RES", res)
  }
   //console.log("**CARDS STATE**", cards)
  return (
    <main className={styles.container}>
      <section>
        <SpellSearch handleAddCard={handleAddCard}/>
      </section>
      <section>
        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <CardList cards={cards} handleRemoveCard={handleRemoveCard}/>
        <button onClick={handleSubmit}>Confirm Deck</button>
      </section>
    </main>
  )
    
}

export default NewDeck