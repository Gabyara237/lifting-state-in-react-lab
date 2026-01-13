import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = (props) => {
    const {stack,removeFromBurger} = props

    return(
        <>
            <ul>
                {stack.length==0? 
                    "No Ingredients":
                    stack.map((ingredient, index)=>(
                        <Ingredient  key ={index} ingredient={ingredient} action={"remove"} operation={removeFromBurger}/>
                    ))}
            </ul>
        
        </>
    );
};

export default BurgerStack;
