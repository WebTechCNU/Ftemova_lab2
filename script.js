let arr = [
    {
        name: "sweets 1",
        link: "media/2.jpg",
        description: "ОКУЛЯРИ ВІД СОНЦЯ OVERSIZE 557грн",
        category: 1
    },
    {
        name: "sweets 2",
        link: "media/3.jpg",
        description: "ОКУЛЯРИ СОНЦЕЗАХИСНІ КВАДРАТНІ З ГРАДІЄНТНИМИ ЛІНЗАМИ 980грн ",  
        category: 1
    },
    {
        name: "sweets 3",
        link: "media/4.jpg",
        description: "ОКУЛЯРИ СОНЦЕЗАХИСНІ CAT EYE 655грн",
        category: 1
    },
    {
        name: "sweets 4",
        link: "media/5.jpg",
        description: "ОКУЛЯРИ ВІД СОНЦЯ ВУЗЬКІ 245грн",  
        category: 1
    },
    {
        name: "sweets 5",
        link: "media/6.jpg",
        description: " ОКУЛЯРИ ВІД СОНЦЯ З ЛЕОПАРДОВИМ ПРИНТОМ 300грн",
        category: 1
    },
    {
        name: "sweets 6",
        link: "media/7.jpg",
        description: "СОНЦЕЗАХИСНІ ОКУЛЯРИ З ЛЕОПАРДОВОЮ ОПРАВОЮ (вузькі) 350грн ",
        category: 1
    },
    {
        name: "sweets 7",
        link: "media/8.jpg",
        description: "СЕРЕЖКИ ПЕРЛИНА 469грн",
        category: 5
    },
    {
        name: "sweets 8",
        link: "media/9.jpg",
        description: "СЕРЕЖКИ З ЗЕЛЕНИМ СМАРАГДОМ 779грн",
        category: 5
    },
    {
        name: "sweets  ",
        link: "media/11.jpg",
        description: "СЕРЕЖКИ З БІЛИМ КАМІННЯМ 575грн",
        category: 5
    },
    {
        name: "sweets 5",
        link: "media/12.jpg",
        description: "СЕРЕЖКИ З БАНТИКОМ ТА МАЛЕНЬКИМИ ПЕРЛАМИ 400грн",
        category: 5
    },
    {
        name: "sweets 5",
        link: "media/13.jpg",
        description: "СЕРЕЖКИ З ПЕРЛАМИ 620грн",
        category: 5
    },
    {
        name: "sweets 5",
        link: "media/14.jpg",
        description: "КІЛЬЦЕ ПЕРЕПЛЕТІННЯ 490грн",
        category: 2
    },
    {
        name: "sweets 5",
        link: "media/15.jpg",
        description: "НАБІР ЗОЛОТИХ БРАСЛЕТІВ 1300грн",
        category: 4
    },
    {
        name: "sweets 5",
        link: "media/16.jpg",
        description: "НАБІР КІЛЕЦЬ З МАЛЕНЬКИМ КАМІННЯМ 299грн",
        category: 2
    },
    {
        name: "sweets 5",
        link: "media/17.jpg",
        description: "КІЛЬЦЕ ЗІРКА 400грн",
        category: 2
    },
    {
        name: "sweets 5",
        link: "media/18.jpg",
        description: " ЗОЛОТЕ КІЛЬЦЕ З СЕРЦЯМИ 780грн",
        category: 2
    },
    {
        name: "sweets 5",
        link: "media/19.jpg",
        description: "ПІДВІСКА КАМІНЧИКИ 470грн",
        category: 3
    },
    {
        name: "sweets 5",
        link: "media/20.jpg",
        description: "ЗОЛОТА ПІДВІСКА З БІЛИМ КАМІННЯМ 700грн",
        category: 3
    },
    {
        name: "sweets 5",
        link: "media/21.jpg",
        description: "СЕРЕЖКИ З ПЕРЛАМИ 550грн",
        category: 5
    },
    {
        name: "sweets 5",
        link: "media/22.jpg",
        description: "НАБІР ЗОЛОТИХ БРАСЛЕТІВ(4ШТ) 600грн",
        category: 4
    },
    {
        name: "sweets 5",
        link: "media/23.jpg",
        description: "БРАСЛЕТИ З РОЖЕВИХ БУСИН 300грн",
        category: 4
    },
    {
        name: "sweets 5",
        link: "media/24.jpg",
        description: "БРАСЛЕТИ ЛАНЦЮГИ 899грн",
        category: 4
    },
    {
        name: "sweets 5",
        link: "media/25.jpg",
        description: "ПІДВІСКИ БУКВА  500грн",
        category: 3
    },
    {
        name: "sweets 5",
        link: "media/26.jpg",
        description: "ПІДВІСКИ З БІЛИМ КВАРЦОМ 670грн",
        category: 3
    },
    {
        name: "sweets 5",
        link: "media/27.jpg",
        description: "ЗОЛОТІ БРАСЛЕТИ З СМАРАГДОМ 1200грн",
        category: 4
    },
    {
        name: "sweets 5",
        link: "media/28.jpg",
        description: "НАБІР СЕРЕЖОК (8ШТ) 999грн",
        category: 5
    },
    {
        name: "sweets 5",
        link: "media/29.jpg",
        description: "НАБІР КІЛЕЦЬ (5ШТ) 440грн ",
        category: 2
    },
    {
        name: "sweets 5",
        link: "media/30.jpg",
        description: "НАБІР КІЛЕЦЬ (6ШТ) 890грн ",
        category: 2
    },
    {
        name: "sweets 5",
        link: "media/31.jpg",
        description: "ОКУЛЯРИ З БІЛОЮ ОПРАВОЮ(ВУЗЬКІ) 700грн",
        category: 1
    },
    {
        name: "sweets 5",
        link: "media/32.jpg",
        description: "НАБІР ПОЗОЛОЧЕНИХ БРАСЛЕТІВ 600грн",
        category: 4
    },];
let cookie = "user subscribed";

function getElements(category) {
    let cont = document.querySelector("#container");
    let out = "<div class='row'>";
    let i = 0;
    arr.forEach(elem => {
        if (category == null || elem.category == category) {
            out += "<div class='col-sm-4'><img class='img-fluid' src=" + elem.link + " alt=" + elem.name + " ><b class='colorful-text'>" + elem.description + "</b></div>"
            i++;
        }
        if (i % 3 == 0 && 1) {
            out += "</div><div class='row'>";
        }
    });
    out += "</div>";
    cont.innerHTML = out;
}

let modal = document.getElementById("myModal");
let closeBtn = document.querySelector("#closeBtn");

function close() {
    modal.style.display = "none";
}

setTimeout(() => {
    if (document.cookie != cookie) {
        modal.style.display = "block";

    }
}, 3000)

let closeTime = 5;

setInterval(() => {
    if (modal.style.display == "block" && closeTime > 0) {
        closeTime -= 1;
        closeBtn.innerHTML = closeTime + " seconds";
    } else if(closeTime <= 0){
        closeBtn.innerHTML = "&times;";
        closeBtn.addEventListener("click", close);
    }
}, 1000)


function subscribe() {
    document.cookie = cookie;
    close();
}