import React from "react";
import Story from "./Story.jsx"
import axios from "axios";
import { Jumbotron } from "./migration";


const StoryContainer = ({stories}) => {
    let jsx = []
    for (let i = 0; i < stories.length; i++) {
        let story = stories[i];
        console.log(story.imageRatio);
        jsx.push(
            story.show && (
                <Story
                  heading={story.heading}
                  message={story.message}
                  link={story.imageLink}
                  imgSize={story.imageSize}
                  imgRatio={story.imageRatio}
                  pic_right={story.pic_right}
                  pic_left={story.pic_left}
                />
            )
        )
    }
    return (
        <>
        {jsx}
        </>
    )
};

export default StoryContainer;