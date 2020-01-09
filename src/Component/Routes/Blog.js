import React, { Component } from 'react'
import Store from '../Store/Store'

export class Blog extends Component {
    state = {content: Store}
    renderContent (content)  {
      const blogContent = [];
      content.forEach(element => {
        if(element.type === 'paragraph') blogContent.push(<p>{element.content}</p>);
        else if (element.type === `img`) blogContent.push(<img class={element.size} src={element.src} alt={element.alt} /> ); 
      })
      return blogContent;
    }
    render() {
        const {title, blogContent} = this.state.content;
        return (
            <React.Fragment>
              <section className="entry-header">
              <h2>{title}</h2>
                <p>Tags</p>
                <p>Leave a comment</p>
              </section>
              <section className="entry-content">
                {this.renderContent(blogContent)}
              </section>
              <section className="entry-footer">
                <div>
                  <h2>Share This:</h2>
                  <button>Twitter</button>
                  <button>Facebook</button>
                </div>
                <div className="prev-nav">

                </div>
                <form>
                  <h2>Leave A Comment</h2>
                  <input type="text"/>
                  <button>Post Comment</button>
                </form>
              </section>
            </React.Fragment>
        )
    }
}

export default Blog
