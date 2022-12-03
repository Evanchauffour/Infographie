const start = document.querySelector('.intro')
const titre = document.querySelector('h1')
const deux = document.querySelector('.deux')
const trois = document.querySelector('.trois')
const quatre = document.querySelector('.quatre')
const cielneigenuit = document.querySelector('.ciel')
const deuxImg = document.querySelector('.deux-img')
const infoNeige1 = document.querySelector('.container-info-neige')
const infoNeige2 = document.querySelector('.container-info-neige-deux')
const infoNeige3 = document.querySelector('.container-info-neige-trois')
const containerTourSectionDeux = document.querySelector('.tours-section-deux')
const containerTourSectionTrois = document.querySelector('.tours-section-trois')
const lune = document.querySelector('.lune')
const lunenuit = document.querySelector('.lunenuit')
const oiseaux = document.querySelector('.oiseaux')
const cielNuit = document.querySelector('.ciel-nuit')
const titreNeigeNuit = document.querySelector('.container-titre-neige-nuit')
const infoNeigeNuitUn = document.querySelector('.container-info-neige-nuit-un')
const infoNeigeNuitDeux = document.querySelector('.container-info-neige-nuit-deux')
const titreNuit = document.querySelector('.titre-nuit')
window.addEventListener('scroll', function(){
    var value = window.scrollY;
    console.log(value*0.1);
    start.style.scale = value * 0.1 + 100 + '%';
    start.style.top = value * 0.1 + '%';
    titre.style.top = value * 0.2 + 20 + '%';

    if(value * 0.1 > 100){
        infoNeige1.style.opacity = 1;

    }else if(value * 0.1 < 100){
        infoNeige1.style.opacity = 0;
    }

    if(value * 0.1 > 130){
        infoNeige2.style.opacity = 1;
        infoNeige2.style.left = (value * 0.1 - 130) * 0.1 - 40 + '%';
        infoNeige3.style.opacity = 1;
        infoNeige3.style.right = (value * 0.1 - 130) * 0.1 - 40 + '%';
        containerTourSectionDeux.style.opacity = 1
        const allTourSectionDeux = [...document.querySelectorAll('.tour-section-deux')]

        let toursCount = allTourSectionDeux.length
        if(toursCount < 6){
            function createElement(){
                const toursSectionDeux = document.createElement('img')
                toursSectionDeux.classList.add('tour-section-deux')
                toursSectionDeux.src = "../infographie/img/tour0.png"
                containerTourSectionDeux.appendChild(toursSectionDeux)
            }
            createElement()
        }
        console.log(toursCount)

    }else if(value * 0.1 < 130){
        infoNeige2.style.opacity = 0;
        containerTourSectionDeux.style.opacity = 0
    }
    if(value*0.1 > 800){
         deux.style.scale = (value * 0.1 - 800) + 100 + '%';
         deux.style.top = (value * 0.1 - 800) + '%';
         deux.style.right = (value * 0.1 - 800) * 0.07 + '%';
     }else if(value * 0.1 < 800){
         deux.style.top = 0;
         deux.style.scale = 1;
     }

    if(value*0.1 > 1050){
         cielneigenuit.style.opacity = (value * 0.1 - 1050) / 100;
         lune.style.right = (value * 0.1 - 1050) * 0.1 - 10 + '%';
         lune.style.bottom = (value * 0.1 - 1050) * 0.1 + 30 + '%';
         infoNeigeNuitUn.style.opacity = 1;
         infoNeigeNuitDeux.style.opacity = 1;
         containerTourSectionTrois.style.opacity = 1
        const allTourSectionTrois = [...document.querySelectorAll('.tour-section-trois')]

        let toursCountTrois = allTourSectionTrois.length
        if(toursCountTrois < 16){
            function createElementTrois(){
                const toursSectionTrois = document.createElement('img')
                toursSectionTrois.classList.add('tour-section-trois')
                toursSectionTrois.src = "../infographie/img/tour0.png"
                containerTourSectionTrois.appendChild(toursSectionTrois)
            }
            createElementTrois()
        }
        console.log(toursCountTrois)
        
     }else if(value*0.1 < 1050){
         cielneigenuit.style.opacity = 0;
         infoNeigeNuitUn.style.opacity = 0;
         infoNeigeNuitDeux.style.opacity = 0;
         containerTourSectionTrois.style.opacity = 0;
     }
     if(value * 0.1 > 1400){
       lune.style.bottom = -(value * 0.1 - 1400) * 0.2 + ((value * 0.1 - 1050) * 0.1 + 30) + '%';
     }

     if(value*0.1 > 980){
        titreNeigeNuit.style.opacity = 1;
        
     }else if(value*0.1 < 980){
         titreNeigeNuit.style.opacity = 0;
     }

     if(value*0.1 > 1200){
         titreNeigeNuit.style.color = "white";
         infoNeigeNuitUn.style.color = "white";
         infoNeigeNuitDeux.style.color = "white";
        
     }else if(value*0.1 < 1200){
         titreNeigeNuit.style.color = "black";
         infoNeigeNuitUn.style.color = "black";
         infoNeigeNuitDeux.style.color = "black";
     }

     if(value * 0.1 > 1580){
         trois.style.top = (value * 0.1 - 1580) + '%';
         trois.style.scale = (value * 0.1 - 1580) + 100 + '%';
         cielneigenuit.style.opacity = (-value * 0.1 - 1580) / 100;
         cielneigenuit.style.transition = "all 0s ease";
         lune.style.opacity = 0;
         quatre.style.opacity = 1;
     }else if(value * 0.1 < 1580){
         lune.style.opacity = 1;
         trois.style.top = 0;
         trois.style.scale = 1;
         cielneigenuit.style.transition = "all 1s ease;";
         quatre.style.opacity = 0
     }

     if(value * 0.1 > 1750){
         lunenuit.style.opacity = (value * 0.1 - 1750) / 100;
         oiseaux.style.left = -(value * 0.1 - 1750) * 0.2 + 20 + '%';
         oiseaux.style.top = -(value * 0.1 - 1750) * 0.1 + 5 + '%';

     }else if(value * 0.1 < 1750){
         lunenuit.style.opacity = (-value * 0.1 - 1750) / 100;
     }

     if(value * 0.1 > 1800){
         titreNuit.style.opacity = 1;
     }else if(value * 0.1 < 1800){
         titreNuit.style.opacity = 0;
     }

})