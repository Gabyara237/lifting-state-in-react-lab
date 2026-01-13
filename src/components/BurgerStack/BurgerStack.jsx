import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = (props) => {
    const {stack,removeFromBurger} = props

    return(
        <>
            {stack.length==0? "No Ingredients":
                <ul>
                    {stack.map((ingredient, index)=>(
                    <Ingredient  key ={index} ingredient={ingredient} action={"remove"} operation={removeFromBurger}/>
                    ))}
                </ul>
            }
        </>
    );
};

export default BurgerStack;
