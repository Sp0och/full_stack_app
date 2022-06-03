import '../css/list.css'




function Button(removeItem) {
  return (
    <a href="#"><i class="fa-solid fa-xmark"></i></a>
  )
}


function ShoppingList() {

    

  return (
    <div className='list-container'>
        <ul>
            <li><p>Hello World</p><Button/></li>
            <li><p>Hello World</p><Button/></li>
            <li><p>Hello World</p><Button/></li>
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