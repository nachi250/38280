import Item from '../Item/Item';
import { Stack } from 'react-bootstrap' ;

const ItemList = ({items})=> {

    return (
        <div>
            <Stack direction="horizontal" gap={items.length}>
            {items.map((item)=>{
                return(<Item key={item.id} item={item}/>)
            })}
            </Stack>
        </div>
    )
}

export default ItemList