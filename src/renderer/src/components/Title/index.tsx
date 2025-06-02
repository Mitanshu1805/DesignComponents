import SearchIcon from './Assets/Left Icon.png'
import './style.css'

type TitleProps = {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const Title = ({ searchQuery, setSearchQuery }: TitleProps) => {
  return (
    <div className="title">
      <div className="titleHeading">
        <div className="headingName">Jaegar Resto</div>
        <div className="titleDate">{new Date().toDateString()}</div>
      </div>
      <div className="searchbar">
        <div className="searchIcon">
          <img src={SearchIcon} />
        </div>
        <input
          type="text"
          placeholder="Search for food name"
          className="searchInput"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Title
