import React, { Component } from 'react';
import {aboutMe} from '../Store/Store'

export class About extends Component {
    state = {content: aboutMe}
    renderContent (content)  {
        const blogContent = [];
        content.forEach(element => {
          if(element.type === 'paragraph') blogContent.push(<p>{element.content}</p>);
          else if (element.type === 'img') blogContent.push(<img class={element.size + " img-fluid "} src={element.src} alt={element.alt} /> ); 
          else if (element.type === 'title') blogContent.push(<h2 style={element.style}>{element.content}</h2> )  
        })
        return (
            <div class="col-lg-12">
                {blogContent}
            </div>
            );
      }
    render() {
        const {blogContent} = this.state.content;
        return (
            <section className="container">
                <div class="row">
                {this.renderContent(blogContent)}
                </div>
            </section>
        )
    }
}

export default About
