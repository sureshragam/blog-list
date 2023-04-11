// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const profile = 'https://assets.ccbp.in/frontend/react-js/profile-img.png'

const UserInfo = props => {
  const {blogsList} = props
  return (
    <>
      <div className="profile-container">
        <div className="profile">
          <img src={profile} alt="profile" />
        </div>
        <h1 className="title">Wade Warren</h1>
        <p className="description">Software developer at UK</p>
      </div>
      <ul className="blog-container">
        {blogsList.map(eachBlog => {
          const {id, title, description, publishedDate} = eachBlog
          return (
            <BlogItem
              key={id}
              title={title}
              description={description}
              publishedDate={publishedDate}
            />
          )
        })}
      </ul>
    </>
  )
}

export default UserInfo
