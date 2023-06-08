import { posts } from './content.js';
// import { postsGeneral } from '/contentGeneral.js';

   const topics = document.getElementById('topics')
//    const general = document.getElementById('generelle-infos')

   let blogPost = ""


   function makePostGerman(allPosts) {
        for (let i = 0; i < allPosts.length; i ++) {
        blogPost += `
        <div class="collapsible_box">
        <button type="button" class="collapsible"><i class="arrow right"></i><p>${allPosts[i].topicGerman}</p></button>
        <div class="content">
        `
        if (allPosts[i].textGerman) {
            blogPost += `
            <div class="text german" 
            layer1='${i}'
            >
            ${allPosts[i].textGerman}
            </div>
            `
        }
        if (allPosts[i].subtopics) {
            for (let j = 0; j < allPosts[i].subtopics.length; j++) {
                blogPost += `
                <button type="button" class="collapsible toggle"><i class="arrow dropdown right"></i>${allPosts[i].subtopics[j].topicGerman}</button>
                <div class="content">
                <div class="padding text german secondLayer" 
                layer1="${i}"
                layer2="${j}">
                        ${allPosts[i].subtopics[j].textGerman}
                </div>`

                if (allPosts[i].subtopics[j].subtopics) {
                    for (let k = 0; k < allPosts[i].subtopics[j].subtopics.length; k++) {
                        blogPost += `
                    <button type="button" class="collapsible toggle thirdLayer"><i class="arrow dropdown right"></i>${allPosts[i].subtopics[j].subtopics[k].topicGerman}</button>
                    <div class="content padding text german thirdLayer"
                    layer1="${i}"
                    layer2="${j}"
                    layer3="${k}"
                    >
                        ${allPosts[i].subtopics[j].subtopics[k].textGerman}
                        </div>`
                    }
                }
                blogPost += `    
                    </div>
                `
            }
        }
        

        blogPost += `
            </div>
        </div>
        `
    }
        return blogPost
   }

    topics.innerHTML += makePostGerman(posts)
    // blogPost = ""

    // general.innerHTML += makePostGerman(postsGeneral)


   