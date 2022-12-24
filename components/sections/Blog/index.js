// twin-macro
import tw from "twin.macro";

<<<<<<< HEAD
//Animation wrapper
import MotionWrap from "../../../helper/MotionWrap";

=======
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
import { Container, Header, BlogCard } from "./blog.style";

const posts = [
  {
    title: 'CBA Accelerates AI Deployment Amid Regulatory and Board Scrutiny',
    href: '#',
    date: 'Mar 26, 2022',
    imageUrl:
      './images/blog_1.jpg',
    readingTime: '9 min',
  },
  {
    title: 'Can AI Boost Your Digital Transformation Strategy?',
    href: '#',
    date: 'Jun 10, 2022',
    imageUrl:
      './images/blog_2.jpg',
    readingTime: '6 min',
  },
  {
    title: 'How AI Amplifies the Benefits of Predictive Maintenance',
    href: '#',
    date: 'Feb 12, 2022',
    imageUrl:
      './images/blog_3.jpg',
    readingTime: '14 min',
  },
]


<<<<<<< HEAD
const Blog = ({
  headingOne = "Learn more",
  headingTwo = "Updated Blog Post",
}) => {
=======
export default function Blog({
  headingOne = "Learn more",
  headingTwo = "Updated Blog Post",
}) {
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
  return (
    <Container id="blog">
      <div >
        <Header>
          <h2>{headingOne}</h2>
          <h3>{headingTwo}</h3>
        </Header>
        <BlogCard>
          {posts.map((post) => (
            <div key={post.title} className="card">
              <div tw="flex-shrink-0">
                <img className="postImage" src={post.imageUrl} alt="" />
              </div>
              <div className="cardBody">
                <div tw="flex-1">
                  <div className="info">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
                  </div>
                  <a href={post.href} tw="block mt-2">
                    <p className="title">{post.title}</p>
                  </a>
<<<<<<< HEAD
                  <a href={post.href} className="blogLink inline-block">
                    Learn More
                      <span tw="ml-1" aria-hidden="true">
                      &rarr;
                      </span>
                  </a>
=======
                  <p className="blogLink">
                    <a href={post.href}>
                      Learn More
                      <span tw="ml-1" aria-hidden="true">
                        &rarr;
                      </span>
                    </a>
                  </p>
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
                </div>
              </div>
            </div>
          ))}
        </BlogCard>
      </div>
    </Container>
  )
<<<<<<< HEAD
};

export default MotionWrap(Blog);
=======
}; 
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
