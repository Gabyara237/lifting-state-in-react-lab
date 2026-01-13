
const IngredientList = (props) => {
    const {addToBurger, availableIngredients} = props;

    return(
        <>
            <ul>
                {availableIngredients.map((ingredient,index)=>(
                    <li key={index} style={{ backgroundColor: ingredient.color }}>
                        {ingredient.name}
                    </li>
                ))}
            </ul>
        </> 
    )
};

export default IngredientList;
