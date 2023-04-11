// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {title, description, publishedDate} = props
  return (
    <li>
      <div className="row-1">
        <h1 className="title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <div className="row-2">
        <p className="description">{description}</p>
      </div>
      <hr />
    </li>
  )
}

export default BlogItem
