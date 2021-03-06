import React, { Component } from 'react'
import {blogPost} from '../Store/Store'

export class Blog extends Component {
    state = {content: blogPost}
    renderContent (content)  {
      const blogContent = [];
      content.forEach(element => {
        if(element.type === 'paragraph') blogContent.push(<p class="text-body">{element.content}</p>);
        else if (element.type === `img`) blogContent.push(<img class={element.size + " img-fluid "} src={element.src} alt={element.alt} /> ); 
      })
      return blogContent;
    }
    render() {
        const {title, blogContent} = this.state.content;
        return (
            <React.Fragment>
              <section className="container">
              <h2 class="text-dark">{title}</h2>
                <div class="row">
                  <div class="col-lg-12">
                    {this.renderContent(blogContent)}
                  </div>
                </div>
              </section>
              <section className="container">
              <div class="row">
                <div class="col-lg-12">
                  <p>Tags</p>
                  <p>Leave a comment</p>
                </div>
              </div>  
              </section>
              {/* <section className="container">
                <div class="row">
                  <div class="col-md-6">
                  <h2>Share This:</h2>
                  <button>Twitter</button>
                  <button>Facebook</button>
                  </div>
                </div>
                <div className="prev-nav">

                </div>
                <form>
                  <h2>Leave A Comment</h2>
                  <input type="text"/>
                  <button>Post Comment</button>
                </form>
              </section> */}
            </React.Fragment>
        )
    }
}

export default Blog
