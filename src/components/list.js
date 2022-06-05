import '../css/list.css'




function Button({removeItem}) {
  return (
    <a href="#" onClick={removeItem}><i class="fa-solid fa-xmark"></i></a>
  )
}


function ShoppingList() {

    const removeItem = (e) => {
        e.preventDefault();
        console.log("remove");
    }

  return (
    <div className='list-container'>
        <ul>
            <li><p>Hello World</p><Button onClick={()=> removeItem()}/></li>
            <li><p>Hello World</p><Button/></li>
            <li><p>Hello World</p><Button/></li>
            <li><p>Hello World</p><Button/></li>
            <li><p>Hello World</p><Button/></li>
            <li><p>Hello World</p><Button/></li>
            <li><p>Hello World</p><Button/></li>
        </ul>
    </div>
  )
}

export default ShoppingList