// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogList} = props
  return (
    <ul className="list-container">
      {blogList.map(eachValue => (
        <BlogItem key={eachValue.id} eachList={eachValue} />
      ))}
    </ul>
  )
}

export default BlogList
