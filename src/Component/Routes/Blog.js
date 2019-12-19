import React, { Component } from 'react'

export class Blog extends Component {
    render() {
        return (
            <React.Fragment>
              <section className="entry-header">
                <h2>Title</h2>
                <p>Tags</p>
                <p>Leave a comment</p>
              </section>
              <section className="entry-content">
                <p>content</p>
              </section>
              <section className="entry-footer">
                <div>Share This</div>
                <div class="prev-nav"></div>
                <p>Leave a comment</p>
              </section>
            </React.Fragment>
        )
    }
}

export default Blog
