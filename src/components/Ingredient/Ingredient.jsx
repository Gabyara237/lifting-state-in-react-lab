
const Ingredient =(props)=>{
    const {ingredient, action, operation} = props 

    return(
        <>
            <li style={{ backgroundColor: ingredient.color }}>
                {ingredient.name}
                { action === "add"?
                    <button onClick={()=>operation(ingredient)}>+</button>: 
                    <button onClick={()=>operation(ingredient)}>X</button>
                    
                }
            </li>
        </>
    )

}

export default Ingredient