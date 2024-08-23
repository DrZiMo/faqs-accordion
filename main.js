const faqs = {
  id: [0, 1, 2],
  que: [
    "What is the purpose of this website/application?",
    "How do I create an account?",
    "What payment methods are accepted?",
  ],
  ans: [
    "The main purpose of this website/application is to provide users with a centralized hub of information and resources related to [topic or service]. Whether you're looking to learn more about [key features/offerings] or seeking answers to common questions, this FAQ section aims to be a helpful and comprehensive reference.",
    "To create an account, simply click on the 'Sign Up' button in the top right corner of the homepage. This will take you to the registration page where you can enter your basic information, such as your name, email address, and desired password. Once you've completed the registration form, click 'Create Account' and you'll be all set to log in and start using the [website/app].",
    "We accept a variety of popular payment methods, including Visa, Mastercard, American Express, Discover, as well as PayPal and Apple Pay. During the checkout process, you'll be able to select your preferred payment option. If you have any issues with your payment, please don't hesitate to contact our customer support team for assistance.",
  ],
};

let showed = true;

const container = document.querySelector(".container");

function createFaqs() {
  for (let i = 0; i < faqs.id.length; i++) {
    const content = document.createElement("div");
    container.appendChild(content);
    content.className = "content";

    const questionAndAnswer = document.createElement("div");
    content.appendChild(questionAndAnswer);
    questionAndAnswer.className = "queAndAns";
    questionAndAnswer.setAttribute("data-index", faqs.id[i]);

    const question = document.createElement("div");
    questionAndAnswer.appendChild(question);
    question.className = "question";

    const questionTitle = document.createElement("h4");
    question.appendChild(questionTitle);
    questionTitle.textContent = faqs.que[i];

    const questionShow = document.createElement("img");
    question.appendChild(questionShow);
    questionShow.className = "show-hide-btn";
    questionShow.src = "assets/images/icon-plus.svg";
    questionShow.addEventListener("click", () => showAndHide(faqs.id[i]));
    questionShow.setAttribute("data-index", faqs.id[i]);

    const answer = document.createElement("div");
    questionAndAnswer.appendChild(answer);
    answer.className = "answer";
    answer.setAttribute("data-index", faqs.id[i]);

    const answerCon = document.createElement("p");
    answer.appendChild(answerCon);
    answerCon.textContent = faqs.ans[i];
  }
}

createFaqs();

function showAndHide(itemIndex) {
  const conts = document.querySelectorAll(".queAndAns");
  const imag = document.querySelectorAll(".show-hide-btn");

  conts.forEach((cont) => {
    const answerIndex = cont.querySelector(".answer").dataset.index;
    const imageIndex = imag[itemIndex].dataset.index;
    if (showed) {
      if (answerIndex == itemIndex) {
        cont.querySelector(".answer").style.display = "block";
        showed = false;
        if (imageIndex == itemIndex) {
          imag[itemIndex].src = "assets/images/icon-minus.svg";
        }
      }
    } else {
      if (answerIndex == itemIndex) {
        cont.querySelector(".answer").style.display = "none";
        showed = true;
        if (imageIndex == itemIndex) {
          imag[itemIndex].src = "assets/images/icon-plus.svg";
        }
      }
    }
  });
}
