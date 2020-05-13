const works = [
    { author: "Micheal Jackson", lifetime: "1022-1055", tips: "Human", photos: ["human1.jpg", "human2.jpg", "human3.jpg"] },
    { author: "Maria JK", lifetime: "1920-2001", tips: "Classical", photos: ["classical1.jpg", "classical2.jpg"] },
    { author: "John Herry UY", lifetime: "1894-1928", tips: "Abstract", photos: ["abstract1.jpg", "abstract2.jpg", "abstract3.jpg", "abstract4.jpg", "abstract5.jpg"] },
    { author: "Coco", lifetime: "1777-1799", tips: "Beauty", photos: ["beauty1.jpg", "beauty2.jpg"] }
];

const flexContainer = document.getElementsByClassName("flex-container")[0];

function test() {
    let l_works = works.length;
    for (let i = 0; i < l_works; i++) {
        // let h4Element = document.createElement("h4");
        // let h4Inner = "Genre : " + works[i].tips;
        // let h4Node = document.createTextNode(h4Inner);
        // h4Element.appendChild(h4Node);

        // let innerBox1 = document.createElement("div");
        // innerBox1.setAttribute("class", "inner-box");
        // let h3Element1 = document.createElement("h3");
        // let h3Node1 = document.createTextNode(works[i].author + " ");
        // h3Element1.appendChild(h3Node1);
        // let h5Element = document.createElement("h5");
        // let h5Node = document.createTextNode(" lifetime " + works[i].lifetime);
        // h5Element.appendChild(h5Node);
        // h3Element1.appendChild(h5Element);
        // innerBox1.appendChild(h3Element1);

        // let innerBox2 = document.createElement("div");
        // innerBox2.setAttribute("class", "inner-box");
        // let h3Element2 = document.createElement("h3");
        // let h3Node2 = document.createTextNode("Popular photos");
        // h3Element2.appendChild(h3Node2);
        // innerBox2.appendChild(h3Element2);

        // let photos = works[i].photos;
        // let l_photos = photos.length;
        // for (let j = 0; j < l_photos; j++) {
        //     let imgElement = document.createElement("img");
        //     imgElement.setAttribute("class", "photo");
        //     imgElement.setAttribute("src", photos[j]);
        //     innerBox2.appendChild(imgElement);
        // }

        // let buttonElement = document.createElement("button");
        // let buttonNode = document.createTextNode("visit");
        // buttonElement.appendChild(buttonNode);

        // let itemElement = document.createElement("div");
        // itemElement.setAttribute("class", "item");
        // itemElement.appendChild(h4Element);
        // itemElement.appendChild(innerBox1);
        // itemElement.appendChild(innerBox2);
        // itemElement.appendChild(buttonElement);

        // flexContainer.appendChild(itemElement);

        document.write("<div class='item'><h4>Genre : " + works[i].tips + "</h4><div class='inner-box'><h3 style='display: inline-block'>" + works[i].author + "　<h5 style='display: inline-block'>  lifetime:" + works[i].lifetime + "</h5></h3></div><div class='inner-box'><h3>Popular photos</h3>")

        let photos = works[i].photos;
        let l_photos = photos.length;
        for (let j = 0; j < l_photos; j++) {
            document.write("<img class='photo' src=" + photos[j] + "></img>");
        }
        document.write("</div><button>Visit</button></div>");
    }
}

test();