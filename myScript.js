const socialIconButtons = document.getElementsByClassName("social-icon");

function postToSocialMedia(classList) {
    const content = `Check out my cool generative AI Project 😎 \n${window.location.href.toString()}`;
    if (classList.contains("twitter")) {
        const url = `https://twitter.com/dileeps_reply/?text=${encodeURIComponent(
      content
    )}`;
        window.open(url);
    } else if (classList.contains("linkedin")) {
        const url = `https://www.linkedin.com/in/dileepgorantala/?text=${encodeURIComponent(
      content
    )}`;
        window.open(url);
    } else if (classList.contains("whatsapp")) {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`);
    }
}

const addEventListenersToSocialIconButton = () => {
    for (let i = 0; i < socialIconButtons.length; i++) {
        socialIconButtons[i].addEventListener("click", () =>
            postToSocialMedia(socialIconButtons[i].classList)
        );
    }
};

addEventListenersToSocialIconButton();

const skillIcon = document.getElementsByClassName("tooltip");


const addEventListenersToSkillIcon = () => {
    for (let i = 0; i < skillIcon.length; i++) {
        skillIcon[i].addEventListener("click", (e) => {
            console.log(e.target)
            updateDescription(e.target.id);
        });
    }
};

addEventListenersToSkillIcon();

let gradioEl=document.getElementById('gradio');
let gradioImg=document.createElement('gradio-app');
let gradioVoice=document.createElement('gradio-app');
const descriptionDiv = document.getElementsByClassName("about-section");
let feedback=document.getElementById('aboutSection')

const updateDescription = (id) => {
    let description = "";
    gradioImg.style.display = "none";
    gradioVoice.style.display = "none";
    const feedbackTextToText = document.getElementById("feedbackTextToText");
    const feedbackTextToAudio = document.getElementById("feedbackTextToAudio");

    switch (id) {
        case "t2t":
            description = "Text to Text: Its is text to text reply bot. (i.e) If you type any message below it will respond and give you a answer by AI technology. Fell free to give your FEEDBACK below. Thank you for visiting,";
            gradioImg.style.display = "block";
            gradioImg.src='https://dileepgorantala-dileepai.hf.space';
            gradioEl.appendChild(gradioImg);
            feedbackTextToText.style.display = "inline-block";
            feedbackTextToText.textContent='Give Feedback for Text-to-Text'
        feedbackTextToAudio.style.display = "none";
            
            break;
        case "t2a":
            description = "Text to Audio: Audio bot provides you the information in MY VOICE when you ask a question. But please be patience for the reply because it is a server-based voice so, it takes sometime. Thank you for visiting.";
            gradioVoice.style.display = "block";
            gradioVoice.src='https://dileepgorantala-dileepvoiceai.hf.space';
            gradioEl.appendChild(gradioVoice)

            feedbackTextToText.style.display = "none";
            feedbackTextToAudio.textContent='Give Feedback for Text-to-Audio'
        feedbackTextToAudio.style.display = "inline-block";
            break;
        default:
            description = "Description of the selected icon will appear here.";
    }
    for (let i = 0; i < descriptionDiv.length; i++) {
        descriptionDiv[i].textContent = description;
    }
};

updateDescription("googleColab");