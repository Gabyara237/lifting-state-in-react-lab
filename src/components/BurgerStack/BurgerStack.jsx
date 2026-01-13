

const BurgerStack = (props) => {
    const {stack,removeFromBurger} = props

    return(
        <>
            <ul>
                {stack.map((ingredient,index)=>(
                    <li key={index} style={{ backgroundColor: ingredient.color }}>
                        {ingredient.name}
                        <button onClick={()=>removeFromBurger(ingredient)}>X</button>
                    </li>
                ))}
            </ul>
        
        </>
    );
};

export default BurgerStack;
