// import React from 'react'
// import './style.css'
// import styles from './CategoryList.modules.css'
import styles from './CategoryList.module.css'
import React from 'react'

import { Fragment } from 'react'

import Line from './Assets/Line 1701.png'

const categories = [
  {
    name: 'Dabeli',
    image: 'https://www.jcookingodyssey.com/wp-content/uploads/2024/04/dabeli.jpg'
  },
  {
    name: 'Vadapav',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPP3VwTb6zwGIfaXlcfVzOtlmiINy0r2w3Q&s'
  },
  {
    name: 'Slice',
    image: 'https://static01.nyt.com/images/2013/03/03/magazine/03wmt1/03wmt1-superJumbo-v2.jpg'
  },
  {
    name: 'Sandwich',
    image:
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/bread-omelette-500x375.jpg'
  },
  {
    name: 'Chaat',
    image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/samosa-chaat-1-720x720.jpg'
  },
  {
    name: 'Pav Bhaji',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgaCo8MyoCR2OLwt9h1CJV5gfSmJX2XEV55w&s'
  },
  {
    name: 'Bhel Puri',
    image: 'https://shwetainthekitchen.com/wp-content/uploads/2022/01/bhel-puri-500x500.jpg'
  }
]

const CategoryItems = () => {
  return (
    // <div className="layout">
    //   <div className="categoryTab">
    //     {categories.map((category, index) => (
    //       <div className="categoryBox" key={index}>
    //         <div className="categoryName">{category.name}</div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className={styles.categoryTab}>
      {categories.map((category, index) => (
        <React.Fragment key={index}>
          <button className={styles.value}>{category.name}</button>
          <img src={Line} alt="line" />
        </React.Fragment>
      ))}
    </div>
  )
}

export default CategoryItems
