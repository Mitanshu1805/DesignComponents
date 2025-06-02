// import styles from './CategoryList.module.css'
import styles from './CategoryList.module.css'

const CategoryItems = ({ menuData, selectedCategoryId, setSelectedCategoryId }) => {
  return (
    <div className={styles.categoryTab}>
      {menuData?.map((category) => (
        <button
          key={category.category_id}
          onClick={() => setSelectedCategoryId(category.category_id)}
          className={`${styles.value} ${selectedCategoryId === category.category_id ? styles.active : ''}`}
        >
          {category.category_name}
        </button>
      ))}
    </div>
  )
}

export default CategoryItems
