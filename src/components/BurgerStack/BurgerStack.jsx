

const BurgerStack = (props) => {
    const {stack} = props

    return(
        <>
            <ul>
                {stack.map((ingredient,index)=>(
                    <li key={index} style={{ backgroundColor: ingredient.color }}>
                        {ingredient.name}
                    </li>
                ))}
            </ul>
        
        </>
    );
};

export default BurgerStack;
