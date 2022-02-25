function multi() {
    if(document.getElementById("out") != null){
        document.getElementById("out").remove();
    }
    let inp1 = document.getElementById('inp_1').value,
    inp2 = document.getElementById('inp_2').value;

    console.log(inp1*inp2);
    let h1 = document.createElement('h1');
    h1.id = "out";
    var out = inp1*inp2;
    let outNode = document.createTextNode(out);
    document.body.prepend(h1);
    h1.append(outNode);
}

let ol = document.createElement('ol');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');

var str1 = "Добрая половина населения не поддерживает правительство. Злую половину населения никак не решаются опросить.";
var str2 = "Новейшая инновация Сколково: прибор ночного видения на солнечных батареях.";
var str3 = "Путин рассказал россиянам, что у них теперь есть гиперпуперзвуковая ракета, способная поразить Америку. Но это ещё не всё! У россиян ещё есть зарплаты и пенсии, способные поразить Америку.";

let TextNode1 = document.createTextNode(str1);
let TextNode2 = document.createTextNode(str2);
let TextNode3 = document.createTextNode(str3);

document.body.append(ol);

ol.type = "A";
ol.classList.add("main");

let main = document.querySelector(".main");
main.style.margin = "50px";

li1.classList.add("sub");
li2.classList.add("sub");
li3.classList.add("sub");

ol.append(li1);
ol.append(li2);
ol.append(li3);

li1.append(TextNode1);
li2.append(TextNode2);
li3.append(TextNode3);