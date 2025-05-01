import React, { useState } from 'react'
// import styles from './CategoryList.module.css'
import styles from './CategoryList.module.css'
import Line from './Assets/Line 1701.png'

const categories = [
  {
    name: 'Dabeli',
    image: 'https://www.jcookingodyssey.com/wp-content/uploads/2024/04/dabeli.jpg',
    id: 1
  },
  {
    name: 'Vadapav',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPP3VwTb6zwGIfaXlcfVzOtlmiINy0r2w3Q&s',
    id: 2
  },
  {
    name: 'Slice',
    image: 'https://static01.nyt.com/images/2013/03/03/magazine/03wmt1/03wmt1-superJumbo-v2.jpg',
    id: 3
  },
  {
    name: 'Sandwich',
    image:
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/bread-omelette-500x375.jpg',
    id: 4
  },
  {
    name: 'Chaat',
    image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/samosa-chaat-1-720x720.jpg',
    id: 5
  },
  {
    name: 'Pav Bhaji',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgaCo8MyoCR2OLwt9h1CJV5gfSmJX2XEV55w&s',
    id: 6
  },
  {
    name: 'Bhel Puri',
    image: 'https://shwetainthekitchen.com/wp-content/uploads/2022/01/bhel-puri-500x500.jpg',
    id: 7
  }
]

const CategoryItems = ({ selectedCategoryId, setSelectedCategoryId }) => {
  return (
    <div className={styles.categoryTab}>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategoryId(category.id)}
          className={`${styles.value} ${selectedCategoryId === category.id ? styles.active : ''}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryItems

// import React, { useState } from 'react'
// import styles from './CategoryList.module.css'
// import Line from './Assets/Line 1701.png'

// const categories = [
//   {
//     name: 'Dabeli',
//     image: 'https://www.jcookingodyssey.com/wp-content/uploads/2024/04/dabeli.jpg',
//     id: 1
//   },
//   {
//     name: 'Vadapav',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPP3VwTb6zwGIfaXlcfVzOtlmiINy0r2w3Q&s',
//     id: 2
//   },
//   {
//     name: 'Slice',
//     image: 'https://static01.nyt.com/images/2013/03/03/magazine/03wmt1/03wmt1-superJumbo-v2.jpg',
//     id: 3
//   },
//   {
//     name: 'Sandwich',
//     image:
//       'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/bread-omelette-500x375.jpg',
//     id: 4
//   },
//   {
//     name: 'Chaat',
//     image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/samosa-chaat-1-720x720.jpg',
//     id: 5
//   },
//   {
//     name: 'Pav Bhaji',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgaCo8MyoCR2OLwt9h1CJV5gfSmJX2XEV55w&s',
//     id: 6
//   },
//   {
//     name: 'Bhel Puri',
//     image: 'https://shwetainthekitchen.com/wp-content/uploads/2022/01/bhel-puri-500x500.jpg',
//     id: 7
//   }
// ]

// const CategoryItems = () => {
//   const [selectedId, setSelectedId] = useState(1)

//   return (
//     <div className={styles.categoryTab}>
//       {categories.map((category) => (
//         <React.Fragment key={category.id}>
//           <button
//             className={`${styles.value} ${selectedId === category.id ? styles.active : ''}`}
//             onClick={() => setSelectedId(category.id)}
//           >
//             {category.name}
//           </button>
//           <img src={Line} alt="line" />
//         </React.Fragment>
//       ))}
//     </div>
//   )
// }

// export default CategoryItems
