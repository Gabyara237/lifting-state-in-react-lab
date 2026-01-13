import Ingredient from "../Ingredient/Ingredient";

const IngredientList = (props) => {
    const {addToBurger, availableIngredients} = props;

    return(
        <>
            <ul>
                {availableIngredients.map((ingredient, index)=>(
                    <Ingredient key ={index} ingredient={ingredient} action={"add"} operation={addToBurger}/>
                ))}
            </ul>
        </> 
    )
};

export default IngredientList;
