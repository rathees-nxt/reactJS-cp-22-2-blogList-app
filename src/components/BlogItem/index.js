// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachList} = props
  return (
    <li className="item-container">
      <div className="detail-content">
        <div className="content">
          <h1 className="heading">{eachList.title}</h1>
          <p className="para">{eachList.description}</p>
        </div>
        <p className="date">{eachList.publishedDate}</p>
      </div>
    </li>
  )
}

export default BlogItem
