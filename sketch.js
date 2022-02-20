var tela=0;
var xtela = 395; var ytela = 262; var ltela = 160; var atela = 55;
var xMenu05 = 350; var xMenu06 = 25; var xMenu07= 305;
var yMenu08 = 200; var yMenu09 = 200;
var xMenu = 137; var xMenu2 = 55; var xMenu3 = 60; var xMenu4 = 285; var xMenu5 = 340; var xMenu6 = 20; var xMenu7 = 350; var xMenu8 = 305; var xMenu9 = 85; var xMenu10 = 335; var xMenu11 = 35;
var yMenu1 = 248; var yMenu2 = 337; var yMenu3 = 422; var yMenu4 = 512; var yMenu5 = 380; var yMenu6 = 325; var yMenu7 = 420; var yMenu8 = 490; var yMenu9 = 355; var yMenu10 = 420; var yMenu11 = 470; var yMenu12 = 435; var yMenu13 = 420; var yMenu14 = 490; var yMenu15 = 290; var yMenu16 = 365; var yMenu17 = 410;
var largura = 340; var largura1= 102; var largura2 = 250; var largura3 = 380;
var altura = 40; var altura1= 42;

function setup()
{
    createCanvas(610, 580);
}

function preload()
{
    menu = loadImage('Meumenulop.png');
    info = loadImage('Meuinfolop.png');
    creditos = loadImage('Meucreditoslop.png');
    fase1 = loadImage('questao1lop.png');
    fase2 = loadImage('questao2lop.png');
    fase3 = loadImage('questao3lop.png');
    fase4 = loadImage('questao4lop.png');
    fase5 = loadImage('questao5lop.png');
    fase6 = loadImage('questao6lop.png');
    fase7 = loadImage('questao7lop.png');
    prox = loadImage('acertolop.png');
    derrota = loadImage('erroulop.png');
    vitoria = loadImage('todascertaslop.png');
}

function draw()
{
    // tela menu
    if(tela==0)
    {
        image(menu,0,0)
        if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura)
        {
            strokeWeight(3);
            stroke(20);
            noFill();
            rect(xMenu, yMenu1, largura, altura, 15);
            if(mouseIsPressed)
            {
                tela=3
            }
        }
        if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura)
        {
            strokeWeight(3);
            stroke(20);
            noFill();
            rect(xMenu, yMenu2, largura, altura, 15);
            if(mouseIsPressed)
            {
                tela=1
            }
        }

        if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura)
        {
            strokeWeight(3);
            stroke(20);
            noFill();
            rect(xMenu, yMenu3, largura, altura, 15);
            if(mouseIsPressed)
            {
                tela=2
            }
        }
    }
    //tela informações
    else if(tela==1)
    {
        image(info, 0, 0)

        if(mouseX > xMenu2 && mouseX < xMenu2 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1)
        {
            noStroke();
            noFill();
            rect(xMenu2, yMenu4, largura1, altura1, 15);
            if(mouseIsPressed)
            {
                tela=0;
            }
        }
    }
    //tela creditos
    else if(tela==2)
    {
        image(creditos, 0, 0)

        if(mouseX > xMenu2 && mouseX < xMenu2 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1)
        {
            noStroke();
            noFill();
            rect(xMenu2, yMenu4, largura1, altura1, 15);
            if(mouseIsPressed)
            {
                tela=0;
            }
        }
    }
    //tela primeira fase
    else if(tela==3)
    {
        image(fase1, 0, 0)

        if(mouseX > xMenu3 && mouseX < xMenu3 + largura2 && mouseY > yMenu6 && mouseY < yMenu6 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu3, yMenu6, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
        if(mouseX > xMenu05 && mouseX < xMenu05 + largura2 && mouseY > yMenu5 && mouseY < yMenu5 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu05, yMenu5, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
        if(mouseX > xMenu06 && mouseX < xMenu06 + largura2 && mouseY > yMenu7 && mouseY < yMenu7 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu06, yMenu7, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=4
            }
        }
        if(mouseX > xMenu07 && mouseX < xMenu07 + largura2 && mouseY > yMenu8 && mouseY < yMenu8 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu07, yMenu8, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
    }
    //proxima
    else if(tela==4)
    {
        image(prox, 0, 0)

        if(mouseX > xtela && mouseX < xtela + ltela && mouseY > ytela && mouseY < ytela + atela)
        {
            noStroke();
            noFill();
            rect(xtela, ytela, ltela, atela, 15);
            if(mouseIsPressed)
            {
                tela=5;
            }
        }
    }
    //tela segunda fase
    else if(tela==5)
    {
        image(fase2, 0, 0)

        if(mouseX > xMenu4 && mouseX < xMenu4 + largura2 && mouseY > yMenu9 && mouseY < yMenu9 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu4, yMenu9, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=6
            }
        }
        if(mouseX > xMenu2 && mouseX < xMenu2 + largura2 && mouseY > yMenu10 && mouseY < yMenu10 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu2, yMenu10, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
        if(mouseX > xMenu5 && mouseX < xMenu5 + largura2 && mouseY > yMenu11 && mouseY < yMenu11 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu5, yMenu11, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
        if(mouseX > xMenu2 && mouseX < xMenu2 + largura2 && mouseY > yMenu4 && mouseY < yMenu4 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu2, yMenu4, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
    }
    //proxima
    else if(tela==6)
    {
        image(prox, 0, 0)

        if(mouseX > xtela && mouseX < xtela + ltela && mouseY > ytela && mouseY < ytela + atela)
        {
            noStroke();
            noFill();
            rect(xtela, ytela, ltela, atela, 15);
            if(mouseIsPressed)
            {
                tela=7;
            }
        }
    }
    //tela terceira fase
    else if(tela==7)
    {
        image(fase3, 0, 0)

        if(mouseX > xMenu7 && mouseX < xMenu7 + largura2 && mouseY > yMenu13 && mouseY < yMenu13 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu7, yMenu13, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
        if(mouseX > xMenu2 && mouseX < xMenu2 + largura2 && mouseY > yMenu12 && mouseY < yMenu12 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu2, yMenu12, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
        if(mouseX > xMenu8 && mouseX < xMenu8 + largura2 && mouseY > yMenu14 && mouseY < yMenu14 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu8, yMenu14, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
        if(mouseX > xMenu6 && mouseX < xMenu6 + largura2 && mouseY > yMenu4 && mouseY < yMenu4 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu6, yMenu4, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=8;
            }
        }
    }
    //proxima
    else if(tela==8)
    {
        image(prox, 0, 0)

        if(mouseX > xtela && mouseX < xtela + ltela && mouseY > ytela && mouseY < ytela + atela)
        {
            noStroke();
            noFill();
            rect(xtela, ytela, ltela, atela, 15);
            if(mouseIsPressed)
            {
                tela=9;
            }
        }
    }
    //tela quarta fase
    else if(tela==9)
    {
        image(fase4, 0, 0)

        if(mouseX > xMenu10 && mouseX < xMenu10 + largura2 && mouseY > yMenu16 && mouseY < yMenu16 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu10, yMenu16, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
        if(mouseX > xMenu9 && mouseX < xMenu9 + largura2 && mouseY > yMenu15 && mouseY < yMenu15 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu9, yMenu15, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=10
            }
        }
        if(mouseX > xMenu8 && mouseX < xMenu8 + largura2 && mouseY > yMenu14 && mouseY < yMenu14 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu8, yMenu14, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
        if(mouseX > xMenu11 && mouseX < xMenu11 + largura2 && mouseY > yMenu17 && mouseY < yMenu17 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu11, yMenu17, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
    }
    //proxima
    else if(tela==10)
    {
        image(prox, 0, 0)

        if(mouseX > xtela && mouseX < xtela + ltela && mouseY > ytela && mouseY < ytela + atela)
        {
            noStroke();
            noFill();
            rect(xtela, ytela, ltela, atela, 15);
            if(mouseIsPressed)
            {
                tela=11;
            }
        }
    }
    //tela quinta fase
    else if(tela==11)
    {
        image(fase5, 0, 0)

        if(mouseX > xMenu10-10 && mouseX < xMenu10-10 + largura2 && mouseY > yMenu16-15 && mouseY < yMenu16-15 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu10-10, yMenu16-15, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
        if(mouseX > xMenu9-35 && mouseX < xMenu9-35 + largura2 && mouseY > yMenu15+20 && mouseY < yMenu15+20 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu9-35, yMenu15+20, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
        if(mouseX > xMenu4-60 && mouseX < xMenu4-60 + largura2 && mouseY > yMenu14+5 && mouseY < yMenu14+5 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu4-60, yMenu14+5, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=12
            }
        }
        if(mouseX > xMenu11 && mouseX < xMenu11 + largura2 && mouseY > yMenu17+10 && mouseY < yMenu17+10 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu11, yMenu17+10, largura2, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
    }
    //proxima
    else if(tela==12)
    {
        image(prox, 0, 0)

        if(mouseX > xtela && mouseX < xtela + ltela && mouseY > ytela && mouseY < ytela + atela)
        {
            noStroke();
            noFill();
            rect(xtela, ytela, ltela, atela, 15);
            if(mouseIsPressed)
            {
                tela=13;
            }
        }
    }
    //tela sexta fase
    else if(tela==13)
    {
        image(fase6, 0, 0)

        if(mouseX > xMenu3-10 && mouseX < xMenu3-10 + largura2+55 && mouseY > yMenu6-55 && mouseY < yMenu6-55 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu3-10, yMenu6-55, largura2+55, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
        if(mouseX > xMenu07-60 && mouseX < xMenu07-60 + largura2+55 && mouseY > yMenu5-40 && mouseY < yMenu5-40 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu07-60, yMenu5-40, largura2+55, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
        if(mouseX > xMenu06 && mouseX < xMenu06 + largura2+55 && mouseY > yMenu7 && mouseY < yMenu7 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu06, yMenu7, largura2+55, altura, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
        if(mouseX > xMenu07-60 && mouseX < xMenu07-60 + largura2+55 && mouseY > yMenu8 && mouseY < yMenu8 + altura)
        {
            noStroke();
            noFill();
            rect(xMenu07-60, yMenu8, largura2+55, altura, 15);
            if(mouseIsPressed)
            {
                tela=14
            }
        }
    }
    //proxima
    else if(tela==14)
    {
        image(prox, 0, 0)

        if(mouseX > xtela && mouseX < xtela + ltela && mouseY > ytela && mouseY < ytela + atela)
        {
            noStroke();
            noFill();
            rect(xtela, ytela, ltela, atela, 15);
            if(mouseIsPressed)
            {
                tela=15;
            }
        }
    }
    //tela setima fase
    else if(tela==15)
    {
        image(fase7, 0, 0)

        if(mouseX > xMenu3-20 && mouseX < xMenu3-10 + largura3 && mouseY > yMenu6-60 && mouseY < yMenu6-60 + altura+10)
        {
            noStroke();
            noFill();
            rect(xMenu3-20, yMenu6-60, largura3, altura+10, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
        if(mouseX > xMenu07-60 && mouseX < xMenu07-60 + largura3-20 && mouseY > yMenu5-40 && mouseY < yMenu5-40 + altura+10)
        {
            noStroke();
            noFill();
            rect(xMenu07-105, yMenu5-25, largura3-20, altura+10, 15);
            if(mouseIsPressed)
            {
                tela=16
            }
        }
        if(mouseX > xMenu06+10 && mouseX < xMenu06+10 + largura3-20 && mouseY > yMenu7+35 && mouseY < yMenu7+35 + altura+10)
        {
            noStroke();
            noFill();
            rect(xMenu06+10, yMenu7+35, largura3-20, altura+10, 15);
            if(mouseIsPressed)
            {
                tela=17
            }
        }
    }
    //vitoria
    else if(tela==16)
    {
        image(vitoria, 0, 0)

        if(mouseX > xMenu2+10 && mouseX < xMenu2+10 + ltela-25 && mouseY > yMenu4-8 && mouseY < yMenu4-8 + atela-10)
        {
            noStroke();
            noFill();
            rect(xMenu2+10, yMenu4-8, ltela-25, atela-10, 15);
            if(mouseIsPressed)
            {
                tela=0;
            }
        }
    }
    //tela derrota
    else if(tela==17)
    {
        image(derrota, 0, 0)

        if(mouseX > xMenu2 && mouseX < xMenu2 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1)
        {
            noStroke();
            noFill();
            rect(xMenu2, yMenu4, largura1, altura1, 15);
            if(mouseIsPressed)
            {
                tela=0;
            }
        }
    }
}