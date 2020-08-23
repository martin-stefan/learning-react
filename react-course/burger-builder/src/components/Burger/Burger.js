import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient.js/BurgerIngredient';


const burger = (props) => {

  let ing = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  })
  .reduce((arr, curr) => {
    return arr.concat(curr)
  }, []);

  if (ing.length === 0) {
    ing = <p>Please add ingredients</p>
  }
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {ing}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default burger;