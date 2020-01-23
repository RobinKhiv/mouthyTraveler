import React, { Component } from 'react';
import {aboutMe} from '../Store/Store'

export class About extends Component {
    state = {content: aboutMe}
    renderContent (content)  {
        const blogContent = [];
        content.forEach(element => {
          if(element.type === 'paragraph') blogContent.push(<p>{element.content}</p>);
          else if (element.type === 'img') blogContent.push(<img class={element.size} src={element.src} alt={element.alt} /> ); 
          else if (element.type === 'title') blogContent.push(<h2 style={element.style}>{element.content}</h2> )  
        })
        return blogContent;
      }
    render() {
        const {blogContent} = this.state.content;
        return (
            <section className="entry-content">
                {this.renderContent(blogContent)}
            </section>
        )
    }
}

export default About
